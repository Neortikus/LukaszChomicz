import { BookButton, Bullets, CtaBand, Items, PageHead, SectionHeading, Steps } from "@/components/Blocks";
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
      <PageHead icon="kierunek" image="/images/portret2.webp" title={m.intro.title} lede={m.intro.lede} />

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

      <section className="section">
        <div className="wrap split">
          <SectionHeading>{m.forWhom.title}</SectionHeading>
          <Bullets points={m.forWhom.points} />
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

      <section className="section">
        <div className="wrap split">
          <SectionHeading>{m.steps.title}</SectionHeading>
          <Steps items={m.steps.items} />
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
