import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/source-serif-4/opsz.css";
import "@fontsource-variable/source-serif-4/opsz-italic.css";
import "../globals.css";

import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { loadPage, type PageProps } from "@/lib/page";
import { site } from "@/content/site";
import { getContent } from "@/content";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const c = getContent(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: c.meta.title, template: `%s | ${site.name}` },
    description: c.meta.description,
  };
}

export const viewport: Viewport = {
  themeColor: "#16362f",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
} & PageProps) {
  const { locale, c } = await loadPage(params);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <a className="skip-link" href="#main">
            {locale === "pl" ? "Przejdź do treści" : "Skip to content"}
          </a>
          <Header nav={c.nav} />
          <main id="main">{children}</main>
          <Footer c={c} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
