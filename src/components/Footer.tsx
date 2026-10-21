import { Link } from "@/i18n/navigation";
import type { Content } from "@/content/types";
import { site } from "@/content/site";

export function Footer({ c }: { c: Content }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <div>
            <div className="site-footer__brand">Łukasz Chomicz</div>
            <div className="roles">{c.brand.roles}</div>
            <p style={{ marginTop: 16 }}>{c.footer.tagline}</p>
            <span className="script">{c.brand.signature}</span>
          </div>
          <nav className="site-footer__nav" aria-label={c.nav.menu}>
            <ul>
              {[...c.nav.items, ...c.nav.more].map((item) => (
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
          <span>{c.brand.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
