"use client";

import { useMemo, useRef, useState } from "react";

type Pos = { x: number; y: number };

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function WalentynkiPage() {
  const areaRef = useRef<HTMLDivElement | null>(null);

  const [noDodges, setNoDodges] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState<Pos>({ x: 0, y: 0 });
  const [noIsFlying, setNoIsFlying] = useState(false);

  const messages = useMemo(
    () => [
      "TAK ❤️",
      "TAK 🥺",
      "No proszę 😇",
      "TAK, obiecuję pizzę 🍕",
      "To może 100 przytulasów? 🤗",
      "TAK!!! 😍",
    ],
    []
  );

  const subtitle = useMemo(() => {
    if (noDodges === 0) return 'Wybierz mądrze… przycisk “Nie” jest trochę… nieśmiały.';
    return messages[Math.min(noDodges - 1, messages.length - 1)];
  }, [noDodges, messages]);

  function moveNoButtonInsideCard() {
    const area = areaRef.current;
    if (!area) return;

    const rect = area.getBoundingClientRect();

    // marginesy, żeby nie ucinało + żeby nie wchodziło pod górny tekst
    const padding = 24;
    const topSafe = 220; // omija nagłówek/obrazek (dopasuj jak chcesz)

    // orientacyjny rozmiar przycisku
    const btnW = 120;
    const btnH = 48;

    const x = randomBetween(padding, Math.max(padding, rect.width - btnW - padding));
    const y = randomBetween(topSafe, Math.max(topSafe, rect.height - btnH - padding));

    setNoPos({ x, y });
  }

  function handleNoDodge() {
    if (!noIsFlying) setNoIsFlying(true);
    setNoDodges((v) => v + 1);
    moveNoButtonInsideCard();
  }

  function handleYes() {
    setAccepted(true);
  }

  if (accepted) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: 24,
          background: "linear-gradient(180deg, #ffe6ef, #fff)",
        }}
      >
        <div style={{ maxWidth: 760, textAlign: "center" }}>
          <h1 style={{ fontSize: 52, marginBottom: 8 }}>YAAAY!! ❤️</h1>
          <p style={{ fontSize: 18, marginBottom: 18 }}>
            Oficjalnie: jesteś moją walentynką 🫶
          </p>

          <img
            src="/walentynki.gif"
            alt="Walentynkowa animacja"
            style={{
              width: "min(420px, 92vw)",
              borderRadius: 16,
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
            }}
          />

          <div style={{ marginTop: 18, fontSize: 16 }}>
            <strong>Kupon:</strong> 1× randka + 1× przytulas + 1× niespodzianka ✨
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background: "linear-gradient(180deg, #fff, #ffe6ef)",
      }}
    >
      <div
        ref={areaRef}
        style={{
          width: "min(900px, 96vw)",
          height: "min(520px, 80vh)",
          position: "relative", // <- WAŻNE: absolute będzie liczone względem tej karty
          borderRadius: 24,
          background: "rgba(255,255,255,.75)",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          padding: 24,
          overflow: "hidden", // <- WAŻNE: nie wyjdzie poza okno
        }}
      >
        <div style={{ textAlign: "center", marginTop: 12 }}>
          <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 8 }}>
            mini-misja walentynkowa
          </div>

          <h1 style={{ fontSize: 40, margin: "0 0 8px" }}>
            Zostaniesz moją walentynką? 💘
          </h1>

          <p
            style={{
              fontSize: 18,
              margin: 0,
              minHeight: 28,
              transition: "all 0.2s ease",
              color: noDodges > 0 ? "#ff3b7a" : "inherit",
              fontWeight: noDodges > 0 ? 600 : 400,
            }}
          >
            {subtitle}
          </p>

          <div style={{ marginTop: 18 }}>
            <img
              src="/serce.png"
              alt="Serce"
              style={{ width: 160, height: 160, objectFit: "contain" }}
            />
          </div>
        </div>

        {/* START: przyciski obok siebie (tylko zanim "NIE" zacznie uciekać) */}
        {!noIsFlying && (
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "center",
              marginTop: 34,
            }}
          >
            <button
              onClick={handleYes}
              style={{
                padding: "14px 26px",
                borderRadius: 14,
                border: 0,
                fontSize: 18,
                cursor: "pointer",
                background: "#ff3b7a",
                color: "white",
                boxShadow: "0 10px 20px rgba(255,59,122,.25)",
              }}
            >
              TAK ❤️
            </button>

            <button
              onMouseEnter={handleNoDodge}
              onFocus={handleNoDodge}
              onClick={handleNoDodge}
              style={{
                padding: "12px 22px",
                borderRadius: 14,
                border: "1px solid rgba(0,0,0,.12)",
                background: "white",
                cursor: "pointer",
                fontSize: 16,
                userSelect: "none",
              }}
            >
              NIE 🙈
            </button>
          </div>
        )}

        {/* Po pierwszej próbie: NIE staje się absolutny w obrębie karty */}
        {noIsFlying && (
          <>
            {/* TAK zostaje na środku */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 34 }}>
              <button
                onClick={handleYes}
                style={{
                  padding: "14px 26px",
                  borderRadius: 14,
                  border: 0,
                  fontSize: 18,
                  cursor: "pointer",
                  background: "#ff3b7a",
                  color: "white",
                  boxShadow: "0 10px 20px rgba(255,59,122,.25)",
                }}
              >
                TAK ❤️
              </button>
            </div>

            <button
              onMouseEnter={handleNoDodge}
              onFocus={handleNoDodge}
              onClick={handleNoDodge}
              style={{
                position: "absolute",
                left: noPos.x,
                top: noPos.y,
                padding: "12px 22px",
                borderRadius: 14,
                border: "1px solid rgba(0,0,0,.12)",
                background: "white",
                cursor: "pointer",
                fontSize: 16,
                transition: "left 120ms ease, top 120ms ease",
                userSelect: "none",
                zIndex: 10,
              }}
            >
              NIE 🙈
            </button>
          </>
        )}

        <div style={{ position: "absolute", bottom: 14, left: 18, fontSize: 13, opacity: 0.65 }}>
          Próby ucieczki “NIE”: {noDodges}
        </div>
      </div>
    </main>
  );
}

