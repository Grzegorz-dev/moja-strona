"use client";

import ToggleSection from "@/components/ToggleSection";
import styles from './klienci.module.css';
import {
  FaHeadset,
  FaWrench,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function KlienciClient() {
  const [typ, setTyp] = useState<"subskrypcja" | "jednorazowa">("subskrypcja");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get("success");
    const canceled = urlParams.get("canceled");

    if (success) {
      import('sweetalert2').then((Swal) => {
        Swal.default.fire({
          icon: 'success',
          title: 'Sukces!',
          text: 'Twoja subskrypcja została aktywowana.',
        });
      });
    }

    if (canceled) {
      import("sweetalert2").then((Swal) => {
        Swal.default.fire({
          icon: 'info',
          title: 'Płatność anulowana',
          text: 'Możesz spróbować ponownie.',
          confirmButtonText: 'OK',
        }).then(() => {
          window.history.replaceState(null, "", window.location.pathname);
        });
      });
    }
  }, []);

  const handleSubscribe = async (priceId: string) => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/kontakt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });

    const result = await res.json();

    if (result.ok) {
      alert("Wiadomość została wysłana!");
      e.currentTarget.reset();
    } else {
      alert("Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  if (!isClient) return null;

  return (
    <main className={styles.container}>
           <section className={styles.banner}>
        <div className={styles.content}>
          <h1>Wsparcie dla Twojej strony</h1>
          <p>Zgłoś problem techniczny, zleć aktualizację lub aktywuj miesięczną opiekę nad stroną.</p>
        </div>
      </section>

      <section className={styles.supportTypes}>
        <div className={styles.supportTypesGrid}>
          <button
            onClick={() => setTyp("subskrypcja")}
            className={`${styles.supportButton} ${typ === "subskrypcja" ? styles.active : ""}`}
          >
            <FaHeadset className={styles.iconBtn} />
            <div className={styles.buttonText}>
              <span className={styles.title}>STAŁA POMOC</span>
              <span className={styles.subtitle}>Opieka nad stroną</span>
            </div>
          </button>
          <button
            onClick={() => setTyp("jednorazowa")}
            className={`${styles.supportButton} ${typ === "jednorazowa" ? styles.active : ""}`}
          >
            <FaWrench className={styles.iconBtn} />
            <div className={styles.buttonText}>
              <span className={styles.title}>JEDNORAZOWA POMOC</span>
              <span className={styles.subtitle}>Szybka interwencja techniczna</span>
            </div>
          </button>
        </div>

        {typ === "subskrypcja" ? (
          <div className={`${styles.supportSection} ${styles.columns}`}>
            {/* Standard package */}
            <div className={styles.package}>
              <h3>Opieka nad stroną <span>Standard</span></h3>
              <p className={styles.price}>39zł <span>/ miesięcznie</span></p>
              <ul>
                <li><span className={styles.check}>✔</span> Regularne aktualizacje</li>
                <li><span className={styles.check}>✔</span> Bezpłatna pomoc techniczna</li>
                <li><span className={styles.check}>✔</span> Optymalizacja prędkości ładowania</li>
                <li><span className={styles.check}>✔</span> Zabezpieczenie strony www</li>
                <li><span className={styles.check}>✔</span> Monitoring bezpieczeństwa 24/7</li>
                <li><span className={styles.check}>✔</span> Kopia plików: co 30 dni</li>
                <li><span className={styles.check}>✔</span> Raport raz w miesiącu</li>
                <li>
                  <span className={styles.check}>✔</span> Niewielkie modyfikacje treści i wyglądu
                  <ToggleSection title="Pokaż szczegóły">
                    <ul>
                      <li>- Edycja tekstów</li>
                      <li>- Podmiana max. 3 zdjęć miesięcznie</li>
                      <li>- Drobne korekty wyglądu (kolory, marginesy itp.)</li>
                      <li>- Maks. 30 minut pracy miesięcznie</li>
                    </ul>
                  </ToggleSection>
                </li>
                <li><span className={styles.check}>✔</span> Stały kontakt</li>
              </ul>
              <button onClick={() => handleSubscribe("price_1RZ6lpFlXiRA14LC1kCRkVgM")}>Wybierz Standard</button>
            </div>

            {/* Premium package */}
            <div className={styles.package}>
              <h3>Opieka nad stroną <span>Premium</span></h3>
              <p className={styles.price}>79zł <span>/ miesięcznie</span></p>
              <ul>
                <li><span className={styles.check}>✔</span> Priorytetowa obsługa zgłoszeń</li>
                <li><span className={styles.check}>✔</span> Regularne aktualizacje</li>
                <li><span className={styles.check}>✔</span> Bezpłatna pomoc techniczna</li>
                <li><span className={styles.check}>✔</span> Optymalizacja prędkości ładowania</li>
                <li><span className={styles.check}>✔</span> Zabezpieczenie strony www</li>
                <li><span className={styles.check}>✔</span> Monitoring bezpieczeństwa 24/7</li>
                <li><span className={styles.check}>✔</span> Kopia plików: co 30 dni</li>
                <li><span className={styles.check}>✔</span> Kopia bazy danych: co 7 dni</li>
                <li><span className={styles.check}>✔</span> Raport raz w miesiącu</li>
                <li>
                  <span className={styles.check}>✔</span> Niewielkie modyfikacje treści i wyglądu
                  <ToggleSection title="Pokaż szczegóły">
                    <ul>
                      <li>- Edycja tekstów</li>
                      <li>- Podmiana max. 3 zdjęć miesięcznie</li>
                      <li>- Drobne korekty wyglądu (kolory, marginesy itp.)</li>
                      <li>- Maks. 60 minut pracy miesięcznie</li>
                    </ul>
                  </ToggleSection>
                </li>
                <li><span className={styles.check}>✔</span> Stały kontakt</li>
              </ul>
              <button onClick={() => handleSubscribe("price_1RZ7JMFlXiRA14LCj4DLkbDS")}>Wybierz Premium</button>
            </div>
          </div>
        ) : (
          <div className={`${styles.supportSection} ${styles.columns}`}>
            <div className={styles.package}>
              <h3>Jednorazowa pomoc <span>techniczna</span></h3>
              <p className={styles.price}><span>od </span>50 zł <span>/ cena do ustalenia</span></p>
              <ul>
                <li><span className={styles.check}>✔</span> Naprawa strony (np. błędy)</li>
                <li><span className={styles.check}>✔</span> Wdrożenie certyfikatu SSL</li>
                <li><span className={styles.check}>✔</span> Zmiany na istniejącej stronie</li>
                <li><span className={styles.check}>✔</span> Czyszczenie i optymalizacja strony</li>
                <li><span className={styles.check}>✔</span> Przyspieszenie ładowania strony</li>
                <li><span className={styles.check}>✔</span> Przeniesienie strony na inny hosting</li>
                <li><span className={styles.check}>✔</span> Inne</li>
              </ul>
            </div>

            <div className={styles.package}>
              <p>
                Cena jednorazowej pomocy technicznej zależy od rodzaju zgłoszenia. Opisz, z czym masz problem, a ja odezwę się jak najszybciej z wyceną.
                Możesz również zadzwonić bezpośrednio na numer <strong>883 081 448</strong>.
              </p>
              <form className={styles.form} onSubmit={handleFormSubmit}>
                <input name="name" type="text" placeholder="Imię i nazwisko" required />
                <input name="email" type="email" placeholder="Adres e-mail" required />
                <input name="phone" type="tel" placeholder="Numer telefonu" required />
                <textarea name="message" placeholder="Opisz swój problem" required />
                <label className={styles.checkboxConsent}>
                  <input type="checkbox" required />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
                    <Link href="/polityka-prywatnosci" target="_blank">polityką prywatności</Link>.
                  </span>
                </label>
                <button type="submit">Wyślij zgłoszenie</button>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
