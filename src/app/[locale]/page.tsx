import { Link } from "@/i18n/navigation";
import { BookButton, CtaBand, Photo, Quotes } from "@/components/Blocks";
import { EventCard } from "@/components/EventCard";
import { HeroJourney } from "@/components/HeroJourney";
import { Icon } from "@/components/Icon";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) => pageMetadata(params, "/");

function Stage({ n, label }: { n: number; label: string }) {
  return (
    <p className="stage" data-stage={n}>
      <span className="stage__line" aria-hidden="true" />
      {label}
    </p>
  );
}

export default async function HomePage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const h = c.home;
  const ids = ["etap-1", "etap-2", "etap-3", "etap-4", "szczyt"];

  return (
    <>
      <section className="hero hero--journey">
        <div className="hero__bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-babia.webp" alt="" fetchPriority="high" />
        </div>
        <HeroJourney arms={h.signpost.arms} summit={h.signpost.summit} />
        <div className="wrap hero__inner">
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
              <a href="#etap-2" className="btn btn--ghost-light">
                {h.pathsTitle}
              </a>
            </div>
          </div>
        </div>
        <nav className="hero__routes" aria-label={h.signpost.label}>
          <ul className="wrap">
            <li className="hero__routes-title" aria-hidden="true">
              {h.signpost.label}
            </li>
            {h.signpost.arms.map((a) => (
              <li key={a.trail}>
                <Link href={a.href} className={`r-${a.trail}`}>
                  <span aria-hidden="true" className={`trail trail--${a.trail}`} />
                  <span>
                    <strong>{a.label}</strong>
                    <small>{a.detail}</small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <nav className="rail" aria-label={h.railLabel}>
        <ol>
          {h.stages.map((s, i) => (
            <li key={s}>
              <a href={`#${ids[i]}`}>
                <span className="rail__dot" aria-hidden="true" />
                <span className="rail__label">{s}</span>
              </a>
            </li>
          ))}
        </ol>
        <span className="rail__track" aria-hidden="true">
          <span className="rail__fill" />
        </span>
      </nav>

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

      <section className="section" id={ids[0]} aria-labelledby="origin">
        <div className="wrap split split--center">
          <Photo src="/images/portret.webp" alt={c.about.portraitAlt} shape="tall" />
          <div className="stack">
            <Stage n={1} label={h.stages[0]} />
            <h2 id="origin">{h.origin.title}</h2>
            {h.origin.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="creds-inline">
              <span className="creds__label">{h.credentialsLabel}</span>
              <ul>
                {h.credentials.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="cta-row">
              <Link href="/o-mnie" className="text-link">
                {c.about.intro.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--lavender" id={ids[1]} aria-labelledby="paths">
        <div className="wrap">
          <div className="section-head">
            <Stage n={2} label={h.stages[1]} />
            <h2 id="paths">{h.pathsTitle}</h2>
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

      <section className="section section--dusk" id={ids[2]} aria-labelledby="quotes">
        <div className="wrap">
          <div className="section-head">
            <Stage n={3} label={h.stages[2]} />
            <h2 id="quotes">{h.testimonialsTitle}</h2>
          </div>
          <Quotes items={c.testimonials} />
        </div>
      </section>

      <section className="section" id={ids[3]} aria-labelledby="events">
        <div className="wrap">
          <div className="section-head">
            <Stage n={4} label={h.stages[3]} />
            <div className="heading-row" style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
              <h2 id="events">{h.eventsTitle}</h2>
              <Link href="/wydarzenia" className="text-link">
                {h.eventsLink}
              </Link>
            </div>
          </div>
          <ul className="events">
            {c.events.list.map((e) => (
              <EventCard key={e.slug} e={e} />
            ))}
          </ul>
        </div>
      </section>

      <div id={ids[4]}>
        <CtaBand c={c} stage={h.stages[4]} />
      </div>
    </>
  );
}
