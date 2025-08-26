"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" }, // ✅ new
];


  return (
    <header className={styles.siteHeader}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/">Pay Attention 2 Detail</Link>
        </div>

        <nav
          id="primary-nav"
          className={`${styles.nav} ${open ? styles.open : ""}`}
          aria-label="Primary"
        >
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={pathname === link.href ? styles.active : ""}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={styles.cta}
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`${styles.menuButton} ${open ? styles.menuOpen : ""}`}
          onClick={() => setOpen(v => !v)}
          aria-controls="primary-nav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          type="button"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </header>
  );
}
