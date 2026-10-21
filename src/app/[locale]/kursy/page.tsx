import { CtaBand, Items, PageHead, SectionHeading } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";
import { mailto } from "@/content/site";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/kursy", (c) => ({
    title: c.courses.intro.title,
    description: c.courses.intro.lede,
  }));

export default async function CoursesPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const k = c.courses;
  return (
    <>
      <PageHead trail="black" title={k.intro.title} lede={k.intro.lede} />

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap stack">
          <SectionHeading>{k.free.title}</SectionHeading>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={k.free.items} />
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap split">
          <h2>{k.online.title}</h2>
          <div className="stack">
            <p>{k.online.body}</p>
            <a className="btn btn--ghost" href={mailto(k.online.title)} style={{ marginTop: 20 }}>
              {k.online.action}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack">
          <SectionHeading>{k.outdoor.title}</SectionHeading>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={k.outdoor.items} />
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
