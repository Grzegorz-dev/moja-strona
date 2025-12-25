import { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { get } from "@vercel/blob";

// Jeśli używasz Vercel Blob, to w większości przypadków najlepiej Node runtime:
export const runtime = "nodejs";
// Żeby endpoint nie był cachowany:
export const dynamic = "force-dynamic";

type GuideKey = "shop" | "blog";

// USTAW tutaj ŚCIEŻKI do plików w Blob Store (dokładnie takie, jak widzisz w panelu).
// W Twoim przypadku folder nazywa się: guides/
// i pliki mają długie nazwy — możesz je uprościć w Blob (zmienić nazwę przy uploadzie),
// ale na teraz wpisz 1:1.
const GUIDE_BLOB_PATHS: Record<GuideKey, string> = {
  shop: "guides/Instrukcja obslugi sklepu online - Grzegorz Slowiaczek.pdf",
  blog: "guides/Instrukcja obslugi blogu oraz aktualnosci - Grzegorz Slowiaczek.pdf",
};

// Włącz na chwilę, jeśli chcesz zobaczyć BARDZIEJ SZCZEGÓŁOWE błędy w JSON.
// Potem wyłącz (false), żeby nie zdradzać szczegółów atakującym.
const DEBUG_ERRORS = false;

function getSecretKey() {
  const secret = process.env.GUIDE_TOKEN_SECRET;
  if (!secret) throw new Error("Missing GUIDE_TOKEN_SECRET");
  return new TextEncoder().encode(secret);
}

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token");
    if (!token) {
      return Response.json({ error: "Brak tokenu" }, { status: 400 });
    }

    // 1) Weryfikacja JWT
    const { payload } = await jwtVerify(token, getSecretKey());

    // 2) Odczyt klucza poradnika z payloadu
    const key = payload.key as GuideKey | undefined;
    if (!key || (key !== "shop" && key !== "blog")) {
      return Response.json({ error: "Nieprawidłowy typ poradnika" }, { status: 400 });
    }

    // 3) Mapowanie na plik w Blob
    const pathname = GUIDE_BLOB_PATHS[key];
    if (!pathname) {
      return Response.json({ error: "Brak pliku dla wskazanego poradnika" }, { status: 404 });
    }

    // 4) Pobranie podpisanego URL do blob-a (bez publicznego udostępniania)
    //    - "get" zwraca m.in. url
    const blob = await get(pathname);

    // 5) Redirect do Blob URL (przeglądarka otworzy PDF albo pobierze — zależy od ustawień przeglądarki)
    return new Response(null, {
      status: 302,
      headers: {
        Location: blob.url,
        // Drobny hardening:
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    // Produkcyjnie: jedna krótka informacja.
    if (!DEBUG_ERRORS) {
      return Response.json(
        { error: "Nieprawidłowy lub wygasły token" },
        { status: 401 }
      );
    }

    // Debug: zwraca szczegóły, dlaczego jose odrzuca token (np. expired, signature invalid, claim invalid)
    return Response.json(
      {
        error: "Nieprawidłowy lub wygasły token",
        details: {
          name: err?.name,
          code: err?.code,
          message: err?.message,
        },
      },
      { status: 401 }
    );
  }
}
