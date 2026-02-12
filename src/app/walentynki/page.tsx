
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Pos = { x: number; y: number };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function WalentynkiPage() {
  const areaRef = useRef<HTMLDivElement | null>(null);

  const [yesClicks, setYesClicks] = useState(0);
  const [noDodges, setNoDodges] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const [noPos, setNoPos] = useState<Pos>({ x: 0, y: 0 });

  const yesText = useMemo(() => {
    const texts = ["TAK ❤️", "TAK 🥺", "TAK!!! 😍", "No proszę 😇", "TAK, obiecuję randkę 🍕"];
    return texts[clamp(noDodges, 0, texts.length - 1)];
  }, [noDodges]);

  // ustaw startową pozycję "Nie" po pierwszym renderze
  useEffect(() => {
    moveNoButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function moveNoButton() {
    const area = areaRef.current;
    if (!area) return;

    const rect = area.getBoundingClientRect();

    // marginesy, żeby nie ucinało przycisku
    const padding = 24;

    // Zakładamy orientacyjny rozmiar przycisku
    const btnW = 120;
    const btnH = 48;

    const x = randomBetween(padding, Math.max(padding, rect.width - btnW - padding));
    const y = randomBetween(padding, Math.max(padding, rect.height - btnH - padding));

    setNoPos({ x, y });
    setNoDodges((v) => v + 1);
  }

  function handleYes() {
    setYesClicks((v) => v + 1);
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
        <div style={{ maxWidth: 720, textAlign: "center" }}>
          <h1 style={{ fontSize: 48, marginBottom: 8 }}>YAAAY!! ❤️</h1>
          <p style={{ fontSize: 18, marginBottom: 16 }}>
            Oficjalnie: jesteś moją walentynką 🫶
          </p>

          {/* Tutaj możesz wrzucić GIF/obrazek */}
          <img
            src="/walentynki.gif"
            alt="Walentynkowa animacja"
            style={{ width: "min(420px, 90vw)", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,.12)" }}
          />

          <div style={{ marginTop: 18, fontSize: 16 }}>
            <strong>Kupon:</strong> 1× randka + 1× przytulas + 1× niespodzianka ✨
          </div>
        </div>
      </main>
    );
  }

  const yesScale = 1 + Math.min(noDodges, 8) * 0.08; // rośnie do ~1.64x

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
          position: "relative",
          borderRadius: 24,
          background: "rgba(255,255,255,.7)",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          padding: 24,
          overflow: "hidden",
        }}
      >
        <div style={{ textAlign: "center", marginTop: 12 }}>
          <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 8 }}>
            mini-misja walentynkowa
          </div>

          <h1 style={{ fontSize: 40, margin: "0 0 8px" }}>Zostaniesz moją walentynką? 💘</h1>
          <p style={{ fontSize: 18, margin: 0, opacity: 0.85 }}>
            Wybierz mądrze… przycisk “Nie” jest trochę… nieśmiały.
          </p>

          {/* możesz dać tu obrazek */}
          <div style={{ marginTop: 18 }}>
            <img
              src="/serce.png"
              alt="Serce"
              style={{ width: 160, height: 160, objectFit: "contain" }}
            />
          </div>
        </div>

        {/* YES */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 24 }}>
          <button
            onClick={handleYes}
            style={{
              transform: `scale(${yesScale})`,
              transition: "transform 120ms ease",
              padding: "14px 22px",
              borderRadius: 14,
              border: "0",
              fontSize: 18,
              cursor: "pointer",
              background: "#ff3b7a",
              color: "white",
              boxShadow: "0 10px 20px rgba(255,59,122,.25)",
            }}
          >
            {yesText}
          </button>
        </div>

        {/* NO (ucieka) */}
        <button
          onMouseEnter={moveNoButton}
          onFocus={moveNoButton}
          // opcjonalnie: jak jednak kliknie, też uciekaj
          onClick={moveNoButton}
          style={{
            position: "absolute",
            left: noPos.x,
            top: noPos.y,
            padding: "12px 20px",
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,.12)",
            background: "white",
            cursor: "pointer",
            fontSize: 16,
            transition: "left 120ms ease, top 120ms ease",
            userSelect: "none",
          }}
          aria-label="Nie"
        >
          NIE 🙈
        </button>

        <div style={{ position: "absolute", bottom: 14, left: 18, fontSize: 13, opacity: 0.65 }}>
          Próby ucieczki “NIE”: {noDodges}
        </div>
      </div>
    </main>
  );
}
