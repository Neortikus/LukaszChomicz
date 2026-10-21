import { CtaBand, Items, PageHead, SectionHeading } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/linkaris", (c) => ({
    title: c.linkaris.intro.title,
    description: c.linkaris.intro.lede,
  }));

export default async function LinkarisPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const l = c.linkaris;
  return (
    <>
      <PageHead title={l.intro.title} lede={l.intro.lede} />

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap stack">
          {l.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap stack">
          <SectionHeading>{l.offer.title}</SectionHeading>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={l.offer.items} />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap split">
          <h2>{l.company.title}</h2>
          <dl className="kv">
            {l.company.rows.map((r) => (
              <div key={r.label} style={{ display: "contents" }}>
                <dt>{r.label}</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
