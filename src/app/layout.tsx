// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./blog/blog.module.css";
import Menu from "./Menu";
import AnimationWrapper from "./AnimationWrapper";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager */}
        <Script id="gtm-datalayer" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
        <Script
          id="gtm"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-P8RFGTW9"
          strategy="afterInteractive"
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8RFGTW9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* /Google Tag Manager */}

        <AnimationWrapper>
          <Menu />
          {children}

          <footer className="footer">
            <div className="footer-container">
              <div className="footer-left">
                <Link href="/" className="logo" aria-label="Strona główna – Grzegorz Słowiaczek">
                  <Image
                    src="/images/logo-grzegorz-slowiaczek.webp"
                    alt="Grzegorz Słowiaczek – logo twórcy stron i aplikacji"
                    width={768}
                    height={427}
                    loading="lazy"
                  />
                </Link>
                <p>© {new Date().getFullYear()} Grzegorz Słowiaczek. Wszelkie prawa zastrzeżone.</p>
              </div>

              <div className="footer-center">
                <ul>
                  <li><Link href="/">Strona główna</Link></li>
                  <li><Link href="/stronywww">Strony WWW</Link></li>
                  <li><Link href="/aplikacje">Aplikacje</Link></li>
                  <li><Link href="/projekty">Projekty</Link></li>
                  <li><Link href="/klienci">Dla klientów</Link></li>
                  <li><Link href="/cennik">Cennik</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/kontakt">Kontakt</Link></li>
                </ul>
              </div>

              <div className="footer-center">
                <ul>
                  <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
                  <li><Link href="/regulamin">Regulamin</Link></li>
                </ul>
              </div>

              <div className="footer-right">
                <p>kontakt@slowiaczek.pl</p>
                <p>+48 883 081 448</p>
                <div className="socials">
                  <a href="https://facebook.pl/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>

                {/* Link do zmiany preferencji cookies (wymagany przez TermsFeed) */}
                <p style={{ marginTop: 12 }}>
                  <a href="#" id="open_preferences_center">Zmień ustawienia cookies</a>
                </p>
              </div>
            </div>
          </footer>
        </AnimationWrapper>

        {/* TermsFeed Cookie Consent */}
        <noscript>
          Free cookie consent management tool by{" "}
          <a href="https://www.termsfeed.com/">TermsFeed</a>
        </noscript>

        <Script
          id="tf-cookie-lib"
          src="https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js"
          strategy="afterInteractive"
          onLoad={() => {
            // 100% pewności, że biblioteka już jest
            // @ts-expect-error: global z biblioteki
            if (window.cookieconsent && typeof window.cookieconsent.run === 'function') {
              // @ts-expect-error
              window.cookieconsent.run({
                notice_banner_type: "simple",
                consent_type: "express",
                palette: "light",
                language: "pl",
                page_load_consent_levels: ["strictly-necessary"],
                notice_banner_reject_button_hide: false,
                preferences_center_close_button_hide: false,
                page_refresh_confirmation_buttons: false,
                website_name: "Grzegorz Słowiaczek",
                website_privacy_policy_url: "https://atelier-nieruchomosci.pl/privacy_policy"
              });
            } else {
              console.warn('CookieConsent lib loaded but window.cookieconsent is missing');
            }
          }}
        />

        {/* /TermsFeed Cookie Consent */}
      </body>
    </html>
  );
}
