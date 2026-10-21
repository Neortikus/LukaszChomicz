import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing, type AppPathname, type Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { getContent } from "@/content";
import { site } from "@/content/site";

export type PageProps = { params: Promise<{ locale: string }> };

/** Validates the locale, enables static rendering and returns the copy for it. */
export async function loadPage(params: PageProps["params"]) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return { locale: locale as Locale, c: getContent(locale) };
}

export async function pageMetadata(
  params: PageProps["params"],
  href: AppPathname,
  pick?: (c: ReturnType<typeof getContent>) => { title: string; description: string },
): Promise<Metadata> {
  const { locale } = await params;
  const c = getContent(locale);
  const { title, description } = pick ? pick(c) : c.meta;
  const url = (l: Locale) => site.url + getPathname({ href, locale: l });
  return {
    title: href === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url(locale as Locale),
      languages: { pl: url("pl"), en: url("en"), "x-default": url("pl") },
    },
    openGraph: {
      title,
      description,
      url: url(locale as Locale),
      siteName: site.name,
      locale: locale === "pl" ? "pl_PL" : "en_GB",
      type: "website",
    },
  };
}
