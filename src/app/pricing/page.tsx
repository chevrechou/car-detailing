import styles from "./pricing.module.css";
import { FaPaw, FaWind, FaTools, FaLightbulb } from "react-icons/fa";

export const metadata = {
  title: "Pricing | Pay Attention 2 Detail",
  description:
    "Transparent pricing for detailing packages by vehicle size and condition.",
};

export default function PricingPage() {
  return (
    <section className={styles.wrap}>
      <h1>Pricing</h1>
      <p className="muted">
        Final quote may vary based on vehicle size and condition. Every service includes a quick inspection and a final walkaround.
      </p>

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
          {/* Wash & Vac */}
          <tr>
            <td>
              <div className={styles.pkgTitle}>Wash &amp; Vac</div>
              <ul className={styles.checklist}>
                <li>Gentle hand wash with pH-balanced soap</li>
                <li>Vacuum and light dust of interior surfaces</li>
                <li>Exterior glass cleaned</li>
                <li>Tires and rims cleaned and dressed</li>
              </ul>
              <div className={styles.pkgNote}>Best for weekly or biweekly upkeep.</div>
            </td>
            <td>$35</td>
            <td>$45</td>
            <td>$60</td>
          </tr>

          {/* Exterior Detail */}
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
            <td>$150</td>
            <td>$175</td>
            <td>$200</td>
          </tr>

          {/* Interior Detail */}
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
              <div className={styles.pkgNote}>
                Add a wash for $15. Add engine compartment for $25.
              </div>
            </td>
            <td>$150</td>
            <td>$175</td>
            <td>$200</td>
          </tr>

          {/* Complete */}
          <tr>
            <td>
              <div className={styles.pkgTitle}>
                Complete Exterior &amp; Interior{" "}
                <span className={styles.popular}>Most Popular</span>
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
              <div className={styles.pkgNote}>
                Ideal for seasonal resets or before selling. Engine bay cleaning on request.
              </div>
            </td>
            <td>$275</td>
            <td>$325</td>
            <td>$375</td>
          </tr>
        </tbody>
      </table>

      {/* Add ons */}
      <section className={styles.addonsCard}>
        <div className={styles.addonsHead}>
          <h2>Add ons and notes</h2>
          <p className="muted">
            Upgrade any package with quick add ons. Priced per vehicle.
          </p>
        </div>

        <div className={styles.chipsGrid}>
          <span className={styles.chip}>
            <FaPaw aria-hidden="true" />
            Pet hair removal <span className={styles.price}>+ $30 to $80</span>
          </span>

          <span className={styles.chip}>
            <FaWind aria-hidden="true" />
            Ozone odor treatment <span className={styles.price}>+ $60</span>
          </span>

          <span className={styles.chip}>
            <FaTools aria-hidden="true" />
            Engine bay detail <span className={styles.price}>+ $25</span> with service
          </span>

          <span className={styles.chip}>
            <FaLightbulb aria-hidden="true" />
            Headlight restoration <span className={styles.price}>+ $70</span>
          </span>
        </div>


        <p className={styles.addonsNote}>
          Final pricing depends on size and condition. Multi vehicle and maintenance plans are available.
        </p>
      </section>
    </section>
  );
}
