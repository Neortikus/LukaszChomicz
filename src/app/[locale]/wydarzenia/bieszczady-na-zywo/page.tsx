import { BookButton, PageHead, Photo } from "@/components/Blocks";
import { Link } from "@/i18n/navigation";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

/* Test page: a live report from the Bieszczady retreat, to show a client. Not indexed. */

const T = {
  pl: {
    title: "Bieszczady na żywo",
    lede: "Relacja z wyjazdu „Firma, nie kolejny etat. AI w strategicznym rozwoju przedsiębiorstwa”. Wetlina, 16-19 listopada 2026.",
    badge: "Trwa teraz",
    intro: [
      "Jesteśmy w Wetlinie. Za oknem mgła nad Połoniną, w środku kilku przedsiębiorców i tablica zapisana do ostatniego centymetra.",
      "Na tej stronie na bieżąco pokazujemy, jak wygląda praca na wyjeździe: co robimy każdego dnia i jak wygląda miejsce, w którym się szkolimy.",
    ],
    daysTitle: "Plan i przebieg",
    days: [
      { day: "Dzień 1 · 16 listopada", status: "za nami", items: ["przyjazd i zakwaterowanie w drewnianym domu w górach", "poznanie się grupy i cele na wyjazd", "wspólna kolacja"] },
      { day: "Dzień 2 · 17 listopada", status: "trwa", items: ["analiza firmy i modelu biznesowego uczestników", "narzędzia AI wspierające podejmowanie decyzji", "wieczorem sauna i balia"] },
      { day: "Dzień 3 · 18 listopada", status: "przed nami", items: ["sesje Mastermind na realnych wyzwaniach uczestników", "praca nad planem działania"] },
      { day: "Dzień 4 · 19 listopada", status: "przed nami", items: ["plan działania na najbliższe 90 dni", "podsumowanie i powrót"] },
    ],
    photosTitle: "Zdjęcia z wyjazdu",
    photos: [
      { src: "/images/bieszczady-widok.webp", caption: "Widok z sali, w której pracujemy. Bieszczady w listopadowej mgle." },
      { src: "/images/bieszczady-kolacja.webp", caption: "Pierwszy wieczór: kolacja po dniu w drodze." },
    ],
    nextTitle: "Chcesz pojechać z nami następnym razem?",
    nextBody: "Kolejna edycja odbędzie się w Karkonoszach, 8-11 lutego 2027. Wyjazd możemy też zorganizować dla Twojego zespołu.",
    nextLink: "Zobacz wszystkie wydarzenia",
  },
  en: {
    title: "Bieszczady live",
    lede: "A report from the retreat “A company, not another job. AI in strategic business development”. Wetlina, 16-19 November 2026.",
    badge: "Happening now",
    intro: [
      "We are in Wetlina. Mist over the mountains outside, inside a group of business owners and a whiteboard filled to the last centimetre.",
      "This page shows, as it happens, what the work on the retreat looks like: what we do each day and the place where we train.",
    ],
    daysTitle: "Plan and progress",
    days: [
      { day: "Day 1 · 16 November", status: "done", items: ["arrival and check-in at a wooden house in the mountains", "getting to know the group and goals for the retreat", "dinner together"] },
      { day: "Day 2 · 17 November", status: "now", items: ["analysis of participants' companies and business models", "AI tools that support decision-making", "sauna and hot tub in the evening"] },
      { day: "Day 3 · 18 November", status: "next", items: ["Mastermind sessions on participants' real challenges", "work on the action plan"] },
      { day: "Day 4 · 19 November", status: "next", items: ["action plan for the next 90 days", "wrap-up and travel home"] },
    ],
    photosTitle: "Photos from the retreat",
    photos: [
      { src: "/images/bieszczady-widok.webp", caption: "The view from the room where we work. The Bieszczady in November mist." },
      { src: "/images/bieszczady-kolacja.webp", caption: "First evening: dinner after a day on the road." },
    ],
    nextTitle: "Want to join us next time?",
    nextBody: "The next edition takes place in the Karkonosze mountains, 8-11 February 2027. We can also organise a retreat for your team.",
    nextLink: "See all events",
  },
};

export async function generateMetadata({ params }: PageProps) {
  const base = await pageMetadata(params, "/wydarzenia/bieszczady-na-zywo", (c) => ({
    title: c.nav.skip.startsWith("Przejdź") ? "Bieszczady na żywo" : "Bieszczady live",
    description: "Wetlina, 16-19.11.2026",
  }));
  return { ...base, robots: { index: false, follow: false } };
}

export default async function BieszczadyLive({ params }: PageProps) {
  const { c, locale } = await loadPage(params);
  const t = T[locale === "en" ? "en" : "pl"];
  const isNow = (s: string) => s === "trwa" || s === "now";
  const isDone = (s: string) => s === "za nami" || s === "done";
  return (
    <>
      <PageHead icon="rozwoj" image="/images/bieszczady-widok.webp" position="60% 33%" title={t.title} lede={t.lede}>
        <span className="live-badge">
          <span className="live-dot" aria-hidden="true" />
          {t.badge}
        </span>
      </PageHead>

      <section className="section section--tight">
        <div className="wrap split">
          <h2>{t.daysTitle}</h2>
          <div className="stack">
            {t.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="wrap">
          <ol className="live-days">
            {t.days.map((d) => (
              <li key={d.day} className={isNow(d.status) ? "is-now" : isDone(d.status) ? "is-done" : undefined}>
                <p className="live-days__head">
                  <strong>{d.day}</strong>
                  <span className="live-days__status">
                    {isNow(d.status) && <span className="live-dot" aria-hidden="true" />}
                    {d.status}
                  </span>
                </p>
                <ul>
                  {d.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap">
          <h2>{t.photosTitle}</h2>
          <div className="live-photos">
            {t.photos.map((p) => (
              <figure key={p.src}>
                <Photo src={p.src} alt={p.caption} shape="tall" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap split">
          <h2>{t.nextTitle}</h2>
          <div className="stack">
            <p>{t.nextBody}</p>
            <div className="cta-row">
              <BookButton c={c} variant="accent" />
              <Link href="/wydarzenia" className="text-link">
                {t.nextLink}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
