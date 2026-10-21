import { CtaBand, PageHead, Portrait, SectionHeading, Steps } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/o-mnie", (c) => ({
    title: c.about.intro.title,
    description: c.about.intro.lede,
  }));

export default async function AboutPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const a = c.about;
  return (
    <>
      <PageHead title={a.intro.title} lede={a.intro.lede} />

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <Portrait alt={a.portraitAlt} />
          <div className="stack">
            {a.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap split">
          <SectionHeading>{a.timeline.title}</SectionHeading>
          <Steps items={a.timeline.items} />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>{a.outside.title}</h2>
          <p>{a.outside.body}</p>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
