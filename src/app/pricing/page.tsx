import styles from "./pricing.module.css";

export const metadata = {
  title: "Pricing | Pay Attention 2 Detail",
  description:
    "Transparent pricing for detailing packages by vehicle size and condition.",
};

export default function PricingPage() {
  return (
    <section className={styles.wrap}>
      <h1>Pricing</h1>
      <p className="muted">Final quote may vary based on condition and size.</p>

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
              <div className={styles.pkgTitle}>
                <span className={styles.dot} aria-hidden="true" />
                Wash &amp; Vac
              </div>
              <div className={styles.pkgDesc}>
                Hand wash exterior, vacuum and dust interior, clean windows,
                tires and rims.
              </div>
            </td>
            <td>$35</td>
            <td>$45</td>
            <td>$60</td>
          </tr>

          <tr>
            <td>
              <div className={styles.pkgTitle}>
                <span className={styles.dot} aria-hidden="true" />
                Exterior Detail
              </div>
              <div className={styles.pkgDesc}>
                Hand wash, clean windows, tires and rims, clay treatment, buff
                and polish, hand wax.
              </div>
            </td>
            <td>$150</td>
            <td>$175</td>
            <td>$200</td>
          </tr>

          <tr>
            <td>
              <div className={styles.pkgTitle}>
                <span className={styles.dot} aria-hidden="true" />
                Interior Detail
              </div>
              <div className={styles.pkgDesc}>
                Vacuum, shampoo and condition interior including rugs and mats,
                clean windows and door jambs.
              </div>
              <div className={styles.pkgNote}>
                Add a wash +$15. Add engine compartment +$25.
              </div>
            </td>
            <td>$150</td>
            <td>$175</td>
            <td>$200</td>
          </tr>

          <tr>
            <td>
              <div className={styles.pkgTitle}>
                <span className={styles.dot} aria-hidden="true" />
                Complete Exterior &amp; Interior
              </div>
              <div className={styles.pkgDesc}>
                Hand wash, clean windows, tires and rims, clay treatment, buff
                and polish, hand wax exterior. Vacuum, shampoo and condition
                interior including rugs and mats, clean door jambs and engine
                compartments.
              </div>
            </td>
            <td>$275</td>
            <td>$325</td>
            <td>$375</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
