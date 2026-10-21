import { CtaBand, Items, PageHead, SectionHeading } from "@/components/Blocks";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";
import { mailto } from "@/content/site";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/ksiazki", (c) => ({
    title: c.books.intro.title,
    description: c.books.intro.lede,
  }));

export default async function BooksPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const b = c.books;
  return (
    <>
      <PageHead icon="dzialanie" title={b.intro.title} lede={b.intro.lede} />

      <section className="section">
        <div className="wrap">
          <div className="section-head split">
            <SectionHeading>{b.coauthored.title}</SectionHeading>
            <div className="stack">
              <p>{b.coauthored.body}</p>
              <a className="btn btn--ghost" href={mailto(b.coauthored.order)}>
                {b.coauthored.order}
              </a>
            </div>
          </div>
          <ul className="books">
            {b.coauthored.titles.map((t) => (
              <li key={t.title} className="book">
                <div className="book__cover">
                  {t.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={t.image} alt={t.title} loading="lazy" />
                  ) : (
                    <span>{t.title}</span>
                  )}
                </div>
                <h3>{t.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap stack">
          <SectionHeading>{b.ebooks.title}</SectionHeading>
          <p className="muted">{b.ebooks.body}</p>
          <div style={{ marginTop: 32 }}>
            <Items c={c} items={b.ebooks.items} />
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
