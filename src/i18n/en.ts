export const en = {
  siteTitle: "Matt Kaszubski",
  siteDescription:
    "Engineering leadership writing by Matt Kaszubski. Engineering Leader in Warsaw — building teams, shipping globally, enabling AI.",

  nav: {
    writing: "Writing",
    about: "About",
    skipToContent: "Skip to main content",
  },

  home: {
    intro:
      "I took Digital Engineering from zero to a function that ships daily alongside San Francisco, New York, and Dublin.",
    introWriting:
      "I write about what leadership gets wrong: metrics that hide the real story, checklists that save launches, and why commitment beats being right.",
  },

  writing: {
    title: "Writing",
    description:
      "Essays on engineering leadership, craft, and culture.",
    sectionLabels: {
      leadership: "Leadership",
      coding: "Coding",
    },
    readOnMedium: "Read on Medium",
    allPostsOnMedium: "All posts on Medium",
    allPostsUrl: "https://medium.com/@matt.kaszubski",
  },

  about: {
    title: "About",
    pageLabel: "About",
    headline: "Matt Kaszubski",
    tagline:
      "Engineering Leader, Warsaw — building teams, mentoring across functions, and finding what the dashboard hides.",
    narrative: [
      "Your metrics are hiding your best work. I build the teams and systems that find what's missing—the handoffs, the early warnings, and the impact nobody put a KPI on yet.",
      "I've spent over a decade in software—starting as an IC shipping fintech trading platforms, framework-agnostic design systems, and greenfield React apps, then moving into technical leadership and management. The transition was fast, but I never stopped writing code. Even now as an EM I stay hands-on, because I know what good engineering looks like and I can tell when a technical problem is actually a people problem wearing a ticket as a disguise.",
      "Along the way I've led and mentored engineers across companies like HSBC, Dyson, and Asana—from pair-programming with juniors to coaching Tech Leads who don't report to me. The common thread: distributed leadership scales faster than org charts. I've built hiring bars, shaped team culture, and owned technical vision in orgs where ownership isn't a buzzword but a hiring criterion.",
      "Currently I'm building Digital Engineering at Asana in Warsaw, shipping daily alongside partners in San Francisco, New York, and Dublin. I also run employer brand for our Warsaw office—campaigns, events, and the stories we tell candidates—which means I regularly coach people across functions.",
      "I lead with Blanchard SLII because managing everyone the same way is lazy and it burns people out. Some engineers need structure. Some need support. Some need you to get out of the way. The skill is reading which—fast.",
      "Right now I'm focused on AI enablement—not the hype version, but the practical one: building frameworks so my team actually adopts AI tools in their daily workflows and we can measure the impact honestly, with the same instinct that started this page: knowing what's really happening, not only what's on the dashboard.",
    ],
    timeline: [
      {
        company: "Asana",
        role: "Engineering Leader / Lead Creative Technologist",
        type: "em" as const,
        period: "Apr 2025 – present",
        description: "Building Digital Engineering in Warsaw from zero; own technical vision, hiring bar, and team culture across four time zones.",
      },
      {
        company: "Sii Poland → HSBC",
        role: "Senior Software Engineer",
        type: "tlm" as const,
        period: "Sep 2021 – Mar 2025",
        description: "Led squad of 5 engineers; drove architecture decisions, mentored juniors toward independent delivery. Built framework-agnostic component library.",
      },
      {
        company: "Mindtree → Dyson",
        role: "Senior Software Engineer",
        type: "ic" as const,
        period: "Sep 2020 – Aug 2021",
        description: "Owned JavaScript-to-Vue migration for production web store.",
      },
      {
        company: "Amartus",
        role: "Software Design Engineer",
        type: "ic" as const,
        period: "May 2020 – Jul 2020",
        description: "Delivered responsive captive portal for enterprise Wi-Fi provider.",
      },
      {
        company: "IG",
        role: "Front-end Developer Trainee → Associate Developer",
        type: "ic" as const,
        period: "Jul 2018 – Apr 2020",
        description: "AngularJS → React modernization for trading platform serving millions of users.",
      },
    ],
    timelineLabel: "Career Arc",
    timelineIcLabel: "IC",
    timelineTlmLabel: "TLM",
    timelineEmLabel: "EM",
    featuredWritingIntro:
      "I write about pressure, judgment calls, and what we measure wrong. Start with these:",
    featuredWritingSlugs: [
      "which-goalkeeper-are-you",
      "the-goalkeepers-guide",
      "the-fishing-net-problem",
      "the-checklist-origin-story",
    ] as const,
    featuredWritingSectionLabel: "Essays",
    allWritingLabel: "All writing",
    closingLead:
      "Scaling a distributed team? Rethinking how you measure impact? Figuring out the IC-to-EM transition?",
    closingCtaLabel: "Message me on LinkedIn",
    closingCtaHref: "https://www.linkedin.com/in/kaszubski/",
    shortBioLabel: "Short bio",
    shortBio:
      "Matt Kaszubski is an Engineering Leader in Warsaw with a decade across fintech, consumer electronics, and SaaS — currently building Digital Engineering at Asana. He mentors across functions, builds distributed teams, and writes about engineering leadership on this site and on Medium.",
    connectLabel: "Find me on",
  },

  footer: {
    builtWith: "Built with Astro",
    rights: "All rights reserved",
  },
} as const;

export type Translations = typeof en;
