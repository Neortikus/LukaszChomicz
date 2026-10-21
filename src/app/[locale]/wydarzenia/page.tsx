import { CtaBand, PageHead } from "@/components/Blocks";
import { EventCard } from "@/components/EventCard";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";
import { mailto } from "@/content/site";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/wydarzenia", (c) => ({
    title: c.events.intro.title,
    description: c.events.intro.lede,
  }));

export default async function EventsPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const e = c.events;
  return (
    <>
      <PageHead icon="rezultaty" image="/images/scena-3.webp" title={e.intro.title} lede={e.intro.lede} />

      <section className="section">
        <div className="wrap">
          <ul className="events">
            {e.list.map((ev) => (
              <EventCard key={ev.slug} e={ev} full />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--lavender section--tight">
        <div className="wrap split split--center">
          <h2>{e.past.title}</h2>
          <div className="stack">
            <p>{e.past.body}</p>
            <a className="btn btn--ghost" href={mailto(e.past.title)}>
              {c.cta.write}
            </a>
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
