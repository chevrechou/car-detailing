"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`navLink ${active ? "active" : ""} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerRow">
        <div className="brand">
          <Link href="/">Pay Attention 2 Detail</Link>
        </div>
        <nav className="nav">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact" className="cta">Book Now</NavLink>
        </nav>
      </div>
    </header>
  );
}
