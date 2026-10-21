import type { Locale } from "@/i18n/routing";
import type { Content } from "./types";
import { pl } from "./pl";
import { en } from "./en";

const content: Record<Locale, Content> = { pl, en };

export function getContent(locale: string): Content {
  return content[locale as Locale] ?? pl;
}

export type { Content } from "./types";
