import type { Content, IconName, Item, Step, Testimonial } from "@/content/types";
import { site, mailto } from "@/content/site";
import { Icon } from "./Icon";

export function BookButton({ c, variant }: { c: Content; variant?: "accent" | "ghost" | "ghost-light" }) {
  return (
    <a href={site.calendly} target="_blank" rel="noopener noreferrer" className={`btn${variant ? ` btn--${variant}` : ""}`}>
      {c.cta.book}
    </a>
  );
}

export function PageHead({ icon, image, title, lede }: { icon?: IconName; image?: string; title: string; lede: string }) {
  return (
    <section className={`page-head${image ? "" : " page-head--plain"}`}>
      {image && (
        <div className="page-head__bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" />
        </div>
      )}
      <div className="wrap">
        <div className="heading-row">
          {icon && <Icon name={icon} size={44} />}
          <h1>{title}</h1>
        </div>
        <span className="accent-bar" />
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ icon, children, id }: { icon?: IconName; children: React.ReactNode; id?: string }) {
  return (
    <div className="heading-row">
      {icon && <Icon name={icon} />}
      <h2 id={id}>{children}</h2>
    </div>
  );
}

export function Items({ c, items }: { c: Content; items: Item[] }) {
  return (
    <ul className="items">
      {items.map((item) => (
        <li key={item.title}>
          <h3>
            {item.title}
            {item.note && (
              <span className={`badge${item.note === "free" ? " badge--free" : ""}`}>
                {c.status[item.note as keyof Content["status"]] ?? item.note}
              </span>
            )}
          </h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: Step[] }) {
  return (
    <ol className="steps">
      {items.map((s) => (
        <li key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="bullets">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

export function Photo({ src, alt, shape = "wide" }: { src: string; alt: string; shape?: "wide" | "tall" | "fill" }) {
  return (
    <div className={`photo${shape === "fill" ? "" : ` photo--${shape}`}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export function Quotes({ items }: { items: Testimonial[] }) {
  return (
    <ul className="quotes">
      {items.map((t) => (
        <li key={t.name}>
          <figure className="quote" style={{ margin: 0 }}>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({ c }: { c: Content }) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="wrap cta-band__grid">
        <div>
          <h2 id="cta-band-title">{c.cta.bandTitle}</h2>
          <p>{c.cta.bandBody}</p>
          <span className="script" aria-hidden="true">
            {c.brand.signature}
          </span>
        </div>
        <div className="stack">
          <BookButton c={c} />
          <p className="cta-note">
            {c.cta.bookNote}{" "}
            <a href={mailto()} style={{ color: "#fff" }}>
              {c.cta.write}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
