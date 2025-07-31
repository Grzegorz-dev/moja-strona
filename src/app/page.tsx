
import styles from './home.module.css';
import {
  FaRocket, 
  FaMobileAlt, 
  FaUserShield,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaShoppingCart,
  FaSearch,
  FaPaintBrush,
  FaTools,
  FaChartBar,
  FaUsers,
  FaSyncAlt,
  FaLock,
  FaMinus,
  FaHeadset
} from "react-icons/fa";
import Faq from './faq/Faq'
import Link from "next/link";
import Image from 'next/image';
import CtaForm from "./CtaForm"; 
import ScrollButton from '@/components/ScrollButton';


export const metadata = {
  title: "Strony internetowe i aplikacje dla firm | Grzegorz Słowiaczek",
  description:
    "Tworzę nowoczesne strony internetowe i aplikacje dla firm – mobilne, webowe, szybkie i dostosowane do Twoich celów biznesowych.",
  robots: "index,follow",
  openGraph: {
    title: "Strony internetowe i aplikacje dla firm | Grzegorz Słowiaczek",
    description:
      "Tworzę nowoczesne strony i aplikacje internetowe – szybkie, mobilne, dopasowane do Twoich celów biznesowych.",
    url: "https://slowiaczek.pl/",
    siteName: "Grzegorz Słowiaczek – strony i aplikacje dla firm",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Grzegorz Słowiaczek – strony internetowe i aplikacje dla firm",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strony i aplikacje dla firm | Grzegorz Słowiaczek",
    description:
      "Nowoczesne rozwiązania webowe i mobilne dla Twojego biznesu. Od prostych stron po rozbudowane systemy.",
    creator: "@twojTwitter",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroText}>
            <h1>Aplikacje mobilne i strony internetowe</h1>
            <p>
              Tworzę szybkie, skalowalne strony i aplikacje dla firm – od prostych wizytówek i sklepów internetowych po rozbudowane systemy webowe i mobilne.
            </p>
            <ScrollButton />
          </div>
          <div className={styles.heroImageWrapper}>
            <Image src="/images/baner-strona-glowna-aplikacja-responsive.webp" alt="Nowoczesna aplikacja mobilna i strona internetowa dla firm – interfejs użytkownika na laptopie i smartfonie" width="1079" height="1256" priority fetchPriority="high"/>
            
            <div className={styles.overlayBoxOne}>
              <Image className={styles.overlayImageOne} src="/images/grafika-karta-elementu-interfejsu.webp" alt="Przykład karty interfejsu aplikacji dla firm – grafika z ikoną i opisem funkcji" width="408" height="239" loading="lazy" />
            </div>

            <div className={styles.overlayBoxTwo}>
              <Image className={styles.overlayImageTwo} src="/images/grafika-statystyki-uzytkownika-aplikacji.webp" alt="Panel statystyk użytkownika w aplikacji dla firm – analiza danych i realizacja celów" width="404" height="245" loading="lazy" />
            </div>

            <div className={styles.overlayBoxThree}>
              <Image className={styles.overlayImageThree} src="/images/grafika-integracja-zewnetrzna-api-chmura.webp" alt="Integracja aplikacji dla firm z zewnętrznymi systemami i chmurą – synchronizacja danych" width="404" height="398" loading="lazy" />
            </div>

            <div className={styles.overlayBoxFour}>
              <Image className={styles.overlayImageFour} src="/images/grafika-ocena-uzytkownikow-aplikacja.webp" alt="System ocen w aplikacji firmowej – pięć gwiazdek i wysoka ocena użytkowników" width="404" height="135" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.benefitsSection} fadeInUp`} id="benefitsSection">
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitsIntro}>
            <div className={styles.benefitsIntroLeft}>
              <Link href="/" className={styles.logoWrapper} aria-label="Strona główna – Grzegorz Słowiaczek">
                <Image src="/images/logo-grzegorz-slowiaczek-ciemne.webp" alt="Logo Grzegorz Słowiaczek – projektowanie stron i aplikacji" width="768" height="427" loading="lazy" />
                <span className={styles.logoText}>Grzegorz<br/>Słowiaczek</span>
              </Link>
            </div>
            <div className={styles.benefitsIntroRight}>
              <p>
                Tworzę strony internetowe i aplikacje dla firm, które nie tylko dobrze wyglądają — ale są szybkie, intuicyjne i dopasowane do Twoich celów biznesowych.
              </p>
            </div>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <FaRocket className={styles.benefitIcon} />
              <p>Szybkie ładowanie</p>
            </div>
            <div className={styles.benefitCard}>
              <FaMobileAlt className={styles.benefitIcon} />
              <p>Dostosowanie do smartfonów</p>
            </div>
            <div className={styles.benefitCard}>
              <FaUserShield className={styles.benefitIcon} />
              <p>Bezpieczeństwo danych</p>
            </div>
            <div className={styles.benefitCard}>
              <FaCogs className={styles.benefitIcon} />
              <p>Łatwa rozbudowa</p>
            </div>
            <div className={styles.benefitCard}>
              <FaChartLine className={styles.benefitIcon} />
              <p>Skuteczność i wyniki</p>
            </div>
            <div className={styles.benefitCard}>
              <FaHeadset className={styles.benefitIcon} />
              <p>Stała opieka i wsparcie</p>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.servicesSection}>
        <div className={`${styles.servicesGrid} fadeInUp`}>
          <Link href="/stronywww" className={styles.serviceCard}>
            <FaLaptopCode className={styles.serviceIcon} />
            <h3>Strony internetowe</h3>
            <p>Nowoczesne, responsywne strony idealnie dopasowane do Twojej branży.</p>
          </Link>

          <Link href="/stronywww" className={styles.serviceCard}>
            <FaShoppingCart className={styles.serviceIcon} />
            <h3>Sklepy internetowe</h3>
            <p>Funkcjonalne sklepy z prostym panelem zarządzania i szybkim działaniem.</p>
          </Link>

          <Link href="/aplikacje" className={styles.serviceCard}>
            <FaMobileAlt className={styles.serviceIcon} />
            <h3>Aplikacje mobilne</h3>
            <p>Tworzę nowoczesne aplikacje mobilne na Android i iOS.</p>
          </Link>

          <Link href="/" className={styles.serviceCard}>
            <FaPaintBrush className={styles.serviceIcon} />
            <h3>Grafika</h3>
            <p>Logo, identyfikacja wizualna, banery i materiały reklamowe.</p>
          </Link>

          <Link href="/stronywww" className={styles.serviceCard}>
            <FaSearch className={styles.serviceIcon} />
            <h3>Pozycjonowanie</h3>
            <p>Skuteczne SEO — Twoja strona widoczna w Google.</p>
          </Link>

          <Link href="/klienci" className={styles.serviceCard}>
            <FaTools className={styles.serviceIcon} />
            <h3>Wsparcie techniczne</h3>
            <p>Stała opieka nad stroną, kopie zapasowe i aktualizacje.</p>
          </Link>
        </div>
      </section>


      <section className={`${styles.featuresSection} fadeInUp`}>
        <h2>Funkcje, które robią różnicę</h2>
        <p className={styles.leadText}>
          Twoja aplikacja lub strona to coś więcej niż ładny wygląd. Dbam o techniczne detale, które realnie wpływają na wygodę, bezpieczeństwo i rozwój Twojego biznesu.
        </p>

        <div className={styles.featuresGrid}>
          <div className={styles.featuresLeft}>
            <div className={`${styles.featureItem} ${styles.reversed}`}>
              <FaMobileAlt className={styles.featureIcon} />
              <p><b>Responsywny interfejs</b><br />Dostosowany do każdego urządzenia</p>
            </div>
            <div className={`${styles.featureItem} ${styles.reversed}`}>
              <FaRocket className={styles.featureIcon} />
              <p><b>Błyskawiczne ładowanie</b><br />Zoptymalizowane pod wydajność</p>
            </div>
            <div className={`${styles.featureItem} ${styles.reversed}`}>
              <FaLock className={styles.featureIcon} />
              <p><b>Bezpieczne logowanie</b><br />Aktualne standardy zabezpieczeń</p>
            </div>
          </div>

          <div className={styles.featuresImage}>
            <Image
              src="/images/grafika-aplikacja-mobilna-zarzadzanie-zadaniami.webp"
              alt="Widok aplikacji mobilnej dla firm – zarządzanie zadaniami, kalendarz i funkcje użytkownika na ekranie smartfona"
              width="525"
              height="879"
              loading="lazy"
            />
          </div>

          <div className={styles.featuresRight}>
            <div className={styles.featureItem}>
              <FaSyncAlt className={styles.featureIcon} />
              <p><b>Integracje z systemami</b><br />Automatyczne połączenia z API</p>
            </div>
            <div className={styles.featureItem}>
              <FaUsers className={styles.featureIcon} />
              <p><b>Zarządzanie użytkownikami</b><br />Role, konta, uprawnienia</p>
            </div>
            <div className={styles.featureItem}>
              <FaChartBar className={styles.featureIcon} />
              <p><b>Statystyki i analizy</b><br />Wgląd w dane i skuteczność</p>
            </div>
          </div>
        </div>
      </section>

          
      <section className={styles.coverageSection}>
        <div className={`${styles.coverageGrid} fadeInUp`}>
          <div className={styles.coverageText}>
            <div className={styles.coverageHeading}>
              <div className={styles.iconLine}>
                <FaMinus className={styles.iconMinus} />
              </div>
              <h2>Strony internetowe i aplikacje dla firm na terenie całej Polski</h2>
            </div>
            <p>
              Realizuję projekty z zakresu <strong>tworzenia stron internetowych</strong> i <strong>aplikacji mobilnych</strong> dla firm z całej Polski – bez względu na lokalizację. Dzięki sprawdzonemu procesowi pracy zdalnej i dobrej komunikacji zapewniam <strong>pełną obsługę online</strong> – od wyceny po wdrożenie.
            </p>
          </div>
          <div className={styles.coverageImage}>
            <Image
              src="/images/grafika-polska-zasieg-uslug-strony-aplikacje.webp"
              alt="Obsługa firm w całej Polsce – mapa kraju z zaznaczonymi lokalizacjami klientów"
              width="874"
              height="900"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className={`${styles.ctaSection} fadeInUp`}>
        <h2>Masz pytania? Porozmawiajmy!</h2>
        <p>Wpisz swój numer telefonu – oddzwonię i odpowiem na wszystkie pytania.</p>

        <CtaForm />

        <div className={styles.ctaAltAction}>
          <span>lub</span>
          <Link href="/kontakt" className={styles.ctaLinkButton}>
            Przejdź do kontaktu
          </Link>
        </div>
      </section>

      <Faq />
    
    </main>
  );
}
