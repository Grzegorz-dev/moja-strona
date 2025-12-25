import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

type GuideKey = "shop" | "blog";

function getSecret() {
  const secret = process.env.GUIDE_TOKEN_SECRET;
  if (!secret) throw new Error("Missing GUIDE_TOKEN_SECRET");
  return new TextEncoder().encode(secret);
}

async function verifyToken(token: string): Promise<{ key: GuideKey }> {
  const { payload } = await jwtVerify(token, getSecret(), {
    // jeśli w skrypcie użyłeś innego algorytmu, zmień tutaj
    algorithms: ["HS256"],
  });

  const key = payload.key;
  if (key !== "shop" && key !== "blog") {
    throw new Error("Invalid token key");
  }

  return { key };
}

function pickPdfUrl(key: GuideKey): string {
  const map: Record<GuideKey, string | undefined> = {
    shop: process.env.GUIDE_SHOP_PDF_URL,
    blog: process.env.GUIDE_BLOG_PDF_URL,
  };

  const url = map[key];
  if (!url) throw new Error(`Missing PDF URL for key=${key}`);
  return url;
}

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token");
    if (!token) {
        return new Response(
          JSON.stringify({
            error: "INVALID_TOKEN",
            name: err?.name,
            code: err?.code,
            message: err?.message,
          }),
          { status: 401, headers: { "content-type": "application/json" } }
        );

    }

    const { key } = await verifyToken(token);
    const pdfUrl = pickPdfUrl(key);

    const dl = req.nextUrl.searchParams.get("dl") === "1"; // ?dl=1 wymusza pobranie
    const filename =
      key === "shop"
        ? "instrukcja-obslugi-sklepu-online.pdf"
        : "instrukcja-obslugi-bloga-i-aktualnosci.pdf";

    // Pobieramy PDF z Blob URL i zwracamy dalej jako odpowiedź
    const upstream = await fetch(pdfUrl, { cache: "no-store" });
    if (!upstream.ok) {
      return new Response("Nie udało się pobrać PDF", { status: 502 });
    }

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${dl ? "attachment" : "inline"}; filename="${filename}"`,
        // prywatny content: nie cachuj w CDN/przeglądarkach
        "Cache-Control": "private, no-store, max-age=0",
      },
    });
  } catch {
    return new Response("Nieprawidłowy lub wygasły token", { status: 403 });
  }
  
}


