import { Bullets, CtaBand, Items, PageHead, Photo, SectionHeading, Steps } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";
import { mailto } from "@/content/site";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/interim-manager", (c) => ({
    title: c.interim.intro.title,
    description: c.interim.intro.lede,
  }));

export default async function InterimPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const m = c.interim;
  return (
    <>
      <PageHead icon="rezultaty" image="/images/portret4.webp" title={m.intro.title} lede={m.intro.lede} />

      <section className="section">
        <div className="wrap split">
          <SectionHeading icon="kierunek">{m.when.title}</SectionHeading>
          <Bullets points={m.when.points} />
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap stack">
          <SectionHeading icon="dzialanie">{m.what.title}</SectionHeading>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={m.what.items} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--center">
          <Photo src="/images/scena-4.webp" alt={c.about.portraitAlt} shape="wide" />
          <div className="stack">
            <h2>{m.why.title}</h2>
            <span className="accent-bar" />
            {m.why.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dusk">
        <div className="wrap split">
          <SectionHeading icon="ludzie">{m.how.title}</SectionHeading>
          <Steps items={m.how.items} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap split split--center">
          <h2>{m.contact.title}</h2>
          <div className="stack">
            <p>{m.contact.body}</p>
            <a className="btn" href={mailto(m.contact.mailSubject)}>
              {c.cta.write}
            </a>
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
