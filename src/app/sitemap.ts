import type { MetadataRoute } from "next";
import { routing, type AppPathname } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = Object.keys(routing.pathnames) as AppPathname[];
  return paths.map((href) => ({
    url: site.url + getPathname({ href, locale: "pl" }),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, site.url + getPathname({ href, locale: l })]),
      ),
    },
  }));
}
