import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pl", "en"],
  defaultLocale: "pl",
  // Polish lives at the root (/mentoring), English under /en (/en/mentoring).
  localePrefix: "as-needed",
  // Don't bounce Polish visitors with English browsers to /en.
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/mentoring": "/mentoring",
    "/szkolenia": { pl: "/szkolenia", en: "/training" },
    "/wystapienia": { pl: "/wystapienia", en: "/speaking" },
    "/networking-w-gorach": { pl: "/networking-w-gorach", en: "/mountain-networking" },
    "/wydarzenia": { pl: "/wydarzenia", en: "/events" },
    "/ksiazki": { pl: "/ksiazki", en: "/books" },
    "/kursy": { pl: "/kursy", en: "/courses" },
    "/linkaris": "/linkaris",
    "/o-mnie": { pl: "/o-mnie", en: "/about" },
    "/kontakt": { pl: "/kontakt", en: "/contact" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
