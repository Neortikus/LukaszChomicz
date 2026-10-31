import { BookButton, Bullets, CompareBlock, CtaBand, ExplainerBlock, FaqList, IconItems, Items, PageHead, Photo, Quotes, SectionHeading, Steps } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/mentoring", (c) => ({
    title: c.mentoring.intro.title,
    description: c.mentoring.intro.lede,
  }));

export default async function MentoringPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const m = c.mentoring;
  return (
    <>
      <PageHead icon="kierunek" image="/images/portret2.webp" position="50% 6%" portrait title={m.intro.title} lede={m.intro.lede}>
        <BookButton c={c} variant="accent" />
        <a href="#jak-pracujemy" className="btn btn--ghost-light">
          {m.actions.more}
        </a>
      </PageHead>

      <section className="section">
        <div className="wrap">
          <ExplainerBlock e={m.explain} />
          <CompareBlock c={m.compare} />
        </div>
      </section>

      <section className="section section--dusk">
        <div className="wrap split">
          <h2>{m.program.name}</h2>
          <div className="stack">
            {m.program.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="cta-row" style={{ marginTop: 28 }}>
              <BookButton c={c} variant="accent" />
              <span className="cta-note">{c.cta.bookNote}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--lavender section--tight">
        <div className="wrap split">
          <h2>{m.ceo.title}</h2>
          <div className="stack">
            {m.ceo.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading>{m.areas.title}</SectionHeading>
          <IconItems items={m.areas.items} />
        </div>
      </section>

      <section className="section section--lavender section--tight">
        <div className="wrap split">
          <SectionHeading>{m.forWhom.title}</SectionHeading>
          <Bullets points={m.forWhom.points} />
        </div>
      </section>

      <section className="section">
        <div className="wrap stack">
          <SectionHeading>{m.benefits.title}</SectionHeading>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={m.benefits.items} />
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap stack">
          <SectionHeading>{m.tools.title}</SectionHeading>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={m.tools.items} />
          </div>
        </div>
      </section>

      <section className="section" id="jak-pracujemy">
        <div className="wrap split">
          <SectionHeading>{m.steps.title}</SectionHeading>
          <Steps items={m.steps.items} />
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap split split--center">
          <Photo src="/images/portret3.webp" alt={c.about.portraitAlt} shape="tall" />
          <div className="stack">
            <h2>{m.mentor.title}</h2>
            <span className="accent-bar" />
            {m.mentor.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div style={{ marginTop: 12 }}>
              <Bullets points={m.mentor.points} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack">
          <SectionHeading>{m.academic.title}</SectionHeading>
          <p className="section-lede">{m.academic.body}</p>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={m.academic.items} />
          </div>
        </div>
      </section>

      <section className="section section--dusk">
        <div className="wrap">
          <div className="section-head">
            <h2>{m.testimonialsTitle}</h2>
          </div>
          <Quotes items={c.testimonials} />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <SectionHeading>{m.faq.title}</SectionHeading>
          <FaqList items={m.faq.items} />
        </div>
      </section>

      <section className="section section--lavender section--tight">
        <div className="wrap split">
          <h2>{m.boundary.title}</h2>
          <p>{m.boundary.body}</p>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
