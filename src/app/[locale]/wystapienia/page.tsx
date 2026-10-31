import { Appearances, Bullets, CtaBand, IconItems, Offers, PageHead, SectionHeading, StageList, Steps, Talks } from "@/components/Blocks";
import { mailto, site } from "@/content/site";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/wystapienia", (c) => ({
    title: c.speaking.intro.title,
    description: c.speaking.intro.lede,
  }));

export default async function SpeakingPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const s = c.speaking;
  return (
    <>
      <PageHead icon="swiadomosc" image="/images/scena-2.webp" position="70% 30%" title={s.intro.title} lede={s.intro.lede}>
        <a className="btn btn--accent" href={mailto(s.ask.mailSubject)}>
          {s.ask.label}
        </a>
      </PageHead>

      <section className="section section--tight">
        <div className="wrap">
          <SectionHeading>{s.topics.title}</SectionHeading>
          <Talks items={s.topics.items} />
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap">
          <SectionHeading>{s.occasions.title}</SectionHeading>
          <IconItems items={s.occasions.items} compact />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading>{s.powerSpeech.title}</SectionHeading>
          <p className="section-lede">{s.powerSpeech.lede}</p>
          <Offers items={s.powerSpeech.items} />
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap">
          <SectionHeading>{s.appearances.title}</SectionHeading>
          <p className="section-lede">{s.appearances.lede}</p>
          <Appearances items={s.appearances.items} />
          <div style={{ marginTop: 44 }}>
            <StageList title={s.stages.title} items={s.stages.items} />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap split">
          <h2>{s.moderation.title}</h2>
          <p>{s.moderation.body}</p>
        </div>
      </section>

      <section className="section section--dusk">
        <div className="wrap split">
          <SectionHeading>{s.process.title}</SectionHeading>
          <Steps items={s.process.items} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap split">
          <SectionHeading>{s.credentials.title}</SectionHeading>
          <Bullets points={s.credentials.points} />
        </div>
      </section>

      <section className="section section--lavender section--tight" id="rezerwacja">
        <div className="wrap">
          <h2>{s.booking.title}</h2>
          <p className="section-lede">{s.booking.body}</p>
          <div className="booking">
            <div>
              <small>{s.booking.email}</small>
              <a href={mailto(s.ask.mailSubject)}>{site.email}</a>
            </div>
            <div>
              <small>{s.booking.phone}</small>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
            <div>
              <small>{s.booking.calendar}</small>
              <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                {c.cta.book}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
