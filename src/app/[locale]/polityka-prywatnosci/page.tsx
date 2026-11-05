import { PageHead } from "@/components/Blocks";
import { LegalDoc } from "@/components/LegalDoc";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/polityka-prywatnosci", (c) => ({
    title: c.legal.privacy,
    description: c.legal.updated,
  }));

export default async function LegalPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  return (
    <>
      <PageHead title={c.legal.privacy} lede={c.legal.updated} />
      <section className="section">
        <div className="wrap">
          {c.legal.note && <p className="legal-note">{c.legal.note}</p>}
          <LegalDoc file="polityka.md" />
        </div>
      </section>
    </>
  );
}
