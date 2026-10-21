import type { Content, Item, Step, Trail as TrailColour } from "@/content/types";
import { site, mailto } from "@/content/site";
import { Trail } from "./Trail";
import fs from "node:fs";
import path from "node:path";

export function BookButton({
  c,
  variant,
}: {
  c: Content;
  variant?: "light" | "ghost";
}) {
  return (
    <a
      href={site.calendly}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn${variant ? ` btn--${variant}` : ""}`}
    >
      {c.cta.book}
    </a>
  );
}

export function PageHead({
  trail,
  title,
  lede,
}: {
  trail?: TrailColour;
  title: string;
  lede: string;
}) {
  return (
    <section className={`page-head${trail ? ` page-head--${trail}` : ""}`}>
      <div className="wrap">
        <div className="heading-row">
          {trail && <Trail colour={trail} size="lg" />}
          <h1>{title}</h1>
        </div>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  trail,
  children,
  id,
}: {
  trail?: TrailColour;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="heading-row">
      {trail && <Trail colour={trail} />}
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

export function CtaBand({ c }: { c: Content }) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="wrap cta-band__grid">
        <div>
          <h2 id="cta-band-title">{c.cta.bandTitle}</h2>
          <p>{c.cta.bandBody}</p>
        </div>
        <div className="stack">
          <BookButton c={c} variant="light" />
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

/**
 * Shows /public/images/lukasz.jpg when it exists. Until a photo is added,
 * a neutral block with initials keeps the layout intact.
 */
export function Portrait({ alt }: { alt: string }) {
  const file = path.join(process.cwd(), "public", "images", "lukasz.jpg");
  const hasPhoto = fs.existsSync(file);
  return (
    <div className="portrait">
      {hasPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/images/lukasz.jpg" alt={alt} loading="lazy" />
      ) : (
        <span className="portrait__initials" aria-hidden="true">
          ŁC
        </span>
      )}
    </div>
  );
}
