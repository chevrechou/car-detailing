import Image from "next/image";
import styles from "./services.module.css";

export const metadata = {
  title: "Services | Pay Attention 2 Detail",
  description:
    "Mobile car detailing in Dallas. Wash and Vac, Exterior Detail, Interior Detail, and Complete packages with professional care.",
};

export default function ServicesPage() {
  return (
    <section className={styles.wrap}>
      <h1>Services</h1>
      <p className={styles.intro}>
        Every appointment starts with a quick inspection and ends with a walkaround to confirm the results.
        Mobile service is available in the Dallas area.
      </p>

      {/* 2x2 Grid */}
      <div className={styles.grid}>
        {/* Wash & Vac */}
        <article className={styles.card}>
          <h3>
            Wash and Vac <span className={styles.badge}>Maintenance</span>
          </h3>
          <p className={styles.muted}>
            Fast upkeep package that keeps daily drivers presentable between full details.
          </p>
          <ul className={styles.ul}>
            <li>Hand wash with pH balanced soap</li>
            <li>Vacuum and light dust of interior surfaces</li>
            <li>Windows cleaned inside and out</li>
            <li>Tires and rims cleaned</li>
          </ul>
        </article>

        {/* Exterior Detail */}
        <article className={styles.card}>
          <h3>
            Exterior Detail <span className={styles.badge}>Gloss</span>
          </h3>
          <p className={styles.muted}>
            Restores gloss and smoothness with safe prep and protection.
          </p>
          <ul className={styles.ul}>
            <li>Thorough hand wash and exterior glass clean</li>
            <li>Wheel faces and tires cleaned</li>
            <li>Clay treatment to remove bonded contaminants</li>
            <li>Buff and polish to enhance clarity</li>
            <li>Hand applied wax or sealant</li>
          </ul>
        </article>

        {/* Interior Detail */}
        <article className={styles.card}>
          <h3>
            Interior Detail <span className={styles.badge}>Refresh</span>
          </h3>
          <p className={styles.muted}>
            Deep clean that refreshes cabins and removes light odors.
          </p>
          <ul className={styles.ul}>
            <li>Full vacuum including seats, carpets, and mats</li>
            <li>Shampoo and condition fabrics and upholstery</li>
            <li>Leather cleaned and conditioned</li>
            <li>Interior glass, vents, and door jambs cleaned</li>
          </ul>
        </article>

        {/* Complete Detail */}
        <article className={styles.card}>
          <h3>
            Complete Exterior and Interior <span className={styles.badge}>Full</span>
          </h3>
          <p className={styles.muted}>
            Our most popular package for vehicles that need a full refresh inside and out.
          </p>
          <ul className={styles.ul}>
            <li>Exterior: wash, clay, polish, wax, wheels & glass</li>
            <li>Interior: vacuum, shampoo and condition seats, mats, jambs</li>
            <li>Engine compartment cleaning on request</li>
          </ul>
        </article>
      </div>

      {/* Add ons */}
      <div className={`${styles.card} ${styles.addons}`}>
        <h3>Add ons and notes</h3>
        <ul>
          <li>Pet hair removal add 30–80 based on severity</li>
          <li>Ozone odor treatment add 60</li>
          <li>Engine bay detail add 25 with another service</li>
          <li>Headlight restoration add 70</li>
        </ul>
        <p className={styles.muted}>
          Final pricing depends on size and condition. Multi-vehicle and maintenance plans are available.
        </p>
      </div>

      {/* Full-width image */}
      <div className={styles.bannerWrap}>
        <video
          className={styles.heroMedia}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/car/car-wash-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
