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

      <div className={styles.rows}>
        {/* 1. Wash and Vac — text then image */}
        <div className={styles.row}>
          <article className={styles.text}>
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

          <div className={styles.media}>
            <Image
              src="/services/service-1.jpg"
              alt="Hand wash and vacuum service"
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* 2. Exterior Detail — image then text */}
        <div className={styles.row}>
          <div className={styles.media}>
            <Image
              src="/gallery/gallery-10.jpg"
              alt="Exterior detail with polish and wax"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <article className={styles.text}>
            <h3>
              Exterior Detail <span className={styles.badge}>Gloss</span>
            </h3>
            <p className={styles.muted}>
              Restore gloss and smoothness with safe prep and durable protection.
            </p>
            <ul className={styles.ul}>
              <li>Thorough hand wash and exterior glass clean</li>
              <li>Wheel faces and tires cleaned</li>
              <li>Clay treatment to remove bonded contaminants</li>
              <li>Buff and polish to enhance clarity</li>
              <li>Hand applied wax or sealant</li>
            </ul>
          </article>
        </div>

        {/* 3. Interior Detail — text then image */}
        <div className={styles.row}>
          <article className={styles.text}>
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

          <div className={styles.media}>
            <Image
              src="/gallery/gallery-12.jpg"
              alt="Interior detail with shampoo and conditioning"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* 4. Complete Package — image then text */}
        <div className={styles.row}>
          <div className={styles.media}>
            <Image
              src="/services/service-2.jpg"
              alt="Complete inside and out detail"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <article className={styles.text}>
            <h3>
              Complete Exterior and Interior <span className={styles.badge}>Full Package</span>
            </h3>
            <p className={styles.muted}>
              Our most popular package for vehicles that need a full refresh inside and out.
            </p>
            <ul className={styles.ul}>
              <li>Exterior: wash, clay, polish, wax, wheels and glass</li>
              <li>Interior: vacuum, shampoo and condition seats, mats, jambs</li>
              <li>Engine compartment cleaning on request</li>
            </ul>
          </article>
        </div>
      </div>

      {/* Full-width video banner (hidden on mobile via CSS) */}
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
