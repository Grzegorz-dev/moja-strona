import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './blog/blog.module.css';
import Menu from "./Menu";
import AnimationWrapper from "./AnimationWrapper";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from "next/script";

declare global {
  interface Window {
    cookieconsent?: { run: (config: Record<string, unknown>) => void };
  }
}

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
        <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-P8RFGTW9'+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P8RFGTW9');`,
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8RFGTW9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AnimationWrapper>
          <Menu />
          {children}

          <footer className="footer">
            <div className="footer-container">
              <div className="footer-left">
                <Link href="/" className="logo" aria-label="Strona główna – Grzegorz Słowiaczek">
                  <Image src="/images/logo-grzegorz-slowiaczek.webp" alt="Grzegorz Słowiaczek – logo twórcy stron i aplikacji" width="768" height="427" loading="lazy"/>
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
                  <a href="https://facebook.pl/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                </div>
              </div>
            </div>
          </footer>
        </AnimationWrapper>

        {/* --- TermsFeed Cookie Consent --- */}
        <Script
          id="tf-cookie-lib"
          src="https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== 'undefined' && window.cookieconsent) {
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
                website_privacy_policy_url: "https://atelier-nieruchomosci.pl/privacy_policy", // podmień na swój URL
              });
            }
          }}
        />

        {/* Noscript info od TermsFeed (widoczne tylko bez JS) */}
        <noscript>
          Free cookie consent management tool by{" "}
          <a href="https://www.termsfeed.com/">TermsFeed</a>
        </noscript>
        {/* --- /TermsFeed Cookie Consent --- */}
      </body>
    </html>
  );
}
