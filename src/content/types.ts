import type { AppPathname } from "@/i18n/routing";

/** Line icons from the brand board (Ikony / elementy graficzne). */
export type IconName = "rozwoj" | "kierunek" | "swiadomosc" | "ludzie" | "dzialanie" | "rezultaty";

export type NavItem = { href: AppPathname; label: string };

export type Item = { title: string; body: string; note?: string };

export type Step = { title: string; body: string };

export type Offer = {
  title: string;
  kicker?: string;
  lead: string;
  listTitle: string;
  points: string[];
  note?: { label: string; body: string };
};

export type PageIntro = { title: string; lede: string };

/** A talk topic shown with a photo from an event where it was given. */
export type Talk = { title: string; body: string; image: string; position?: string; where: string };

/** One past appearance: event, when and where, and the role I had there. */
export type Appearance = { event: string; date?: string; place: string; role: string; image: string; position?: string };

export type MediaPhoto = { image: string; caption: string; position?: string };

export type Download = { file: string; preview: string; label: string; size: string };

export type Faq = { q: string; a: string };

/** "What is it and when does it make sense" block: heading plus a few paragraphs. */
export type Explainer = { title: string; body: string[] };

/** Side-by-side comparison of similar services; `active` marks the one this page offers. */
export type Compare = { title: string; items: (Item & { active?: boolean })[]; activeLabel: string };

export type Trail = "red" | "blue" | "green" | "yellow" | "black";

export type SignpostArm = { href: AppPathname; trail: Trail; label: string; detail: string };

export type Path = {
  href: AppPathname;
  icon: IconName;
  image: string;
  title: string;
  body: string;
  link: string;
};

export type Testimonial = { quote: string; name: string; role: string; context?: string };

export type EventInfo = {
  slug: string;
  title: string;
  dates: string;
  place: string;
  lede: string;
  facts: { label: string; value: string }[];
  points: string[];
  cta: { label: string; href: string; external?: boolean };
};

export type Content = {
  meta: { title: string; description: string };
  nav: {
    items: NavItem[];
    more: NavItem[];
    home: string;
    menu: string;
    langLabel: string;
    langName: string;
    skip: string;
  };
  brand: { roles: string; tagline: string; signature: string };
  cta: {
    book: string;
    bookNote: string;
    write: string;
    bandTitle: string;
    bandBody: string;
  };
  home: {
    lede: string;
    stats: { value: string; label: string }[];
    credentialsLabel: string;
    credentials: string[];
    origin: { title: string; body: string[] };
    signpost: { label: string; title: string; body: string; legend: string; summit: string; arms: SignpostArm[] };
    stages: string[];
    railLabel: string;
    pathsTitle: string;
    paths: Path[];
    testimonialsTitle: string;
    eventsTitle: string;
    eventsLink: string;
  };
  testimonials: {
    more: string;
    home: Testimonial[];
    mentoring: Testimonial[];
    speaking: Testimonial[];
    management: Testimonial[];
  };
  mentoring: {
    intro: PageIntro;
    program: { name: string; body: string[] };
    ceo: { title: string; body: string[] };
    forWhom: { title: string; points: string[] };
    tools: { title: string; items: Item[] };
    steps: { title: string; items: Step[] };
    boundary: { title: string; body: string };
    actions: { more: string };
    explain: Explainer;
    compare: Compare;
    benefits: { title: string; items: Item[] };
    mentor: { title: string; body: string[]; points: string[] };
    areas: { title: string; items: (Item & { icon: IconName })[] };
    academic: { title: string; body: string; items: Item[] };
    testimonialsTitle: string;
    faq: { title: string; items: Faq[] };
  };
  interim: {
    intro: PageIntro;
    automation: { title: string; body: string[]; items: Item[] };
    audit: { title: string; body: string[]; action: string; mailSubject: string };
    testimonialsTitle: string;
    explain: Explainer;
    compare: Compare;
    when: { title: string; points: string[] };
    what: { title: string; items: Item[] };
    why: { title: string; body: string[] };
    how: { title: string; items: Step[] };
    contact: { title: string; body: string; mailSubject: string };
  };
  training: {
    intro: PageIntro;
    ask: { label: string; mailSubject: string };
    explain: Explainer;
    signals: { title: string; points: string[] };
    formats: { title: string; items: Item[] };
    programs: { title: string; lede: string; items: Offer[] };
    custom: { title: string; body: string; topics: string[] };
    process: { title: string; items: Step[] };
    funding: { title: string; body: string; mailSubject: string };
  };
  speaking: {
    intro: PageIntro;
    ask: { label: string; mailSubject: string };
    testimonialsTitle: string;
    occasions: { title: string; items: (Item & { icon: IconName })[] };
    process: { title: string; items: Step[] };
    topics: { title: string; items: Talk[] };
    powerSpeech: { title: string; lede: string; items: Offer[] };
    appearances: { title: string; lede: string; items: Appearance[] };
    moderation: { title: string; body: string; points: string[]; image: string; imageAlt: string };
    stages: { title: string; items: string[] };
    credentials: { title: string; points: string[] };
    booking: { title: string; body: string; email: string; phone: string; calendar: string };
  };
  media: {
    intro: PageIntro;
    bio: { title: string; shortLabel: string; short: string; longLabel: string; long: string[]; copy: string; copied: string };
    photos: { title: string; body: string; download: string; items: Download[] };
    gallery: { title: string; body: string; items: MediaPhoto[]; credit: string };
    recordings: { title: string; body: string };
    contact: { title: string; body: string; mailSubject: string };
  };
  networking: {
    intro: PageIntro;
    why: { title: string; body: string[] };
    peaks: { title: string; items: Item[] };
    how: { title: string; items: Step[] };
    join: { title: string; body: string; action: string; mailSubject: string };
  };
  events: {
    intro: PageIntro;
    list: EventInfo[];
    past: { title: string; body: string };
  };
  books: {
    intro: PageIntro;
    coauthored: { title: string; body: string; titles: { title: string; image?: string }[]; order: string };
    ebooks: { title: string; body: string; items: Item[] };
  };
  courses: {
    intro: PageIntro;
    free: { title: string; items: Item[] };
    online: { title: string; body: string; action: string };
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
  footer: { tagline: string; rights: string };
  status: { soon: string; inProgress: string; free: string };
};
