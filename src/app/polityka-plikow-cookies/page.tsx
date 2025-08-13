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
        <h1>Polityka Prywatności i Plików Cookies</h1>

        <h2>1. Administrator danych osobowych</h2>
        <p>Administratorem danych osobowych jest:<br />
        <strong>Grzegorz Słowiaczek</strong><br />
        kontakt@slowiaczek.pl<br />
        ul. Przykładowa 1, 00-000 Miasto</p>

        <h2>2. Jakie dane zbieramy?</h2>
        <p>Zbieramy dane wyłącznie w zakresie niezbędnym do świadczenia usług i obsługi użytkowników:</p>
        <ul>
          <li>imię i nazwisko,</li>
          <li>adres e-mail,</li>
          <li>numer telefonu,</li>
          <li>treść wiadomości z formularza kontaktowego,</li>
          <li>dane potrzebne do realizacji płatności (np. w przypadku subskrypcji).</li>
        </ul>

        <h2>3. Cel i podstawa przetwarzania danych</h2>
        <p>Dane są przetwarzane w celu:</p>
        <ul>
          <li>udzielenia odpowiedzi na zapytania (art. 6 ust. 1 lit. f RODO – uzasadniony interes),</li>
          <li>realizacji usług i zamówień (art. 6 ust. 1 lit. b RODO – wykonanie umowy),</li>
          <li>obsługi płatności (np. Stripe, PayNow),</li>
          <li>marketingu bezpośredniego (za zgodą).</li>
        </ul>

        <h2>4. Czas przechowywania danych</h2>
        <p>Twoje dane będą przechowywane:</p>
        <ul>
          <li>przez okres kontaktu + 12 miesięcy,</li>
          <li>w przypadku zakupu – przez czas wymagany przez przepisy podatkowe (do 6 lat).</li>
        </ul>

        <h2>5. Udostępnianie danych</h2>
        <p>Nie udostępniamy Twoich danych osobom trzecim, chyba że:</p>
        <ul>
          <li>wymagają tego przepisy prawa,</li>
          <li>jest to niezbędne do realizacji płatności (np. operatorzy płatności).</li>
        </ul>

        <h2>6. Twoje prawa</h2>
        <p>Masz prawo do:</p>
        <ul>
          <li>dostępu do swoich danych,</li>
          <li>ich sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
          <li>sprzeciwu wobec przetwarzania,</li>
          <li>wniesienia skargi do Prezesa UODO.</li>
        </ul>

        <h2>Polityka Plików Cookies</h2>

        <h3>1. Co to są cookies?</h3>
        <p>Cookies to małe pliki tekstowe zapisywane w Twoim urządzeniu. Pomagają analizować ruch na stronie i dostosowywać treści.</p>

        <h3>2. Jakie cookies stosujemy?</h3>
        <ul>
          <li><strong>Techniczne</strong> – niezbędne do działania strony (np. sesje, preferencje).</li>
          <li><strong>Analityczne</strong> – np. Google Analytics, które pomagają nam zrozumieć, jak korzystasz z witryny.</li>
          <li><strong>Marketingowe</strong> – tylko za zgodą, np. do kampanii reklamowych.</li>
        </ul>

        <h3>3. Zarządzanie cookies</h3>
        <p>Możesz samodzielnie zarządzać plikami cookies:</p>
          <ul>
            <li>zmieniając ustawienia w przeglądarce,</li>
            <li>lub klikając „Odrzuć ciasteczka” przy pierwszym wejściu na stronę.</li>
          </ul>
        <p>Brak zmiany ustawień oznacza zgodę na ich użycie.</p>

        <h2>Kontakt</h2>
        <p>W sprawach związanych z ochroną prywatności możesz napisać na:<br/>
        <strong>kontakt@slowiaczek.pl</strong></p>
      </section>
    </main>
  );
}