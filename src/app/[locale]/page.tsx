import { Link } from "@/i18n/navigation";
import { BookButton, CtaBand, Photo, Quotes } from "@/components/Blocks";
import { EventCard } from "@/components/EventCard";
import { Icon } from "@/components/Icon";
import { TrailMap } from "@/components/TrailMap";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) => pageMetadata(params, "/");

export default async function HomePage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const h = c.home;

  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-gory.webp" alt="" fetchPriority="high" />
        </div>
        <div className="wrap hero__grid">
          <div className="hero__text">
            <h1 className="hero__name">
              Łukasz
              <br />
              Chomicz
            </h1>
            <div className="roles">{c.brand.roles}</div>
            <span className="accent-bar" />
            <p className="hero__tagline">{c.brand.tagline}</p>
            <p className="lede">{h.lede}</p>
            <div className="cta-row on-dark">
              <BookButton c={c} variant="accent" />
              <Link href="/mentoring" className="btn btn--ghost-light">
                {c.mentoring.program.name.split(" - ")[0]}
              </Link>
            </div>
          </div>
          <div className="hero__portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/portret3.webp" alt={c.about.portraitAlt} />
            <span className="hero__signature script" aria-hidden="true">
              {c.brand.signature}
            </span>
          </div>
        </div>
      </section>

      <section className="stats" aria-label={h.stats.map((s) => s.value).join(", ")}>
        <div className="wrap">
          <ul className="stats__list">
            {h.stats.map((s) => (
              <li key={s.label}>
                <span className="stats__value">{s.value}</span>
                <span className="stats__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="creds">
        <div className="wrap creds__inner">
          <span className="creds__label">{h.credentialsLabel}</span>
          <ul>
            {h.credentials.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="section section--dusk signpost-section" aria-labelledby="signpost">
        <div className="wrap">
          <div className="split">
            <div className="stack">
              <h2 id="signpost">{h.signpost.title}</h2>
              <span className="accent-bar" />
            </div>
            <div className="stack">
              <p className="lede">{h.signpost.body}</p>
              <p className="legend">
                {h.signpost.arms.map((a) => (
                  <span key={a.trail} aria-hidden="true" className={`trail trail--${a.trail}`} />
                ))}
                <span>{h.signpost.legend}</span>
              </p>
            </div>
          </div>
          <TrailMap label={h.signpost.label} summit={h.signpost.summit} arms={h.signpost.arms} />
        </div>
      </section>

      <section className="section" aria-labelledby="origin">
        <div className="wrap split split--center">
          <Photo src="/images/scena-2.webp" alt={c.about.portraitAlt} shape="tall" />
          <div className="stack">
            <h2 id="origin">{h.origin.title}</h2>
            <span className="accent-bar" />
            {h.origin.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="cta-row" style={{ marginTop: 28 }}>
              <Link href="/o-mnie" className="text-link">
                {c.about.intro.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--lavender" aria-labelledby="paths" style={{ paddingTop: "clamp(56px, 7vw, 96px)" }}>
        <div className="wrap">
          <div className="section-head">
            <h2 id="paths">{h.pathsTitle}</h2>
            <span className="accent-bar" />
          </div>
          <ul className="paths">
            {h.paths.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={`path${p.href === "/ksiazki" ? " path--books" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt="" loading="lazy" />
                  <span className="path__body">
                    <Icon name={p.icon} />
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <span className="path__link">{p.link}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dusk" aria-labelledby="quotes">
        <div className="wrap">
          <div className="section-head">
            <h2 id="quotes">{h.testimonialsTitle}</h2>
            <span className="accent-bar" />
          </div>
          <Quotes items={c.testimonials} />
        </div>
      </section>

      <section className="section" aria-labelledby="events">
        <div className="wrap">
          <div className="section-head heading-row" style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
            <h2 id="events">{h.eventsTitle}</h2>
            <Link href="/wydarzenia" className="text-link">
              {h.eventsLink}
            </Link>
          </div>
          <ul className="events">
            {c.events.list.map((e) => (
              <EventCard key={e.slug} e={e} />
            ))}
          </ul>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
