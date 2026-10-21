import "@fontsource-variable/montserrat/wght.css";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource/allura/latin-ext-400.css";
import "@fontsource/allura/latin-400.css";
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
    openGraph: { images: ["/images/hero-gory.webp"] },
  };
}

export const viewport: Viewport = {
  themeColor: "#211d29",
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode } & PageProps) {
  const { locale, c } = await loadPage(params);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <a className="skip-link" href="#main">
            {c.nav.skip}
          </a>
          <Header nav={c.nav} book={c.cta.book} />
          <main id="main">{children}</main>
          <Footer c={c} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
