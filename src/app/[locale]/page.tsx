import { Link } from "@/i18n/navigation";
import { BookButton, CtaBand, SectionHeading } from "@/components/Blocks";
import { Signpost } from "@/components/Signpost";
import { Trail } from "@/components/Trail";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";
import type { AppPathname } from "@/i18n/routing";
import type { Trail as TrailColour } from "@/content/types";

export const generateMetadata = ({ params }: PageProps) => pageMetadata(params, "/");

export default async function HomePage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const h = c.home;

  const areas: { trail?: TrailColour; href: AppPathname; data: typeof h.training }[] = [
    { trail: "blue", href: "/szkolenia", data: h.training },
    { trail: "green", href: "/wystapienia", data: h.speaking },
    { trail: "yellow", href: "/ksiazki", data: h.books },
  ];

  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <p className="hero__name">{h.name}</p>
            <h1>{h.title}</h1>
            <p className="lede">{h.lede}</p>
            <div className="cta-row">
              <BookButton c={c} />
              <span className="cta-note">{c.cta.bookNote}</span>
            </div>
          </div>
          <Signpost label={h.signpostLabel} arms={h.arms} />
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="origin">
        <div className="wrap split">
          <div className="stack">
            <h2 id="origin">{h.origin.title}</h2>
          </div>
          <div className="stack">
            {h.origin.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <dl className="facts" style={{ marginTop: 32 }}>
              {h.origin.facts.map((f) => (
                <div key={f.value}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--spruce" aria-labelledby="mentoring">
        <div className="wrap split">
          <SectionHeading trail="red" id="mentoring">
            {h.mentoring.title}
          </SectionHeading>
          <div className="stack">
            <p className="lede">{h.mentoring.body}</p>
            <div className="cta-row" style={{ marginTop: 28 }}>
              <BookButton c={c} variant="light" />
              <Link href="/mentoring" className="text-link" style={{ color: "#fff" }}>
                {h.mentoring.link}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ul className="areas">
            {areas.map((a) => (
              <li className="area" key={a.href}>
                {a.trail ? <Trail colour={a.trail} /> : <span />}
                <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}>{a.data.title}</h2>
                <div>
                  <p>{a.data.body}</p>
                  <Link href={a.href} className="text-link">
                    {a.data.link}
                  </Link>
                </div>
              </li>
            ))}
            <li className="area">
              <Trail colour="black" />
              <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}>{c.courses.intro.title}</h2>
              <div>
                <p>{c.courses.intro.lede}</p>
                <Link href="/kursy" className="text-link">
                  {h.coursesLink}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--mist section--tight" aria-labelledby="linkaris">
        <div className="wrap split">
          <h2 id="linkaris">{h.linkaris.title}</h2>
          <div className="stack">
            <p>{h.linkaris.body}</p>
            <Link href="/linkaris" className="text-link">
              {h.linkaris.link}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
