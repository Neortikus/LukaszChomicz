import { PageHead } from "@/components/Blocks";
import { LegalDoc } from "@/components/LegalDoc";
import { loadPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = ({ params }: PageProps) =>
  pageMetadata(params, "/regulamin", (c) => ({
    title: c.legal.terms,
    description: c.legal.updated,
  }));

export default async function LegalPage({ params }: PageProps) {
  const { c } = await loadPage(params);
  return (
    <>
      <PageHead title={c.legal.terms} lede={c.legal.updated} />
      <section className="section">
        <div className="wrap">
          {c.legal.note && <p className="legal-note">{c.legal.note}</p>}
          <LegalDoc file="regulamin.md" />
        </div>
      </section>
    </>
  );
}
