
import styles from './kontakt.module.css';
import {
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import KontaktForm from "./KontaktForm";

export const metadata = {
  title: "Kontakt – Strony internetowe i aplikacje dla firm | Grzegorz Słowiaczek",
  description:
    "Skontaktuj się ze mną – zapytaj o stronę internetową, aplikację lub wsparcie techniczne. Odpowiadam szybko i konkretnie. Wypełnij formularz lub napisz bezpośrednio.",
  robots: "index,follow",
  openGraph: {
    title: "Skontaktuj się – Grzegorz Słowiaczek",
    description:
      "Masz pytanie o stronę WWW lub aplikację? Wypełnij formularz kontaktowy lub napisz bezpośrednio. Oferuję sprawną komunikację i szybkie odpowiedzi.",
    url: "https://slowiaczek.pl/kontakt",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Kontakt – Grzegorz Słowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – Grzegorz Słowiaczek | Strony i aplikacje dla firm",
    description:
      "Chcesz stronę internetową lub aplikację? Skontaktuj się ze mną – szybko odpowiadam.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};

export default function Kontakt() {
    return (
      <main className={styles.container}>
        <section className={styles.banner}>
          <div className={styles.content}>
            <h1>Zapraszam do kontaktu</h1>
            <p>Masz pytania, pomysł na projekt albo potrzebujesz wyceny? Wypełnij formularz lub napisz bezpośrednio — odpowiem najszybciej jak to możliwe.</p>
          </div>
        </section>

        <section className={`${styles.supportSection} ${styles.supportColumns}`}>
            <div className={styles.contactBlock}>
              <div>
                <h3>Dane <span>kontaktowe</span></h3>
                <p>Preferujesz bezpośredni kontakt? Zadzwoń lub napisz — jestem dostępny od poniedziałku do piątku w godzinach 9:00–17:00.</p>
                <ul>
                  <li>
                    <span className={styles.contactIcon}>
                      <FaPhoneAlt />
                    </span>
                    +48 883 081 448
                  </li>
                  <li>
                    <span className={styles.contactIcon}>
                      <FaEnvelope />
                    </span>
                    kontakt@slowiaczek.pl
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.contactBlock}>
              <h3>Formularz <span>kontaktowy</span></h3>
              <p>Zostaw swoje dane i krótki opis sprawy — odezwę się, by omówić szczegóły i zaproponować najlepsze rozwiązanie.</p>
              <KontaktForm />
            </div>
          </section>
      </main>
    );
  }