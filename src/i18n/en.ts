export const en = {
  siteTitle: "Matt Kaszubski",
  siteDescription:
    "Engineering leadership writing by Matt Kaszubski. Engineering Leader @ Asana — 0→1 Digital Engineering in Warsaw, AI-enabled teams.",

  nav: {
    writing: "Writing",
    about: "About",
skipToContent: "Skip to main content",
  },

  home: {
    intro:
      "I'm Matt — engineering leader at Asana in Warsaw. I took Digital Engineering from zero to a function that ships daily alongside San Francisco, New York, and Dublin.",
    introWriting:
      "I write about what leadership gets wrong: metrics that hide the real story, checklists that save launches, and why commitment beats being right.",
  },

  writing: {
    title: "Writing",
    description:
      "Essays on engineering leadership, craft, and culture.",
    sections: [
      {
        id: "leadership",
        label: "Leadership",
        posts: [
          {
            slug: "which-goalkeeper-are-you",
            title: "The Goalkeeper's Guide to Engineering Management: Which Goalkeeper Are You?",
            description:
              "Kahn, Buffon, Dudek — three ways to lead. The real skill isn't locking into one style forever. It's knowing which one the moment requires.",
            date: "Mar 2026",
            mediumUrl:
              "https://medium.com/@matt.kaszubski/the-goalkeepers-guide-to-engineering-management-which-goalkeeper-are-you-8f1e72a8e466",
          },
          {
            slug: "the-goalkeepers-guide",
            title: "The Goalkeeper's Guide to Engineering Management: The Penalty Kick",
            description:
              "Every engineering manager faces penalty kicks. The question isn't whether you'll dive. It's whether you'll commit.",
            date: "Feb 2026",
            mediumUrl:
              "https://medium.com/@matt.kaszubski/the-goalkeepers-guide-to-engineering-management-the-penalty-kick-be286ce333a9",
          },
          {
            slug: "the-fishing-net-problem",
            title: "The Fishing Net Problem",
            description:
              "What we get wrong about measuring engineering efficiency — Goodhart's Law, DORA metrics, and the survivorship bias baked into most dashboards.",
            date: "2025",
            mediumUrl:
              "https://medium.com/@matt.kaszubski/the-fishing-net-problem-what-we-get-wrong-about-measuring-engineering-efficiency-2d5688047f29",
          },
          {
            slug: "the-checklist-origin-story",
            title: "The Checklist Origin Story",
            description:
              "From Boeing's 1935 crash to CrowdStrike — how aviation's greatest safety innovation became software engineering's most underused tool.",
            date: "2025",
            mediumUrl:
              "https://medium.com/@matt.kaszubski/the-checklist-origin-story-c0e8028bbe45",
          },
        ],
      },
      {
        id: "coding",
        label: "Coding",
        posts: [
          {
            slug: "future-proof-your-code",
            title: "Future-Proof Your Code: Mastering JavaScript Data Grouping",
            description:
              "From forEach loops to Object.groupBy — a practical guide to data grouping in JavaScript with TypeScript-safe implementations.",
            date: "2024",
            mediumUrl:
              "https://medium.com/@matt.kaszubski/future-proof-your-code-mastering-javascript-data-grouping-b4183540b8ad",
          },
          {
            slug: "unlock-the-craic",
            title: "Unlock the Craic: The Konami Code in TypeScript",
            description:
              "How to create a secret easter egg page triggered by the classic Konami Code — keyboard event detection in TypeScript from scratch.",
            date: "2024",
            mediumUrl:
              "https://medium.com/@matt.kaszubski/unlock-the-craic-how-to-create-a-secret-page-with-the-konami-code-in-typescript-455b3123b873",
          },
        ],
      },
    ],
    readOnMedium: "Read on Medium",
    allPostsOnMedium: "All posts on Medium",
    allPostsUrl: "https://medium.com/@matt.kaszubski",
  },

  about: {
    title: "About",
    narrative: [
      "Your metrics are hiding your best work. I build the teams and systems that find what's missing. At Asana, I took Digital Engineering in Warsaw from zero to a fully operational function that ships daily alongside San Francisco, New York, and Dublin. I manage one engineer directly and run regular 1:1s with Tech Leads and engineers across four time zones. I also lead marketing operations for our Warsaw site—coaching teams and individuals across functions without formal hierarchy.",
      "I defined the technical vision, established our hiring bar, and created a team culture where ownership isn't a buzzword—it's the hiring bar. This work has taught me that distributed leadership scales faster than org charts.",
      "Before managing teams, I spent 7+ years as an IC: fintech trading platforms, framework-agnostic design systems, greenfield React applications. I know what good code looks like because I've shipped it under real pressure. That background means I can tell when a technical problem is actually a people problem wearing a ticket as a disguise.",
      "I lead with Blanchard SLII because managing everyone the same way is lazy and it burns people out. Some engineers need structure. Some need support. Some need you to get out of the way. The skill is reading which—fast.",
      "Right now I'm focused on AI enablement—not the hype version, but the practical one: building frameworks so my team actually adopts AI tools in their daily workflows and we can measure the impact honestly.",
      "I write about what engineering leadership gets wrong: The Fishing Net Problem—why your metrics instrument determines what you can see; The Checklist Origin Story—from a 1935 Boeing crash to your next 2am incident; and The Goalkeeper's Guide to EM—why commitment beats correctness.",
      "Scaling a distributed team? Rethinking how you measure impact? Figuring out the IC-to-EM transition? Let's talk.",
    ],
    shortBioLabel: "Short bio",
    shortBio:
      "Matt Kaszubski is Engineering Leader @ Asana—0→1 Digital Engineering in Warsaw and AI-enabled teams. He writes about engineering leadership on Medium.",
    connectLabel: "Find me on",
  },

  footer: {
    builtWith: "Built with Astro",
    rights: "All rights reserved",
  },
} as const;

export type Translations = typeof en;
