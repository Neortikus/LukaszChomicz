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
      <PageHead trail="yellow" title={b.intro.title} lede={b.intro.lede} />

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div className="stack">
            <SectionHeading>{b.coauthored.title}</SectionHeading>
            <p>{b.coauthored.body}</p>
            <a className="btn btn--ghost" href={mailto(b.coauthored.order)} style={{ marginTop: 24 }}>
              {b.coauthored.order}
            </a>
          </div>
          <ul className="book-titles">
            {b.coauthored.titles.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--mist">
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
