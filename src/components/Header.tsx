"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Content } from "@/content/types";
import { useEffect, useRef } from "react";

export function Header({ nav }: { nav: Content["nav"] }) {
  const pathname = usePathname();
  const locale = useLocale();
  const otherLocale = locale === "pl" ? "en" : "pl";
  const menuRef = useRef<HTMLDetailsElement>(null);

  // Close the mobile menu after navigating.
  useEffect(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, [pathname]);

  const links = nav.items.map((item) => (
    <li key={item.href}>
      <Link
        href={item.href}
        aria-current={pathname === item.href ? "page" : undefined}
      >
        {item.label}
      </Link>
    </li>
  ));

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="wordmark" aria-label={`Łukasz Chomicz, ${nav.home}`}>
          Łukasz Chomicz
        </Link>
        <nav className="main-nav" aria-label={nav.menu}>
          <ul>{links}</ul>
        </nav>
        <Link
          href={pathname}
          locale={otherLocale}
          className="lang-switch"
          aria-label={nav.langLabel}
          hrefLang={otherLocale}
        >
          {nav.langName}
        </Link>
        <details className="mobile-nav" ref={menuRef}>
          <summary>{nav.menu}</summary>
          <nav className="mobile-nav__panel" aria-label={nav.menu}>
            <ul>{links}</ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
