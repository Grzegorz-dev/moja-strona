"use client";

import { useMemo, useRef, useState } from "react";

type Pos = { x: number; y: number };

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function WalentynkiPage() {
  const areaRef = useRef<HTMLDivElement | null>(null);
  const noPlaceholderRef = useRef<HTMLButtonElement | null>(null);

  const [noDodges, setNoDodges] = useState(0);
  const [accepted, setAccepted] = useState(false);

  // UCIEKAJĄCE "NIE"
  const [noActivated, setNoActivated] = useState(false);
  const [noPos, setNoPos] = useState<Pos>({ x: 0, y: 0 });

  // Etapy misia (po każdym "NIE" rośnie etap)
  const bearStages = useMemo(
    () => [
      { src: "/bear/1.png", caption: "Okej… jeszcze raz 😇" },
      { src: "/bear/2.png", caption: "Ups… źle Ci się kliknęło? 😳" },
      {
        src: "/bear/3.png",
        caption: "Hmm… znowu to samo. Chyba coś się zepsuło… Zaraz to naprawię 🔧",
      },
      { src: "/bear/4.png", caption: "Może przytulas Cię przekona? 🤗" },
      { src: "/bear/5.png", caption: "To dorzucam przytulasa i pizzę 🍕" },
      { src: "/bear/6.png", caption: "Dobra… przytulas, pizza i masaż 😌" },
      { src: "/bear/7.png", caption: "Ostatnia szansa… 😳" },
    ],
    []
  );

  const stageIndex = Math.min(noDodges, bearStages.length - 1);
  const currentBear = bearStages[stageIndex];
  

  const subtitle = useMemo(() => {
    if (noDodges === 0) return 'Wybierz mądrze… przycisk “Nie” jest trochę… nieśmiały.';
    return currentBear.caption;
  }, [noDodges, currentBear.caption]);

  function moveNoButtonInsideCard() {
    const area = areaRef.current;
    if (!area) return;

    const rect = area.getBoundingClientRect();

    const padding = 16;

    // Dynamiczny "bezpieczny top" — lepiej działa na telefonie niż stałe 280
    // (omija nagłówek + misia, a jednocześnie daje miejsce na uciekanie)
    const topSafe = Math.floor(rect.height * 0.52);

    // orientacyjny rozmiar przycisku
    const btnW = 120;
    const btnH = 48;

    const x = randomBetween(padding, Math.max(padding, rect.width - btnW - padding));
    const y = randomBetween(topSafe, Math.max(topSafe, rect.height - btnH - padding));

    setNoPos({ x, y });
  }

  // Obsługa "NIE" tak, żeby:
  // - na desktopie działał hover
  // - na mobile działał tap (pointer)
  // - pierwsza ucieczka była płynna (startuje z miejsca placeholdera)
  function handleNoDodge() {
    const area = areaRef.current;

    // Pierwsza aktywacja: ustaw startową pozycję tam gdzie placeholder
    if (!noActivated) {
      setNoActivated(true);

      if (area && noPlaceholderRef.current) {
        const areaRect = area.getBoundingClientRect();
        const btnRect = noPlaceholderRef.current.getBoundingClientRect();

        const startX = btnRect.left - areaRect.left;
        const startY = btnRect.top - areaRect.top;

        setNoPos({ x: startX, y: startY });

        // w następnej klatce -> losowa pozycja (transition robi animację)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setNoDodges((v) => v + 1);
            moveNoButtonInsideCard();
          });
        });

        return;
      }
    }

    setNoDodges((v) => v + 1);
    moveNoButtonInsideCard();
  }

  function handleYes() {
    // Opcjonalnie, żeby nie kliknęła od razu:
    // if (noDodges === 0) {
    //   alert("Tak łatwo? 😏 Spróbuj kliknąć 'NIE'…");
    //   return;
    // }

    setAccepted(true);
  }

  // EKRAN PO "TAK"
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
            src="/bear/8.png"
            alt="Dwa misie w serduszku"
            style={{
              width: "min(460px, 92vw)",
              borderRadius: 16,
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
              display: "block",
              margin: "0 auto",
            }}
          />

          <div style={{ marginTop: 18, fontSize: 16 }}>
            <strong>Kupon:</strong> 1× randka + 1× przytulas + 1× niespodzianka ✨
          </div>
        </div>
      </main>
    );
  }

  // EKRAN PYTANIA
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 0,
        background: "linear-gradient(180deg, #fff, #ffe6ef)",
      }}
    >
      <div
        ref={areaRef}
        style={{
          width: "min(900px, 96vw)",
          height: "min(620px, 88vh)", // trochę wyżej dla mobile
          position: "relative",
          borderRadius: 24,
          background: "rgba(255,255,255,.75)",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          padding: 20,
          overflow: "hidden",
        }}
      >
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 8 }}>
            Mini-misja walentynkowa
          </div>

          <h1   style={{
                fontSize: "clamp(30px, 5vw, 36px)",
                margin: "0 0 8px",
              }}>
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
              paddingInline: 12,
            }}
          >
            {subtitle}
          </p>

          <div style={{ marginTop: 16 }}>
            <img
              src={currentBear.src}
              alt="Miś"
              style={{
                width: 220,
                height: 220,
                objectFit: "contain",
                filter: "drop-shadow(0 10px 18px rgba(0,0,0,.12))",
                display: "block",
                margin: "0 auto",
                maxWidth: "70vw",
              }}
            />
          </div>
        </div>

        {/* TAK + Placeholder NIE (przed aktywacją) */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 18,
            flexWrap: "wrap",
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
              touchAction: "manipulation",
            }}
          >
            TAK ❤️
          </button>

          {!noActivated && (
            <button
              ref={noPlaceholderRef}
              onPointerDown={handleNoDodge} // ✅ działa na telefonie
              onMouseEnter={handleNoDodge} // ✅ działa na PC
              onFocus={handleNoDodge}
              style={{
                padding: "12px 22px",
                borderRadius: 14,
                border: "1px solid rgba(0,0,0,.12)",
                background: "white",
                cursor: "pointer",
                fontSize: 16,
                userSelect: "none",
                touchAction: "manipulation",
              }}
            >
              NIE 🙈
            </button>
          )}
        </div>

        {/* Uciekające NIE (po aktywacji) */}
        {noActivated && (
          <button
            onPointerDown={handleNoDodge} // ✅ telefon
            onMouseEnter={handleNoDodge} // ✅ PC
            onFocus={handleNoDodge}
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
              transition: "left 450ms ease, top 450ms ease",
              userSelect: "none",
              zIndex: 10,
              touchAction: "manipulation",
            }}
          >
            NIE 🙈
          </button>
        )}

        <div style={{ position: "absolute", bottom: 12, left: 16, fontSize: 13, opacity: 0.65 }}>
          Próby ucieczki “NIE”: {noDodges}
        </div>
      </div>
    </main>
  );
}
