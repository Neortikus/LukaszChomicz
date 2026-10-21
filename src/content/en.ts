import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Łukasz Chomicz - mentoring, training and talks for leaders",
    description:
      "Mentor, trainer and speaker with 20+ years of leading teams in logistics. 1:1 mentoring for managers, training for companies, keynotes and books.",
  },
  nav: {
    items: [
      { href: "/mentoring", label: "Mentoring" },
      { href: "/szkolenia", label: "Training" },
      { href: "/wystapienia", label: "Speaking" },
      { href: "/ksiazki", label: "Books" },
      { href: "/kursy", label: "Courses" },
      { href: "/linkaris", label: "Linkaris" },
      { href: "/o-mnie", label: "About" },
      { href: "/kontakt", label: "Contact" },
    ],
    home: "Home",
    menu: "Menu",
    langLabel: "Przełącz na polski",
    langName: "PL",
  },
  cta: {
    book: "Book a free call",
    bookNote: "30 minutes online. Pick a time that suits you in my calendar.",
    write: "Email me",
    bandTitle: "Let's talk about your team",
    bandBody:
      "The first call is free and comes with no obligation. After 30 minutes you'll know whether and how I can help.",
  },
  home: {
    name: "Łukasz Chomicz",
    title: "Management is simple. Take care of people - the rest is process.",
    lede: "I spent more than 20 years leading teams in logistics. Today, as a mentor, trainer and speaker, I work with managers who have lost the energy for leading, and with companies that want leaders rather than supervisors.",
    signpostLabel: "Choose your trail",
    coursesLink: "See courses and tools",
    arms: [
      { href: "/mentoring", trail: "red", label: "1:1 mentoring", detail: "for managers, 16 weeks" },
      { href: "/szkolenia", trail: "blue", label: "Company training", detail: "workshops for teams and leadership" },
      { href: "/wystapienia", trail: "green", label: "Speaking", detail: "keynotes and event hosting" },
      { href: "/ksiazki", trail: "yellow", label: "Books", detail: "4 co-authored, plus e-books" },
      { href: "/kursy", trail: "black", label: "Courses and tools", detail: "tests, workbooks, retreats" },
    ],
    origin: {
      title: "I led teams before I started teaching it",
      body: [
        "More than 20 years in logistics and courier services, 13 of them in management. I know the Monday when a shift is short-staffed, a client has been calling since six and the board wants its report.",
        "That's the perspective I bring to managers and companies today. No theory detached from operations, and no promise that a leader has to be a superhero.",
      ],
      facts: [
        { value: "20+ years", label: "in logistics and courier services" },
        { value: "13+ years", label: "leading teams" },
        { value: "since 2018", label: "in Toastmasters International, now leading District 108" },
        { value: "4 books", label: "co-authored, including with Brian Tracy" },
      ],
    },
    mentoring: {
      title: "Manager 2.0 - from burnout to influence",
      body: "16 weeks of 1:1 work for managers aged 35-50 who deliver results at the cost of their own energy. We work with my W.I.Z.J.A. method, DISC profiling and Gallup CliftonStrengths.",
      link: "How the programme works",
    },
    training: {
      title: "Training for teams and leadership",
      body: "Communication, accountability, working with talent, delegation and getting things finished. Signature programmes or tailored to a specific team, from a two-hour workshop to a multi-day retreat.",
      link: "See the programmes",
    },
    speaking: {
      title: "Speaking",
      body: "The neuroscience of leadership, strategy on a mountain trail, superpowers in a team. I speak at conferences and company events, and host panels and whole conferences.",
      link: "Talk topics",
    },
    books: {
      title: "Books",
      body: "Co-author of four books on personal development and leadership, including with Brian Tracy. Own e-books on leading in the age of AI and on corporate games are in progress.",
      link: "See the books",
    },
    linkaris: {
      title: "Linkaris is the company behind it",
      body: "A family training and advisory firm I run with my wife. Contracts, invoices and company projects go through Linkaris.",
      link: "About Linkaris",
    },
  },
  mentoring: {
    intro: {
      title: "1:1 mentoring for managers",
      lede: "For leaders who deliver results but have less and less strength to keep it up. We work on you as a leader, not on fixing the company for you.",
    },
    program: {
      name: "Manager 2.0 - from burnout to influence",
      body: [
        "A 16-week individual programme. We meet regularly, between sessions you have specific things to try with your team, and I'm available when something falls apart.",
        "The programme is built on my own W.I.Z.J.A. method, supported by DISC and Gallup CliftonStrengths, so we know from the start which strengths you're building on.",
      ],
    },
    forWhom: {
      title: "Who it's for",
      points: [
        "You're a manager or director, usually 35-50, with several years of leading people behind you.",
        "You do too much yourself because it's faster, and the team waits for your decisions.",
        "The results are there, but they cost you sleep, health or family time.",
        "You feel invisible in the company and don't know what the next career step should be.",
      ],
    },
    tools: {
      title: "What we work with",
      items: [
        { title: "The W.I.Z.J.A. method", body: "My own model for working with leaders, built on years of management and more than thirty mentoring relationships." },
        { title: "DISC", body: "Shows your working and communication style, and how people on your team experience you." },
        { title: "Gallup CliftonStrengths", body: "Points to the talents worth building on, instead of patching weaknesses." },
      ],
    },
    steps: {
      title: "How we start",
      items: [
        { title: "Free call", body: "30 minutes online. We check whether it's the right moment and whether I'm the right person for the job." },
        { title: "Diagnosis", body: "DISC profile, Gallup strengths and a map of what drains your energy today." },
        { title: "16 weeks of 1:1 work", body: "Regular sessions, assignments in between and decisions your team will notice." },
      ],
    },
    boundary: {
      title: "A mentor, not a consultant",
      body: "Mentoring is about how you lead people and yourself. If the company needs its processes sorted out, that's a separate advisory service, and I'll say so plainly on our first call.",
    },
  },
  training: {
    intro: {
      title: "Training for teams and leadership",
      lede: "My workshops run on participants' real situations, not textbook cases. Most often for management teams, departments and multi-generational teams.",
    },
    programs: {
      title: "Signature programmes",
      items: [
        { title: "Talent Algorithm", body: "How to find hidden talents in yourself and your team, and develop them so people do more of what they're good at." },
        { title: "Komunikarium", body: "Communication at work and beyond. Where misunderstandings come from, how to avoid them and how to talk when things get hard." },
        { title: "Superpowers in the team", body: "Everyone on a team has something the others don't. We learn to spot it and organise work to make use of it." },
      ],
    },
    custom: {
      title: "Tailored topics",
      body: "I build the programme around your team, its problems and the time you have. These are the areas we work on most often:",
      topics: [
        "building and leading a team",
        "team communication",
        "accountability and follow-through",
        "getting things finished",
        "delegation",
        "change management",
        "self-management and time",
        "working with talent",
        "setting and reaching goals",
        "public speaking",
      ],
    },
    process: {
      title: "How I prepare a training",
      items: [
        { title: "Needs conversation", body: "With the person ordering the training and, where possible, a few participants. We agree what should change afterwards." },
        { title: "A programme for your team", body: "You get a programme with goals, format and duration. Anything from a two-hour workshop to several days away." },
        { title: "The workshop", body: "Lots of work on participants' own examples, few slides. At your office, in a hotel or online." },
        { title: "Wrap-up", body: "Afterwards you receive conclusions and recommendations for what to do next." },
      ],
    },
    funding: {
      title: "Funding (Poland)",
      body: "Ask about delivering the training through the Polish Development Services Database (BUR). For many companies it's a way to cover part of the cost from public funds.",
    },
  },
  speaking: {
    intro: {
      title: "Speaking and hosting",
      lede: "I speak to managers, business owners and teams. I tell stories from management and from mountain ultramarathons, and each one ends with something the audience can do on Monday.",
    },
    topics: {
      title: "Topics",
      items: [
        { title: "The neuroscience of leadership", body: "How the best leaders design decisions around the way their own brain works. Presented at WFS Diamond 2026, among others." },
        { title: "Strategy and persistence on a mountain trail", body: "Lessons from races in the Beskid mountains: Bieg 7 Dolin, Beskidzki Topór, Babia Góra. About the plan, the crisis mid-race and what it has to do with running a company." },
        { title: "Superpowers in the team", body: "A short, high-energy talk on noticing and using people's strengths in a team." },
        { title: "A talk for your event", body: "I prepare a talk around your conference theme and audience. We start by talking about who will be listening." },
      ],
    },
    moderation: {
      title: "Hosting conferences",
      body: "I moderate panels and host entire industry events, including Self-Storage Summit Poland 2026. I keep time, push for specifics and make sure the room stays awake after lunch.",
    },
    credentials: {
      title: "Why I belong on your stage",
      points: [
        "Certified Professional Speaker (Akademia Zawodowych Mówców).",
        "Toastmasters International member since 2018, now leading District 108.",
        "Talks in Polish and English.",
      ],
    },
  },
  books: {
    intro: {
      title: "Books",
      lede: "I write about personal development, leadership and communication. Some books were written with other authors, some are my own projects.",
    },
    coauthored: {
      title: "Co-authored books",
      body: "I'm a co-author of four books on personal development and leadership, including with Brian Tracy and Sebastian Kotow. Selected titles (in Polish):",
      titles: ["Wiedza Warta Miliony", "Sztuka Inspirowania", "Moc Słów"],
      order: "Order a signed copy",
    },
    ebooks: {
      title: "E-books",
      body: "My own e-books, prepared in Polish and English.",
      items: [
        { title: "The AI Leader", body: "How to lead a team when part of the work is taken over by artificial intelligence.", note: "inProgress" },
        { title: "The Corporate Game", body: "The unwritten rules that decide promotions in large companies.", note: "inProgress" },
        { title: "Hidden Superpower", body: "The 3R method: Reveal, Refine, Release. How to find and use your strongest talent.", note: "inProgress" },
      ],
    },
  },
  courses: {
    intro: {
      title: "Courses and tools",
      lede: "Tools for working on your own and group formats. Some are free, some are still being built.",
    },
    free: {
      title: "To get started",
      items: [
        { title: "Leader Test", body: "15 questions and five leader profiles. Find out which style is driving you today.", note: "soon" },
        { title: "Leader's Front Line", body: "A workbook for managers. It opens with 10 yes/no questions that show where you lose the most energy.", note: "soon" },
        { title: "E-book on procrastination", body: "Three methods for putting things off less. Short and usable right away.", note: "free" },
      ],
    },
    online: {
      title: "Online course",
      body: "The first online course for managers is in the works. Drop me a line and I'll let you know when it launches.",
      action: "Tell me when it launches",
    },
    outdoor: {
      title: "Mountain retreats",
      items: [
        { title: "The CEO decision edge", body: "A three-day workshop retreat for a small group of business owners, in a mountain hotel, with masterminds afterwards." },
        { title: "Networking in the mountains", body: "Entrepreneurs meeting on the trail. Business conversations go better when you're walking uphill." },
      ],
    },
  },
  linkaris: {
    intro: {
      title: "Linkaris",
      lede: "A family training and advisory firm I run with my wife. Company projects are delivered through it.",
    },
    body: [
      "When you book training, leadership mentoring or a talk, the contract is with Linkaris. I run the sessions, and the company takes care of the rest: preparation, logistics and invoicing.",
      "We're based in the Beskid mountains and Silesia, and work across Poland and online.",
    ],
    offer: {
      title: "What we deliver",
      items: [
        { title: "Tailored training", body: "Programmes built for a team, from diagnosis to wrap-up." },
        { title: "Leadership mentoring", body: "Individual work with managers as part of one company project." },
        { title: "Events and retreats", body: "Off-site workshops, masterminds and networking meetings." },
      ],
    },
    company: {
      title: "Company details",
      rows: [
        { label: "Name", value: "Linkaris Sp. z o.o." },
        { label: "Email", value: "biuro@lukaszchomicz.pl" },
        { label: "Phone", value: "+48 781 236 157" },
      ],
    },
  },
  about: {
    intro: {
      title: "About me",
      lede: "A logistics manager who became a mentor. An ultrarunner from the Beskid mountains. Husband and co-owner of a family business.",
    },
    story: [
      "I spent more than 20 years in logistics and courier services, 13 of them as a manager. Before that I sold insurance for seven years, which taught me to listen before I talk.",
      "In the corporate world I learned that people are the hardest part of management, and the leader is the most neglected one. That's why I moved into mentoring and training. I want to show that taking care of a team is the simplest route to a company's goals.",
      "I've been in Toastmasters International since 2018 and now lead District 108, with more than 2,000 members in seven countries. In the Odyssey Project I mentored over 30 people from more than a dozen countries.",
    ],
    timeline: {
      title: "Along the way",
      items: [
        { title: "Insurance", body: "Seven years of direct sales, needs analysis and negotiation." },
        { title: "Logistics and courier services", body: "More than 20 years in the industry, 13 years leading teams." },
        { title: "Toastmasters", body: "Since 2018, now leading District 108." },
        { title: "Mentoring and training", body: "Graduate of the Certified Mentors Academy, certified Professional Speaker, co-founder of Linkaris." },
      ],
    },
    outside: {
      title: "Outside work",
      body: "I run ultramarathons in the Beskid mountains. Bieg 7 Dolin, Beskidzki Topór and the trails around Babia Góra taught me more about planning and crises than many trainings did.",
    },
    portraitAlt: "Łukasz Chomicz",
  },
  contact: {
    intro: {
      title: "Contact",
      lede: "The quickest way is to pick a time for a call in my calendar. You can also phone or email.",
    },
    calendar: {
      title: "Free call",
      body: "30 minutes online. Tell me what you're dealing with and I'll tell you plainly whether and how I can help.",
    },
    direct: { title: "Directly", phone: "Phone", email: "Email" },
    social: { title: "Online" },
    company: "Contracts and invoices: Linkaris Sp. z o.o.",
  },
  footer: {
    tagline: "Mentoring, training and talks for leaders.",
    rights: "All rights reserved.",
    social: "Find me here too",
  },
  status: { soon: "coming soon", inProgress: "in progress", free: "free" },
};
