export const en = {
  // Meta
  siteTitle: "Matt Kaszubski",
  siteDescription:
    "Lead Creative Technologist at Asana. I build high-performing engineering teams and the systems that let them scale.",

  // Navigation
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    writing: "Writing",
    contact: "Contact",
    skipToContent: "Skip to main content",
  },

  // Hero
  hero: {
    greeting: "Hi, I'm Matt",
    role: "Lead Creative Technologist at Asana",
    location: "Warsaw, Poland",
    tagline:
      "I build high-performing engineering teams and the systems that let them scale.",
    cta: {
      writing: "Read my writing",
      contact: "Get in touch",
    },
  },

  // About
  about: {
    title: "About me",
    body: [
      "I'm a Lead Creative Technologist at Asana in Warsaw, where I focus on building high-performing engineering teams and the systems that let them scale.",
      "My background spans design systems, accessibility, creative technology, music, and street art — a combination that shapes how I think about both craft and culture in engineering.",
      "I organise the Engineering Leadership Warsaw (ELW) community and write about engineering leadership on Medium.",
    ],
  },

  // Experience
  experience: {
    title: "Experience",
    roles: [
      {
        company: "Asana",
        title: "Lead Creative Technologist",
        period: "Present",
        location: "Warsaw, Poland",
        description:
          "Building high-performing engineering teams and scalable systems.",
      },
    ],
  },

  // Writing
  writing: {
    title: "Writing",
    subtitle: "Thoughts on engineering leadership, teams, and systems.",
    readOnMedium: "Read on Medium",
    viewAll: "View all posts",
    posts: [
      {
        slug: "the-goalkeepers-guide-to-em",
        title: "The Goalkeeper's Guide to EM",
        description:
          "What engineering management can learn from goalkeeping — positioning, anticipation, and letting the team play.",
        url: "https://medium.com/@mateuszkaszubski",
      },
      {
        slug: "the-fishing-net-problem",
        title: "The Fishing Net Problem",
        description:
          "On building systems that catch issues before they become incidents — and why most teams fish with a rod.",
        url: "https://medium.com/@mateuszkaszubski",
      },
    ],
  },

  // Contact
  contact: {
    title: "Get in touch",
    body: "Whether you want to talk engineering leadership, design systems, or ELW — I'm happy to connect.",
    links: {
      linkedin: "LinkedIn",
      github: "GitHub",
      medium: "Medium",
    },
  },

  // Footer
  footer: {
    builtWith: "Built with Astro",
    rights: "All rights reserved",
  },

  // Language switcher
  lang: {
    switchTo: "PL",
    switchLabel: "Zmień język na polski",
  },
} as const;

export type Translations = typeof en;
