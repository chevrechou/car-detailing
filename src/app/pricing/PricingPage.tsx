"use client";

import styles from "./pricing.module.css";
import { FaPaw, FaWind, FaTools, FaLightbulb } from "react-icons/fa";

export default function PricingPage() {
  function toggle(e: React.SyntheticEvent<HTMLDetailsElement>) {
    const el = e.currentTarget;
    const content = el.querySelector<HTMLElement>("[data-content]");
    if (!content) return;

    if (el.open) {
      // Opening: set maxHeight to scrollHeight
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";

      // After transition, remove maxHeight so it adapts to content changes
      content.addEventListener(
        "transitionend",
        () => {
          content.style.maxHeight = "none";
        },
        { once: true }
      );
    } else {
      // Closing: set fixed height first, then shrink to 0
      content.style.maxHeight = content.scrollHeight + "px";
      requestAnimationFrame(() => {
        content.style.maxHeight = "0px";
        content.style.opacity = "0";
      });

      // Prevent instant snap → temporarily force it to stay open until animation ends
      el.open = true;
      content.addEventListener(
        "transitionend",
        () => {
          el.open = false; // now let it actually close
        },
        { once: true }
      );
    }
  }

  return (
    <section className={styles.wrap}>
      <h1>Pricing</h1>
      <p className="muted">
        Final quote may vary based on vehicle size and condition. Every service includes a quick inspection and a final walkaround.
      </p>

      {/* Desktop table (keeps your previous layout) */}
      <div className={styles.desktopOnly}>
        <table className={styles.table} style={{ marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>Package</th>
              <th>Cars</th>
              <th>Small or Mid SUV</th>
              <th>Large SUV or Truck</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.pkgTitle}>Wash &amp; Vac</div>
                <ul className={styles.checklist}>
                  <li>Gentle hand wash with pH balanced soap</li>
                  <li>Vacuum and light dust of interior surfaces</li>
                  <li>Exterior glass cleaned</li>
                  <li>Tires and rims cleaned and dressed</li>
                </ul>
                <div className={styles.pkgNote}>Best for weekly or biweekly upkeep.</div>
              </td>
              <td>$35</td><td>$45</td><td>$60</td>
            </tr>

            <tr>
              <td>
                <div className={styles.pkgTitle}>Exterior Detail</div>
                <ul className={styles.checklist}>
                  <li>Decontamination wash and clay treatment</li>
                  <li>Light machine polish for clarity and gloss</li>
                  <li>Hand applied wax or sealant protection</li>
                  <li>Wheels and tires detailed</li>
                  <li>Exterior glass cleaned</li>
                </ul>
                <div className={styles.pkgNote}>Great when paint feels rough or looks dull.</div>
              </td>
              <td>$150</td><td>$175</td><td>$200</td>
            </tr>

            <tr>
              <td>
                <div className={styles.pkgTitle}>Interior Detail</div>
                <ul className={styles.checklist}>
                  <li>Complete vacuum of seats, carpets, and mats</li>
                  <li>Shampoo and fabric conditioning</li>
                  <li>Leather cleaned and conditioned</li>
                  <li>Vents and crevices brushed</li>
                  <li>Interior glass cleaned</li>
                </ul>
                <div className={styles.pkgNote}>Add a wash for $15. Add engine compartment for $25.</div>
              </td>
              <td>$150</td><td>$175</td><td>$200</td>
            </tr>

            <tr>
              <td>
                <div className={styles.pkgTitle}>
                  Complete Exterior &amp; Interior <span className={styles.popular}>Most Popular</span>
                </div>
                <ul className={styles.checklist}>
                  <li>Full decon wash and clay treatment</li>
                  <li>Polish for shine and clarity</li>
                  <li>Protective hand wax applied</li>
                  <li>Vacuum, shampoo and condition interior</li>
                  <li>Leather care where applicable</li>
                  <li>Mats, jambs, and vents detailed</li>
                  <li>All glass cleaned inside and out</li>
                </ul>
                <div className={styles.pkgNote}>Ideal for seasonal resets or before selling.</div>
              </td>
              <td>$275</td><td>$325</td><td>$375</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile cards with expand */}
      <div className={styles.mobileOnly}>
        <div className={styles.cards}>
          {/* Wash & Vac */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Wash &amp; Vac</h3>
            <ul className={styles.checklist}>
              <li>Gentle hand wash with pH balanced soap</li>
              <li>Vacuum and light dust of interior surfaces</li>
              <li>Exterior glass cleaned</li>
              <li>Tires and rims cleaned and dressed</li>
            </ul>
            <p className={styles.note}>Best for weekly or biweekly upkeep.</p>

            {/* animated details */}
            <details className={styles.disclosure} onToggle={toggle}>
              <summary className={styles.summaryBtn}>
                <span>View Pricing</span>
                <span className={styles.chev} aria-hidden>▾</span>
              </summary>
              <div className={styles.disclosureContent}>
                <div className={styles.prices}>
                  <div className={styles.priceRow}><span>Cars</span><span className={styles.price}>$35</span></div>
                  <div className={styles.priceRow}><span>Small or Mid SUV</span><span className={styles.price}>$45</span></div>
                  <div className={styles.priceRow}><span>Large SUV or Truck</span><span className={styles.price}>$60</span></div>
                </div>
              </div>
            </details>
          </article>

          {/* Exterior Detail */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Exterior Detail</h3>
            <ul className={styles.checklist}>
              <li>Decontamination wash and clay treatment</li>
              <li>Light machine polish for clarity and gloss</li>
              <li>Hand applied wax or sealant protection</li>
              <li>Wheels and tires detailed</li>
              <li>Exterior glass cleaned</li>
            </ul>
            <p className={styles.note}>Great when paint feels rough or looks dull.</p>

            {/* animated details */}
            <details className={styles.disclosure} onToggle={toggle}>
              <summary className={styles.summaryBtn}>
                <span>View Pricing</span>
                <span className={styles.chev} aria-hidden>▾</span>
              </summary>
              <div className={styles.disclosureContent}>
                <div className={styles.prices}>
                  <div className={styles.priceRow}><span>Cars</span><span className={styles.price}>$150</span></div>
                  <div className={styles.priceRow}><span>Small or Mid SUV</span><span className={styles.price}>$175</span></div>
                  <div className={styles.priceRow}><span>Large SUV or Truck</span><span className={styles.price}>$200</span></div>
                </div>
              </div>
            </details>
          </article>

          {/* Interior Detail */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Interior Detail</h3>
            <ul className={styles.checklist}>
              <li>Complete vacuum of seats, carpets, and mats</li>
              <li>Shampoo and fabric conditioning</li>
              <li>Leather cleaned and conditioned</li>
              <li>Vents and crevices brushed</li>
              <li>Interior glass cleaned</li>
            </ul>
            <p className={styles.note}>Add a wash for $15. Add engine compartment for $25.</p>

            {/* animated details */}
            <details className={styles.disclosure} onToggle={toggle}>
              <summary className={styles.summaryBtn}>
                <span>View Pricing</span>
                <span className={styles.chev} aria-hidden>▾</span>
              </summary>
              <div className={styles.disclosureContent}>
                <div className={styles.prices}>
                  <div className={styles.priceRow}><span>Cars</span><span className={styles.price}>$150</span></div>
                  <div className={styles.priceRow}><span>Small or Mid SUV</span><span className={styles.price}>$175</span></div>
                  <div className={styles.priceRow}><span>Large SUV or Truck</span><span className={styles.price}>$200</span></div>
                </div>
              </div>
            </details>
          </article>

          {/* Complete */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>
              Complete Exterior &amp; Interior <span className={styles.popular}>Most Popular</span>
            </h3>
            <ul className={styles.checklist}>
              <li>Full decon wash and clay treatment</li>
              <li>Polish for shine and clarity</li>
              <li>Protective hand wax applied</li>
              <li>Vacuum, shampoo and condition interior</li>
              <li>Leather care where applicable</li>
              <li>Mats, jambs, and vents detailed</li>
              <li>All glass cleaned inside and out</li>
            </ul>
            <p className={styles.note}>Ideal for seasonal resets or before selling.</p>

            {/* animated details */}
            <details className={styles.disclosure} onToggle={toggle}>
              <summary className={styles.summaryBtn}>
                <span>View Pricing</span>
                <span className={styles.chev} aria-hidden>▾</span>
              </summary>
              <div className={styles.disclosureContent}>
                <div className={styles.prices}>
                  <div className={styles.priceRow}><span>Cars</span><span className={styles.price}>$275</span></div>
                  <div className={styles.priceRow}><span>Small or Mid SUV</span><span className={styles.price}>$325</span></div>
                  <div className={styles.priceRow}><span>Large SUV or Truck</span><span className={styles.price}>$375</span></div>
                </div>
              </div>
            </details>
          </article>
        </div>
      </div>

      {/* Add ons stays for all viewports */}
      <section className={styles.addonsCard}>
        <div className={styles.addonsHead}>
          <h2>Add ons and notes</h2>
          <p className="muted">Upgrade any package with quick add ons. Priced per vehicle.</p>
        </div>

        <div className={styles.chipsGrid}>
          <span className={styles.chip}><FaPaw /> Pet hair removal <span className={styles.priceAccent}>+ $30 to $80</span></span>
          <span className={styles.chip}><FaWind /> Ozone odor treatment <span className={styles.priceAccent}>+ $60</span></span>
          <span className={styles.chip}><FaTools /> Engine bay detail <span className={styles.priceAccent}>+ $25</span> with service</span>
          <span className={styles.chip}><FaLightbulb /> Headlight restoration <span className={styles.priceAccent}>+ $70</span></span>
        </div>

        <p className={styles.addonsNote}>
          Final pricing depends on size and condition. Multi vehicle and maintenance plans are available.
        </p>
      </section>
    </section>
  );
}
