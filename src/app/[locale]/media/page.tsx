import { CtaBand, Gallery, PageHead, SectionHeading } from "@/components/Blocks";
import { CopyButton } from "@/components/CopyButton";
import { mailto, site } from "@/content/site";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/media", (c) => ({
    title: c.media.intro.title,
    description: c.media.intro.lede,
  }));

export default async function MediaPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  const m = c.media;
  return (
    <>
      <PageHead icon="swiadomosc" image="/images/ev-tedx-scena.webp" position="65% 30%" title={m.intro.title} lede={m.intro.lede}>
        <a className="btn btn--accent" href={mailto(m.contact.mailSubject)}>
          {c.cta.write}
        </a>
      </PageHead>

      <section className="section section--tight">
        <div className="wrap">
          <SectionHeading>{m.bio.title}</SectionHeading>
          <div style={{ marginTop: 28, maxWidth: 880 }}>
            <div className="bio-card">
              <div className="bio-card__head">
                <h3>{m.bio.shortLabel}</h3>
                <CopyButton text={m.bio.short} label={m.bio.copy} done={m.bio.copied} />
              </div>
              <p>{m.bio.short}</p>
            </div>
            <div className="bio-card">
              <div className="bio-card__head">
                <h3>{m.bio.longLabel}</h3>
                <CopyButton text={m.bio.long.join("\n\n")} label={m.bio.copy} done={m.bio.copied} />
              </div>
              {m.bio.long.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="wrap">
          <SectionHeading>{m.photos.title}</SectionHeading>
          <p className="section-lede">{m.photos.body}</p>
          <ul className="downloads">
            {m.photos.items.map((d) => (
              <li key={d.file}>
                <a href={d.file} download>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.preview} alt={d.label} loading="lazy" />
                  <span>
                    {d.label}, {d.size}
                  </span>
                  <strong>{m.photos.download}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading>{m.gallery.title}</SectionHeading>
          <p className="section-lede">{m.gallery.body}</p>
          <Gallery items={m.gallery.items} />
          <p className="muted" style={{ marginTop: 20, fontSize: "0.85rem" }}>
            {m.gallery.credit}
          </p>
        </div>
      </section>

      <section className="section section--lavender section--tight">
        <div className="wrap split">
          <h2>{m.recordings.title}</h2>
          <p>{m.recordings.body}</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap split">
          <h2>{m.contact.title}</h2>
          <div className="stack">
            <p>{m.contact.body}</p>
            <div className="booking" style={{ marginTop: 8 }}>
              <a href={mailto(m.contact.mailSubject)}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </>
  );
}
