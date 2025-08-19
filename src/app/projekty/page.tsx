import styles from './projekty.module.css';
import {
  FaArrowRight,
} from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";


export const metadata = {
  title: "Projekty stron internetowych i aplikacji – Grzegorz Słowiaczek",
  description:
    "Zobacz wybrane realizacje stron internetowych i aplikacji mobilnych. Nowoczesne projekty dopasowane do różnych branż i urządzeń – portfolio Grzegorza Słowiaczka.",
  robots: "index,follow",
  openGraph: {
    title: "Projekty stron i aplikacji – Grzegorz Słowiaczek",
    description:
      "Zobacz moje realizacje stron internetowych i aplikacji – nowoczesne, responsywne i dopasowane do potrzeb różnych branż.",
    url: "https://slowiaczek.pl/projekty",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Projekty – Grzegorz Słowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projekty stron internetowych i aplikacji – Grzegorz Słowiaczek",
    description:
      "Przegląd realizacji: strony internetowe i aplikacje dostosowane do branży, celów i urządzeń.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};

export default function Projekty() {
    return (
      <main className={styles.container}>

        <section className={styles.portfolioIntro}>
          <div className={styles.portfolioContent}>
            <h2>Projekty</h2>
            <p>Zobacz moje wybrane realizacje stron i aplikacji dla firm z różnych branż.</p>
            <Link href="#firstProject" className={styles.scrollArrow} aria-label="Przejdź do portfolio">
              ↓
            </Link>
          </div>
          <div className={styles.ramka}></div>
        </section>

        <section className={styles.gallery} id="firstProject">

          <div className={styles.galleryGrid}>
            <Image
              src="/images/portfolio/projekt-strony-gabinet-logopedyczny-responsive.webp"
              alt="Responsywny projekt strony internetowej gabinetu logopedycznego dla dzieci i młodzieży, wyświetlany na różnych urządzeniach: komputerze, laptopie, tablecie i smartfonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://logopedycznagloska.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="/images/portfolio/projekt-strony-pasieki-na-urzadzeniach.webp"
              alt="Responsywna strona internetowa dla pasieki – projekt sklepu online z miodem wyświetlony na laptopie, komputerze, tablecie i smartfonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="/images/portfolio/realizacja-strony-biura-nieruchomosci-responsive.webp"
              alt="Strona internetowa dla biura nieruchomości – responsywny projekt z wyszukiwarką ofert na komputerze, laptopie, tablecie i smartfonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://nieruchomosciszypula.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="/images/portfolio/projekt-strony-pracownia-architektoniczna-responsive.webp"
              alt="Strona internetowa pracowni architektonicznej – nowoczesny, minimalistyczny design z wizualizacją projektów budynków na komputerze, laptopie, tablecie i smartfonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://kmonoline.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-kosmetologia-responsive.webp"
              alt="Strona internetowa gabinetu kosmetycznego – elegancki design z wizerunkiem właścicielki, oferta zabiegów i formularz rezerwacji na laptopie, komputerze, tablecie i telefonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://tabubeauty.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-deweloper-luksusowe-nieruchomosci.webp"
              alt="Strona internetowa biura nieruchomości – wyszukiwarka ofert i lista mieszkań, widoczna na komputerze, laptopie, tablecie i smartfonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://penthouse-nieruchomosci.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-wynajem-dmuchancow-responsive.webp"
              alt="Strona internetowa firmy oferującej dmuchańce – kolorowy i responsywny projekt widoczny na komputerze, tablecie i telefonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://imperium-dmuchancow.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-nieruchomosci-atelier-responsive.webp"
              alt="Strona internetowa dla firmy z branży nieruchomości – elegancki, responsywny projekt z prezentacją wnętrz i atmosfery miejsca"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://atelier-nieruchomosci.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-kancelaria-radcy-prawnego-responsive.webp"
              alt="Strona internetowa kancelarii radcy prawnego – profesjonalny i responsywny projekt dopasowany do komputerów, tabletów i smartfonów"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://radcaprawny-szypula.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-firma-budowlana-uslugi-dachowe-responsive.webp"
              alt="Strona internetowa dla firmy budowlanej i dekarskiej – responsywny projekt z ofertą usług remontowych i formularzem zamówień"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://exdach.com/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

        </section>

      </main>
    );
  }