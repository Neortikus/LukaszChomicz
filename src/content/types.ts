import type { AppPathname } from "@/i18n/routing";

/** Line icons from the brand board (Ikony / elementy graficzne). */
export type IconName = "rozwoj" | "kierunek" | "swiadomosc" | "ludzie" | "dzialanie" | "rezultaty";

export type NavItem = { href: AppPathname; label: string };

export type Item = { title: string; body: string; note?: string };

export type Step = { title: string; body: string };

export type PageIntro = { title: string; lede: string };

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

export type Testimonial = { quote: string; name: string; role: string };

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
    pathsTitle: string;
    paths: Path[];
    testimonialsTitle: string;
    eventsTitle: string;
    eventsLink: string;
  };
  testimonials: Testimonial[];
  mentoring: {
    intro: PageIntro;
    program: { name: string; body: string[] };
    forWhom: { title: string; points: string[] };
    tools: { title: string; items: Item[] };
    steps: { title: string; items: Step[] };
    boundary: { title: string; body: string };
  };
  interim: {
    intro: PageIntro;
    when: { title: string; points: string[] };
    what: { title: string; items: Item[] };
    why: { title: string; body: string[] };
    how: { title: string; items: Step[] };
    contact: { title: string; body: string; mailSubject: string };
  };
  training: {
    intro: PageIntro;
    programs: { title: string; items: Item[] };
    custom: { title: string; body: string; topics: string[] };
    process: { title: string; items: Step[] };
    funding: { title: string; body: string; mailSubject: string };
  };
  speaking: {
    intro: PageIntro;
    topics: { title: string; items: Item[] };
    moderation: { title: string; body: string };
    credentials: { title: string; points: string[] };
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
