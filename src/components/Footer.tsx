import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { SiNextdoor } from "react-icons/si";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className="container">
        <p>© {new Date().getFullYear()} Pay Attention 2 Detail. All rights reserved.</p>

        <div className={styles.links}>
          {/* Nextdoor */}
          <a
            href="https://nextdoor.com/pages/pay-attention-2-detail-dallas-tx/?init_source=org_pages&utm_campaign=1717458977390"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nextdoor"
          >
            <SiNextdoor />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/pay_attention2detail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* Phone */}
          <a href="tel:+16302403085" aria-label="Call">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </footer>
  );
}
