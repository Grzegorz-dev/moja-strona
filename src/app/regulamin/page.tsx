import "./regulamin.css";

export const metadata = {
  title: "Regulamin świadczenia usług | Grzegorz Słowiaczek",
  description:
    "Zapoznaj się z regulaminem świadczenia usług w zakresie tworzenia stron internetowych i aplikacji. Jasne zasady współpracy, odpowiedzialności i płatności.",
  robots: "index,follow",
  openGraph: {
    title: "Regulamin świadczenia usług | Grzegorz Słowiaczek",
    description:
      "Sprawdź warunki współpracy, realizacji projektów oraz zasady płatności. Regulamin świadczenia usług tworzenia stron WWW i aplikacji.",
    url: "https://slowiaczek.pl/regulamin",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Regulamin – Grzegorz Słowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulamin świadczenia usług | Grzegorz Słowiaczek",
    description:
      "Dowiedz się, na jakich zasadach świadczone są usługi tworzenia stron i aplikacji. Transparentne warunki współpracy.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};

export default function Regulamin() {
  return (
    <main>
      <section className="regulamin">
        <h1>Regulamin świadczenia usług drogą elektroniczną</h1>

        <p><strong>Data ostatniej aktualizacji:</strong> 04.06.2025</p>

        <h2>1. Informacje ogólne</h2>
        <p>Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem <strong>www.slowiaczek.pl</strong>, prowadzonego przez <strong>Grzegorz Słowiaczek</strong>, z siedzibą w Polsce.</p>

        <h2>2. Definicje</h2>
        <p><strong>Usługodawca</strong> – właściciel serwisu, Grzegorz Słowiaczek.</p>
        <p><strong>Użytkownik</strong> – każda osoba korzystająca z serwisu.</p>
        <p><strong>Serwis</strong> – strona internetowa działająca pod adresem www.slowiaczek.pl.</p>
        <p><strong>Usługi</strong> – usługi świadczone drogą elektroniczną, w tym pomoc techniczna, dostęp do treści, subskrypcje płatne.</p>

        <h2>3. Rodzaje i zakres usług</h2>
        <p>Usługodawca świadczy następujące usługi:</p>
        <ul>
          <li>dostęp do treści informacyjnych,</li>
          <li>świadczenie pomocy technicznej,</li>
          <li>subskrypcje miesięczne,</li>
          <li>kontakt za pomocą formularzy elektronicznych.</li>
        </ul>

        <h2>4. Warunki świadczenia usług</h2>
        <p>Użytkownik zobowiązany jest do korzystania z serwisu zgodnie z przepisami prawa i niniejszym regulaminem.</p>
        <p>Wymagania techniczne: dostęp do Internetu i przeglądarka internetowa.</p>

        <h2>5. Płatności</h2>
        <p>W przypadku usług płatnych, np. subskrypcji lub pomocy technicznej, Użytkownik zobowiązany jest do dokonania płatności za pomocą udostępnionego systemu płatności (np. Stripe).</p>
        <p>Ceny są widoczne na stronie przed dokonaniem zakupu. Użytkownik otrzyma potwierdzenie transakcji na podany adres e-mail.</p>

        <h2>6. Reklamacje</h2>
        <p>Reklamacje należy zgłaszać drogą mailową na adres <strong>kontakt@slowiaczek.pl</strong>. Reklamacja zostanie rozpatrzona w ciągu 14 dni roboczych.</p>

        <h2>7. Odstąpienie od umowy</h2>
        <p>Użytkownik, będący konsumentem, ma prawo do odstąpienia od umowy w ciągu 14 dni od dnia zakupu usługi, o ile nie została ona rozpoczęta.</p>
        <p>Jeśli usługa została w pełni wykonana za zgodą konsumenta – prawo do odstąpienia nie przysługuje.</p>

        <h2>8. Ochrona danych osobowych</h2>
        <p>Dane osobowe są przetwarzane zgodnie z Polityką Prywatności i zgodnie z przepisami RODO.</p>

        <h2>9. Własność intelektualna</h2>
        <p>Wszelkie treści, znaki graficzne, kod źródłowy i materiały znajdujące się na stronie są chronione prawem autorskim i stanowią własność Usługodawcy.</p>

        <h2>10. Postanowienia końcowe</h2>
        <p>Usługodawca zastrzega sobie prawo do zmiany regulaminu. Zmiany wchodzą w życie z dniem publikacji w serwisie.</p>
        <p>Korzystanie z serwisu po wprowadzeniu zmian oznacza ich akceptację.</p>
      </section>

    </main>
  );
}