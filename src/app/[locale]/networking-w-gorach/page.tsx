import { CtaBand, Items, PageHead, Photo, SectionHeading, Steps } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";
import { mailto } from "@/content/site";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/networking-w-gorach", (c) => ({
    title: c.networking.intro.title,
    description: c.networking.intro.lede,
  }));

export default async function NetworkingPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const n = c.networking;
  return (
    <>
      <PageHead icon="rozwoj" image="/images/gory-grupa2.webp" title={n.intro.title} lede={n.intro.lede} />

      <section className="section">
        <div className="wrap split split--center">
          <div className="stack">
            <h2>{n.why.title}</h2>
            <span className="accent-bar" />
            {n.why.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="cta-row" style={{ marginTop: 26 }}>
              <a className="btn" href={mailto(n.join.mailSubject)}>
                {n.join.action}
              </a>
            </div>
          </div>
          <div className="gallery">
            <Photo src="/images/gory-grupa.webp" alt={n.intro.title} shape="fill" />
            <Photo src="/images/gory-lukasz.webp" alt={n.intro.title} shape="fill" />
            <Photo src="/images/hero-gory2.webp" alt={n.intro.title} shape="fill" />
            <Photo src="/images/gory-lukasz2.webp" alt={n.intro.title} shape="fill" />
            <Photo src="/images/gory-bieg.webp" alt={n.intro.title} shape="fill" />
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap stack">
          <SectionHeading icon="rezultaty">{n.peaks.title}</SectionHeading>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={n.peaks.items} />
          </div>
        </div>
      </section>

      <section className="section section--dusk">
        <div className="wrap split">
          <SectionHeading icon="dzialanie">{n.how.title}</SectionHeading>
          <Steps items={n.how.items} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap split split--center">
          <h2>{n.join.title}</h2>
          <div className="stack">
            <p>{n.join.body}</p>
            <a className="btn" href={mailto(n.join.mailSubject)}>
              {n.join.action}
            </a>
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
