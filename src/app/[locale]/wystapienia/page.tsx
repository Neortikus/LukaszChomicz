import { Bullets, CtaBand, Items, PageHead, SectionHeading } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/wystapienia", (c) => ({
    title: c.speaking.intro.title,
    description: c.speaking.intro.lede,
  }));

export default async function SpeakingPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const s = c.speaking;
  return (
    <>
      <PageHead icon="swiadomosc" image="/images/scena-1.webp" title={s.intro.title} lede={s.intro.lede} />

      <section className="section section--tight">
        <div className="wrap stack">
          <SectionHeading>{s.topics.title}</SectionHeading>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={s.topics.items} />
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap split">
          <h2>{s.moderation.title}</h2>
          <p>{s.moderation.body}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <SectionHeading>{s.credentials.title}</SectionHeading>
          <Bullets points={s.credentials.points} />
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
