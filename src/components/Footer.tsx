import { Link } from "@/i18n/navigation";
import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Trail } from "./Trail";

export function Footer({ c }: { c: Content }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <div>
            <div className="site-footer__brand">Łukasz Chomicz</div>
            <p style={{ marginTop: 8 }}>{c.footer.tagline}</p>
            <div className="site-footer__trails">
              <Trail colour="red" size="sm" />
              <Trail colour="blue" size="sm" />
              <Trail colour="green" size="sm" />
              <Trail colour="yellow" size="sm" />
              <Trail colour="black" size="sm" />
            </div>
          </div>
          <nav className="site-footer__nav" aria-label={c.nav.menu}>
            <ul>
              {c.nav.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ul>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>
            © {year} {site.company}. {c.footer.rights}
          </span>
          <span>lukaszchomicz.pl</span>
        </div>
      </div>
    </footer>
  );
}
