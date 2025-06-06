'use client';

import styles from './cennik.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Cennik() {
    <Head>
      <title>Cennik tworzenia stron i aplikacji – strony OnePage, MultiPage, sklepy, aplikacje | Grzegorz Słowiaczek</title>
      <meta name="description" content="Poznaj ceny tworzenia stron internetowych i aplikacji. Wybierz opcję dopasowaną do Twoich potrzeb: OnePage, MultiPage, szablony, projekty indywidualne i więcej."/>
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      <meta property="og:title" content="Cennik tworzenia stron i aplikacji – Grzegorz Słowiaczek" />
      <meta property="og:description" content="Sprawdź ceny tworzenia nowoczesnych stron internetowych i aplikacji – od prostych wizytówek po projekty indywidualne." />
      <meta property="og:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
      <meta property="og:url" content="https://slowiaczek.pl/cennik" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cennik stron internetowych i aplikacji – Grzegorz Słowiaczek" />
      <meta name="twitter:description" content="Zobacz pełną ofertę cenową – strony OnePage, MultiPage, szablonowe oraz indywidualne projekty." />
      <meta name="twitter:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
    </Head>
    return (
      <main className={styles.container}>
        <section className={styles.banner}>
          <div className={styles.content}>
            <h1>Cennik</h1>
            <p>Oferta dopasowana do Twoich możliwości i celów.</p>
          </div>
        </section>

        <section className={styles.pricingSection}>
          <div className={styles.pricingTitle}>
            <h2>Strony internetowe</h2>
          </div>
          <h3 className={styles.subtitle}>Nie każdy biznes potrzebuje rozbudowanego serwisu za kilka tysięcy złotych – i to jest OK.
            Dlatego oferuję różne warianty: od prostych stron typu One Page, przez rozbudowane serwisy, po ekonomiczne strony oparte na sprawdzonych szablonach.
            Dobierz opcję, która odpowiada Twojemu budżetowi i celom.
          </h3>
          <div className={styles.pricingGrid}>
            {[
              {
                title: "OnePage",
                desc: "Strona Wizytówka",
                price: "od 990 zł",
                features: [
                  "Podstrony: 1",
                  "Indywidualny projekt graficzny",
                  "Wersja mobilna",
                  "Optymalizacja SEO",
                  "Panel zarządzania stroną",
                  "Google Analytics",
                  "Google Search Console",
                  "Zabezpieczenie reCaptcha",
                  "Hosting na 1 rok",
                  "Rejestracja domeny",
                  "Konfiguracja SSL",
                  "Polityka prywatności",
                  "Formularz kontaktowy",
                  "Firmowa skrzynka e-mail",
                  "Pomoc techniczna na 6 miesięcy",
                ],
              },
              {
                title: "MultiPage",
                desc: "Rozbudowana strona dla firmy",
                price: "od 1890 zł",
                features: [
                  "Od 5 podstron",
                  "Indywidualny projekt graficzny",
                  "Wersja mobilna",
                  "Optymalizacja SEO",
                  "Panel zarządzania stroną",
                  "Google Analytics",
                  "Google Search Console",
                  "Zabezpieczenie reCaptcha",
                  "Hosting na 1 rok",
                  "Rejestracja domeny",
                  "Konfiguracja SSL",
                  "Polityka prywatności",
                  "Formularz kontaktowy",
                  "Firmowa skrzynka e-mail",
                  "Pomoc techniczna na 12 miesięcy",
                  "Blog/Aktualności",
                ],
              },
              {
                title: "Szablon",
                desc: "Rozbudowana strona w dobrej cenie",
                price: "od 1090 zł",
                features: [
                  "Od 5 podstron",
                  "Wybrany szablon WordPress",
                  "Wersja mobilna",
                  "Optymalizacja SEO",
                  "Panel zarządzania stroną",
                  "Google Analytics",
                  "Google Search Console",
                  "Zabezpieczenie reCaptcha",
                  "Hosting na 1 rok",
                  "Rejestracja domeny",
                  "Konfiguracja SSL",
                  "Polityka prywatności",
                  "Formularz kontaktowy",
                  "Firmowa skrzynka e-mail",
                  "Pomoc techniczna na 6 miesięcy",
                  "Blog/Aktualności",
                ],
              },
              {
                title: "Custom",
                desc: "Indywidualna wycena",
                price: "od 3000 zł",
                features: [
                  "Indywidualny projekt graficzny",
                  "Dedykowane unikalne funkcje",
                  "Możliwość integracji z zewnętrznymi systemami (API)",
                  "Wersja mobilna",
                  "Optymalizacja SEO",
                  "Elastyczny panel zarządzania treścią",
                  "Google Analytics",
                  "Google Search Console",
                  "Zabezpieczenie reCaptcha",
                  "Hosting na 1 rok",
                  "Rejestracja domeny",
                  "Konfiguracja SSL",
                  "Polityka prywatności",
                  "Formularz kontaktowy",
                  "Firmowa skrzynka e-mail",
                  "Pomoc techniczna na 12 miesięcy",
                  "Blog/Aktualności",
                ],
              },
            ].map((plan, i) => (
              <div className={styles.pricingCard} key={i}>
                <div className={styles.headerCard}>
                  <h3 className={styles.pricingGridTitle}>{plan.title}</h3>
                  <p className={styles.desc}>{plan.desc}</p>
                </div>
                <div className={styles.price}>
                  {plan.price.startsWith("od") ? (
                    <>
                      <span className={styles.from}>od</span>{" "}
                      {plan.price.replace("od", "").trim()}
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
                <ul className={styles.features}>
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className={styles.check}>✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.contactCta}>
            <p>Podane ceny i pakiety mają charakter orientacyjny. Każdy projekt wyceniam indywidualnie na podstawie zakresu, potrzeb i budżetu klienta.
              Jeśli masz inny pomysł, mniejszy budżet lub chcesz stworzyć coś unikalnego - napisz, a wspólnie dobierzemy najlepsze rozwiązanie.</p>
            <Link href="/kontakt" className={styles.contactBtn}>Skontaktuj się</Link>
          </div>


          <div className={styles.pricingTitle}>
            <h2>Sklepy internetowe</h2>
          </div>
          <h3 className={styles.subtitle}>Sklep internetowy to w praktyce strona internetowe + sklep (funkcje sprzedażowe). 
              Zawiera m.in. stronę główną, zakładki o firmie, kontakt, a także panel zarządzania produktami, koszyk, płatności i wiele więcej.
          </h3>
          <div className={styles.pricingGrid}>
            {[
              {
                title: "Sklep Start",
                desc: "Sklep internetowy + strona wizytówkowa",
                price: "od 1990 zł",
                features: [
                  "Podstrony: 1",
                  "Integracja z bramkami płatności online",
                  "Konfiguracja sklepu",
                  "Indywidualny projekt graficzny",
                  "Wersja mobilna",
                  "Optymalizacja SEO",
                  "Panel zarządzania stroną",
                  "Google Analytics",
                  "Google Search Console",
                  "Zabezpieczenie reCaptcha",
                  "Hosting na 1 rok",
                  "Rejestracja domeny",
                  "Konfiguracja SSL",
                  "Polityka prywatności",
                  "Formularz kontaktowy",
                  "Firmowa skrzynka e-mail",
                  "Pomoc techniczna na 6 miesięcy",
                ],
              },
              {
                title: "Sklep Standard",
                desc: "Sklep internetowy + strona Multipage",
                price: "od 2490 zł",
                features: [
                  "Od 5 podstron",
                  "Integracja z bramkami płatności online",
                  "Konfiguracja sklepu",
                  "Indywidualny projekt graficzny",
                  "Wersja mobilna",
                  "Optymalizacja SEO",
                  "Panel zarządzania stroną",
                  "Google Analytics",
                  "Google Search Console",
                  "Zabezpieczenie reCaptcha",
                  "Hosting na 1 rok",
                  "Rejestracja domeny",
                  "Konfiguracja SSL",
                  "Polityka prywatności",
                  "Formularz kontaktowy",
                  "Firmowa skrzynka e-mail",
                  "Pomoc techniczna na 12 miesięcy",
                  "Blog/Aktualności",
                ],
              },
              {
                title: "Sklep Szablon",
                desc: "Sklep internetowy + strona Szablon",
                price: "od 2090 zł",
                features: [
                  "Od 5 podstron",
                  "Integracja z bramkami płatności online",
                  "Konfiguracja sklepu",
                  "Wybrany szablon Wordpress",
                  "Wersja mobilna",
                  "Optymalizacja SEO",
                  "Panel zarządzania stroną",
                  "Google Analytics",
                  "Google Search Console",
                  "Zabezpieczenie reCaptcha",
                  "Hosting na 1 rok",
                  "Rejestracja domeny",
                  "Konfiguracja SSL",
                  "Polityka prywatności",
                  "Formularz kontaktowy",
                  "Firmowa skrzynka e-mail",
                  "Pomoc techniczna na 6 miesięcy",
                  "Blog/Aktualności",
                ],
              },
              {
                title: "Sklep Custom",
                desc: "Indywidualny projekt sklepu",
                price: "od 3900 zł",
                features: [
                  "Indywidualny projekt graficzny",
                  "Integracja z bramkami płatności online",
                  "Konfiguracja sklepu",
                  "Dedykowane unikalne funkcje",
                  "Możliwość integracji z zewnętrznymi systemami (API)",
                  "Wersja mobilna",
                  "Optymalizacja SEO",
                  "Elastyczny panel zarządzania treścią",
                  "Google Analytics",
                  "Google Search Console",
                  "Zabezpieczenie reCaptcha",
                  "Hosting na 1 rok",
                  "Rejestracja domeny",
                  "Konfiguracja SSL",
                  "Polityka prywatności",
                  "Formularz kontaktowy",
                  "Firmowa skrzynka e-mail",
                  "Pomoc techniczna na 12 miesięcy",
                  "Blog/Aktualności",
                ],
              },
            ].map((plan, i) => (
              <div className={styles.pricingCard} key={i}>
                <div className={styles.headerCard}>
                  <h3 className={styles.pricingTitle}>{plan.title}</h3>
                  <p className={styles.desc}>{plan.desc}</p>
                </div>
                <div className={styles.price}>
                  {plan.price.startsWith("od") ? (
                    <>
                      <span className={styles.from}>od</span>{" "}
                      {plan.price.replace("od", "").trim()}
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
                <ul className={styles.features}>
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className={styles.check}>✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.contactCta}>
            <p>Podane ceny i pakiety mają charakter orientacyjny. Każdy projekt wyceniam indywidualnie na podstawie zakresu, potrzeb i budżetu klienta.
              Jeśli masz inny pomysł, mniejszy budżet lub chcesz stworzyć coś unikalnego - napisz, a wspólnie dobierzemy najlepsze rozwiązanie.</p>
            <Link href="/kontakt" className={styles.contactBtn}>Skontaktuj się</Link>
          </div>

           <div className={styles.pricingTitle}>
            <h2>Aplikacje</h2>
          </div>
          <h3 className={styles.subtitle}>Tworzenie aplikacji wcale nie musi kosztować 100 tysięcy złotych ani trwać pół roku. Dostosowuję rozwiązania do Twoich 
            potrzeb i budżetu – wspólnie znajdziemy wersję, która spełni swoje zadanie i nie przekroczy założonych kosztów.
            Możesz zacząć od lekkiego MVP lub tańszej alternatywy dla aplikacji mobilnej czyli aplikacji webowej.
          </h3>
          <div className={styles.pricingGrid}>
            {[
              {
                 title: "Aplikacja Webowa",
                desc: "Panel dostępny z poziomu przeglądarki",
                price: "od 4990 zł",
                features: [
                  "Panel administracyjny (CMS)",
                  "Indywidualny projekt graficzny",
                  "Responsywny, dopracowany design",
                  "Autoryzacja i logowanie użytkowników",
                  "Integracja z API (np. płatności, mapy, mailing)",
                  "Hosting i wdrożenie",
                  "Wsparcie techniczne po wdrożeniu",
                ],
              },
              {
                title: "Aplikacja Mobilna",
                desc: "Aplikacja na Android i iOS gotowa do publikacji w sklepach",
                price: "od 9900 zł",
                features: [
                  "Wersja Android i iOS (1 kod, np. React Native)",
                  "Responsywny i natywny wygląd",
                  "Powiadomienia push",
                  "Logowanie i zarządzanie kontem",
                  "Integracja z API (np. czat, GPS, płatności)",
                  "Przygotowanie do publikacji w Google Play / App Store",
                  "Wsparcie techniczne po wdrożeniu",
                ],
              },
              {
                title: "MVP",
                desc: "Skrojone na miarę minimum, by jak najszybciej wejść na rynek",
                price: "od 3000 zł",
                features: [
                  "Kluczowe funkcjonalności aplikacji",
                  "Prosty design skupiony na działaniu",
                  "Podstawowe logowanie i panel użytkownika",
                  "Możliwość rozbudowy w przyszłości",
                  "Wersja webowa lub mobilna",
                  "Krótki czas realizacji i niższy budżet",
                ],
              },
          
            ].map((plan, i) => (
              <div className={styles.pricingCard} key={i}>
                <div className={styles.headerCard}>
                  <h3 className={styles.pricingTitle}>{plan.title}</h3>
                  <p className={styles.desc}>{plan.desc}</p>
                </div>
                <div className={styles.price}>
                  {plan.price.startsWith("od") ? (
                    <>
                      <span className={styles.from}>od</span>{" "}
                      {plan.price.replace("od", "").trim()}
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
                <ul className={styles.features}>
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className={styles.check}>✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.contactCta}>
            <p>Podane ceny i pakiety mają charakter orientacyjny. Każdy projekt wyceniam indywidualnie na podstawie zakresu, potrzeb i budżetu klienta.
              Jeśli masz inny pomysł, mniejszy budżet lub chcesz stworzyć coś unikalnego - napisz, a wspólnie dobierzemy najlepsze rozwiązanie.</p>
            <Link href="/kontakt" className={styles.contactBtn}>Skontaktuj się</Link>
          </div>
        </section>
      </main>
    );
  }