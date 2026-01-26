'use client';

import { useEffect, useState } from "react";
import { fixPolishTypography } from '@/utils/fixSpacings';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fixPolishTypography(); // ← tutaj działa poprawnie
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`menu ${scrolled ? 'scrolled' : ''}`}>
      <div className="menu-container">
        <Link href="/" className="logo" aria-label="Strona główna – Grzegorz Słowiaczek">
          <Image src="/images/logo-grzegorz-slowiaczek.webp" alt="Grzegorz Słowiaczek – logo twórcy stron i aplikacji" width="768" height="427"/>
          <span className="logo-text">
            Grzegorz<br />
            Słowiaczek
          </span>
        </Link>

        {/* 🔁 MENU LINKS na duże ekrany */}
        <ul className="menu-links">
          <li><Link href="/">Strona główna</Link></li>
          <li><Link href="/stronywww">Strony WWW</Link></li>
          <li><Link href="/aplikacje">Aplikacje</Link></li>
          <li><Link href="/projekty">Projekty</Link></li>
          <li><Link href="/cennik">Cennik</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>

        {/* 🔁 BURGER button tylko na mobile */}
        <button className="burger" aria-label="Otwórz menu" onClick={() => setMenuOpen(prev => !prev)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* 🔁 PANEL BOCZNY */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          &times;
        </button>
        <ul>
          <li><Link href="/">Strona główna</Link></li>
          <li><Link href="/stronywww">Strony WWW</Link></li>
          <li><Link href="/aplikacje">Aplikacje</Link></li>
          <li><Link href="/projekty">Projekty</Link></li>
          <li><Link href="/cennik">Cennik</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>
      </div>

      {/* 🔁 Przyciemnione tło */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}



