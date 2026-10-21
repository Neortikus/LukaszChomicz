import type { AppPathname } from "@/i18n/routing";

/** Colours of Polish mountain trail markings. Each area of work has its own trail. */
export type Trail = "red" | "blue" | "green" | "yellow" | "black";

export type NavItem = { href: AppPathname; label: string };

export type SignpostArm = {
  href: AppPathname;
  trail: Trail;
  label: string;
  detail: string;
};

export type Item = { title: string; body: string; note?: string };

export type Step = { title: string; body: string };

export type PageIntro = { title: string; lede: string };

export type Content = {
  meta: { title: string; description: string };
  nav: {
    items: NavItem[];
    home: string;
    menu: string;
    langLabel: string;
    langName: string;
  };
  cta: {
    book: string;
    bookNote: string;
    write: string;
    bandTitle: string;
    bandBody: string;
  };
  home: {
    name: string;
    title: string;
    lede: string;
    signpostLabel: string;
    coursesLink: string;
    arms: SignpostArm[];
    origin: { title: string; body: string[]; facts: { value: string; label: string }[] };
    mentoring: { title: string; body: string; link: string };
    training: { title: string; body: string; link: string };
    speaking: { title: string; body: string; link: string };
    books: { title: string; body: string; link: string };
    linkaris: { title: string; body: string; link: string };
  };
  mentoring: {
    intro: PageIntro;
    program: { name: string; body: string[] };
    forWhom: { title: string; points: string[] };
    tools: { title: string; items: Item[] };
    steps: { title: string; items: Step[] };
    boundary: { title: string; body: string };
  };
  training: {
    intro: PageIntro;
    programs: { title: string; items: Item[] };
    custom: { title: string; body: string; topics: string[] };
    process: { title: string; items: Step[] };
    funding: { title: string; body: string };
  };
  speaking: {
    intro: PageIntro;
    topics: { title: string; items: Item[] };
    moderation: { title: string; body: string };
    credentials: { title: string; points: string[] };
  };
  books: {
    intro: PageIntro;
    coauthored: { title: string; body: string; titles: string[]; order: string };
    ebooks: { title: string; body: string; items: Item[] };
  };
  courses: {
    intro: PageIntro;
    free: { title: string; items: Item[] };
    online: { title: string; body: string; action: string };
    outdoor: { title: string; items: Item[] };
  };
  linkaris: {
    intro: PageIntro;
    body: string[];
    offer: { title: string; items: Item[] };
    company: { title: string; rows: { label: string; value: string }[] };
  };
  about: {
    intro: PageIntro;
    story: string[];
    timeline: { title: string; items: Step[] };
    outside: { title: string; body: string };
    portraitAlt: string;
  };
  contact: {
    intro: PageIntro;
    calendar: { title: string; body: string };
    direct: { title: string; phone: string; email: string };
    social: { title: string };
    company: string;
  };
  footer: { tagline: string; rights: string; social: string };
  status: { soon: string; inProgress: string; free: string };
};
