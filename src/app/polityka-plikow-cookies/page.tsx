import "./politykaprywatnosci.css";

export const metadata = {
  title: "Polityka prywatności | Grzegorz Słowiaczek",
  description:
    "Zapoznaj się z polityką prywatności dotyczącą przetwarzania danych na stronie internetowej Grzegorza Słowiaczka. Dowiedz się, jakie dane są zbierane i w jakim celu.",
  robots: "index,follow",
  openGraph: {
    title: "Polityka prywatności | Grzegorz Słowiaczek",
    description:
      "Zasady przetwarzania danych osobowych, plików cookies i ochrony prywatności użytkowników na stronie Grzegorza Słowiaczka.",
    url: "https://slowiaczek.pl/polityka-prywatnosci",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Polityka prywatności – Grzegorz Słowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polityka prywatności | Grzegorz Słowiaczek",
    description:
      "Sprawdź, jak dbamy o Twoją prywatność. Przejrzysta polityka ochrony danych osobowych i cookies.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};


export default function PolitykaPrywatnosci() {
  return (
    <main>
      <section className="polityka">
        <h1>Polityka plików cookies</h1>

        <p>Niniejsza Polityka plików cookies określa zasady wykorzystywania plików cookies w ramach strony internetowej <strong>slowiaczek.pl</strong> (dalej „Serwis”).</p>

        <h1>1. Czym są pliki cookies?</h1>
        <p>Pliki cookies (tzw. „ciasteczka”) to niewielkie pliki tekstowe, które są zapisywane w urządzeniu końcowym Użytkownika podczas korzystania z Serwisu. Cookies mogą być odczytywane przez system teleinformatyczny Serwisu lub podmiotów trzecich.</p>

        <h1>2. Rodzaje plików cookies</h1>
        <ul>
          <li><strong>Cookies niezbędne</strong> – umożliwiają korzystanie z podstawowych funkcji Serwisu, np. logowania czy nawigacji.</li>
          <li><strong>Cookies funkcjonalne</strong> – zapamiętują preferencje Użytkownika, np. język lub układ strony.</li>
          <li><strong>Cookies analityczne i wydajnościowe</strong> – pomagają zrozumieć, w jaki sposób Użytkownicy korzystają z Serwisu (np. Google Analytics).</li>
          <li><strong>Cookies marketingowe</strong> – służą do dostarczania spersonalizowanych treści reklamowych.</li>
        </ul>

        <h1>3. Cele stosowania cookies</h1>
        <ul>
          <li>dostosowanie zawartości Serwisu do preferencji Użytkownika,</li>
          <li>optymalizacja korzystania z Serwisu,</li>
          <li>analiza statystyk odwiedzin,</li>
          <li>zapewnienie bezpieczeństwa i niezawodności działania Serwisu,</li>
          <li>prowadzenie działań marketingowych (po uzyskaniu zgody).</li>
        </ul>

        <h1>4. Pliki cookies podmiotów trzecich</h1>
        <p>W Serwisie mogą być wykorzystywane cookies pochodzące od zewnętrznych dostawców, takich jak:</p>
        <ul>
          <li>Google (Google Analytics, Google Ads),</li>
          <li>Meta (Facebook Pixel),</li>
          <li>Inne narzędzia analityczne lub reklamowe zgodnie z aktualną konfiguracją Serwisu.</li>
        </ul>
        <p>Podmioty te mogą wykorzystywać dane zbierane za pomocą cookies do własnych celów zgodnie z ich politykami prywatności.</p>

        <h1>5. Podstawa prawna stosowania cookies</h1>
        <p>Stosowanie cookies, które nie są niezbędne do działania Serwisu, odbywa się na podstawie zgody Użytkownika, wyrażonej przy pierwszym wejściu na stronę lub poprzez narzędzie do zarządzania zgodami.</p>

        <h1>6. Zarządzanie plikami cookies</h1>
        <p>Użytkownik może w każdej chwili:</p>
        <ul>
          <li>zmienić ustawienia dotyczące cookies w przeglądarce internetowej,</li>
          <li>usunąć zapisane pliki cookies,</li>
          <li>wycofać zgodę za pomocą przycisku „Zmień ustawienia cookies” dostępnego w stopce Serwisu.</li>
        </ul>
        <p>Ograniczenie stosowania cookies może wpłynąć na działanie niektórych funkcji Serwisu.</p>

        <h1>7. Zmiany w Polityce cookies</h1>
        <p>Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce cookies. Aktualna wersja będzie zawsze dostępna na tej stronie.</p>

        <p><strong>Data ostatniej aktualizacji:</strong> 13 sierpnia 2025</p>
      </section>
    </main>
  );
}