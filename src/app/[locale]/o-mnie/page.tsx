import { CtaBand, PageHead, Photo, SectionHeading, Steps } from "@/components/Blocks";
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
      <PageHead image="/images/gory-lukasz.webp" title={a.intro.title} lede={a.intro.lede} />

      <section className="section">
        <div className="wrap split">
          <Photo src="/images/portret.webp" alt={a.portraitAlt} shape="tall" />
          <div className="stack">
            {a.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dusk">
        <div className="wrap split">
          <SectionHeading icon="dzialanie">{a.timeline.title}</SectionHeading>
          <Steps items={a.timeline.items} />
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--center">
          <div className="stack">
            <SectionHeading icon="rozwoj">{a.outside.title}</SectionHeading>
            <p>{a.outside.body}</p>
          </div>
          <div className="gallery">
            <Photo src="/images/o-mnie.webp" alt={a.portraitAlt} shape="fill" />
            <Photo src="/images/gory-bieg.webp" alt={a.portraitAlt} shape="fill" />
            <Photo src="/images/gory-lukasz2.webp" alt={a.portraitAlt} shape="fill" />
            <Photo src="/images/toastmasters.webp" alt={a.portraitAlt} shape="fill" />
            <Photo src="/images/wfs-scena.webp" alt={a.portraitAlt} shape="fill" />
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
