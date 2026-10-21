import { CtaBand, Items, PageHead, SectionHeading, Steps } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";
import { mailto } from "@/content/site";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/szkolenia", (c) => ({
    title: c.training.intro.title,
    description: c.training.intro.lede,
  }));

export default async function TrainingPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const t = c.training;
  return (
    <>
      <PageHead icon="ludzie" image="/images/scena-6.webp" title={t.intro.title} lede={t.intro.lede} />

      <section className="section section--tight">
        <div className="wrap stack">
          <SectionHeading>{t.programs.title}</SectionHeading>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={t.programs.items} />
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap split">
          <div className="stack">
            <SectionHeading>{t.custom.title}</SectionHeading>
            <p>{t.custom.body}</p>
          </div>
          <ul className="tags">
            {t.custom.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <SectionHeading>{t.process.title}</SectionHeading>
          <Steps items={t.process.items} />
        </div>
      </section>

      <section className="section section--lavender section--tight">
        <div className="wrap split">
          <h2>{t.funding.title}</h2>
          <div className="stack">
            <p>{t.funding.body}</p>
            <a className="text-link" href={mailto(t.funding.mailSubject)}>
              {c.cta.write}
            </a>
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
