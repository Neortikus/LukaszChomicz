import { BookButton, PageHead } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";
import { site } from "@/content/site";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/kontakt", (c) => ({
    title: c.contact.intro.title,
    description: c.contact.intro.lede,
  }));

export default async function ContactPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const k = c.contact;
  return (
    <>
      <PageHead image="/images/hero-gory2.webp" title={k.intro.title} lede={k.intro.lede} />

      <section className="section">
        <div className="wrap contact-grid">
          <div className="stack">
            <h2>{k.calendar.title}</h2>
            <p>{k.calendar.body}</p>
            <div style={{ marginTop: 22 }}>
              <BookButton c={c} />
            </div>
          </div>
          <div>
            <h2>{k.direct.title}</h2>
            <dl className="kv" style={{ gridTemplateColumns: "1fr" }}>
              <dt>{k.direct.phone}</dt>
              <dd>
                <a className="contact-big" href={site.phoneHref}>
                  {site.phone}
                </a>
              </dd>
              <dt style={{ marginTop: 14 }}>{k.direct.email}</dt>
              <dd>
                <a className="contact-big" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </dl>
          </div>
          <div>
            <h2>{k.social.title}</h2>
            <ul className="bullets">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a className="text-link" href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="muted" style={{ marginTop: 28, fontSize: "1rem" }}>
              {k.company}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
