import type { Appearance, Compare, Content, Explainer, Faq, IconName, Item, MediaPhoto, Offer, Step, Talk, Testimonial } from "@/content/types";
import { site, mailto } from "@/content/site";
import { Icon } from "./Icon";

export function BookButton({ c, variant }: { c: Content; variant?: "accent" | "ghost" | "ghost-light" }) {
  return (
    <a href={site.calendly} target="_blank" rel="noopener noreferrer" className={`btn${variant ? ` btn--${variant}` : ""}`}>
      {c.cta.book}
    </a>
  );
}

export function PageHead({
  icon,
  image,
  position,
  portrait,
  title,
  lede,
  children,
}: {
  icon?: IconName;
  image?: string;
  position?: string;
  /** Portrait photo: shown on the right half instead of across the whole strip. */
  portrait?: boolean;
  title: string;
  lede: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`page-head${image ? "" : " page-head--plain"}${portrait ? " page-head--portrait" : ""}`}>
      {image && (
        <div className="page-head__bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" style={position ? { objectPosition: position } : undefined} />
        </div>
      )}
      <div className="wrap">
        <div className="heading-row">
          {icon && <Icon name={icon} size={44} />}
          <h1>{title}</h1>
        </div>
        <span className="accent-bar" />
        <p className="lede">{lede}</p>
        {children && <div className="cta-row on-dark page-head__actions">{children}</div>}
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

export function Offers({ items }: { items: Offer[] }) {
  return (
    <ul className="offers">
      {items.map((o) => (
        <li key={o.title} className="offer">
          <p className="offer__kicker">{o.kicker}</p>
          <h3>{o.title}</h3>
          <p className="offer__lead">{o.lead}</p>
          <p className="offer__list-title">{o.listTitle}</p>
          <ul className="offer__points">
            {o.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          {o.note && (
            <p className="offer__note">
              <strong>{o.note.label}</strong>
              {o.note.body}
            </p>
          )}
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

export function Quotes({ items, more }: { items: Testimonial[]; more?: string }) {
  return (
    <>
    <ul className="quotes">
      {items.map((t) => (
        <li key={t.name}>
          <figure className="quote" style={{ margin: 0 }}>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
              {t.context && <span className="quote__context">{t.context}</span>}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
    {more && (
      <p className="quotes__more">
        <a className="text-link" href={site.recommendations} target="_blank" rel="noopener noreferrer">
          {more}
        </a>
      </p>
    )}
    </>
  );
}

export function CtaBand({ c, stage }: { c: Content; stage?: string }) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="wrap cta-band__grid">
        <div>
          {stage && (
            <p className="stage stage--light">
              <span className="stage__line" aria-hidden="true" />
              {stage}
            </p>
          )}
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

export function Talks({ items }: { items: Talk[] }) {
  return (
    <ul className="talks">
      {items.map((t) => (
        <li key={t.title} className="talk">
          <div className="talk__img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.image} alt="" loading="lazy" style={t.position ? { objectPosition: t.position } : undefined} />
          </div>
          <div className="talk__body">
            <h3>{t.title}</h3>
            <p>{t.body}</p>
            <p className="talk__where">{t.where}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Appearances({ items }: { items: Appearance[] }) {
  return (
    <ul className="appearances">
      {items.map((a) => (
        <li key={a.event + a.place}>
          <figure className="appearance">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.image} alt={a.event} loading="lazy" style={a.position ? { objectPosition: a.position } : undefined} />
            <figcaption>
              {a.date && <span className="appearance__date">{a.date}</span>}
              <strong>{a.event}</strong>
              <span>{a.place}</span>
              <span className="appearance__role">{a.role}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export function StageList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="stagelist">
      <p className="stagelist__title">{title}</p>
      <ul>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export function Gallery({ items }: { items: MediaPhoto[] }) {
  return (
    <ul className="mgallery">
      {items.map((p) => (
        <li key={p.image}>
          <figure>
            <a href={p.image} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.caption} loading="lazy" style={p.position ? { objectPosition: p.position } : undefined} />
            </a>
            <figcaption>{p.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function IconItems({ items, compact }: { items: (Item & { icon: IconName })[]; compact?: boolean }) {
  return (
    <ul className={`icon-items${compact ? " icon-items--compact" : ""}`}>
      {items.map((i) => (
        <li key={i.title}>
          <Icon name={i.icon} />
          <h3>{i.title}</h3>
          <p>{i.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function ExplainerBlock({ e }: { e: Explainer }) {
  return (
    <div className="split">
      <h2>{e.title}</h2>
      <div className="stack explainer">
        {e.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function CompareBlock({ c }: { c: Compare }) {
  return (
    <div className="compare-wrap">
      <h3 className="compare-title">{c.title}</h3>
      <ul className="compare">
        {c.items.map((i) => (
          <li key={i.title} className={i.active ? "is-active" : undefined}>
            {i.active && <span className="compare__badge">{c.activeLabel}</span>}
            <h4>{i.title}</h4>
            <p>{i.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
