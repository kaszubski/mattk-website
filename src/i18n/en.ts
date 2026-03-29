export const en = {
  siteTitle: "Matt Kaszubski",
  siteDescription:
    "Engineering leadership writing by Matt Kaszubski. Lead Creative Technologist at Asana, Warsaw.",

  nav: {
    writing: "Writing",
    about: "About",
skipToContent: "Skip to main content",
  },

  home: {
    intro:
      "I'm Matt — I lead creative technologists at Asana in Warsaw, write about engineering leadership, and run the Engineering Leadership Warsaw community. My background cuts across design systems, accessibility, music, and street art, which tends to shape how I think about craft and culture in engineering.",

    writing: {
      title: "Writing",
      posts: [
        {
          title: "The Goalkeeper's Guide to EM",
          description:
            "What engineering management can learn from goalkeeping — positioning, anticipation, and letting the team play.",
          url: "/writing/the-goalkeepers-guide/",
          date: "Feb 2026",
        },
        {
          title: "The Fishing Net Problem",
          description:
            "On measuring what actually matters — and why most engineering metrics fish with the wrong net.",
          url: "/writing/the-fishing-net-problem/",
          date: "2025",
        },
      ],
      allPosts: "All writing",
      allPostsUrl: "/writing/",
    },
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
            slug: "the-goalkeepers-guide",
            title: "The Goalkeeper's Guide to Engineering Management",
            description:
              "Decision-making under pressure, committing to choices when your team is watching, and what penalty kicks teach you about engineering management.",
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
      "I grew up thinking I'd do something in music or visual art. I ended up in software — but the thread between those things is tighter than it looks. Most of what I find interesting about engineering leadership has less to do with process frameworks and more to do with craft, taste, and how people work together when things are hard.",
      "I've spent the last several years at Asana in Warsaw, where I lead a team of creative technologists. Before that, my work centred on design systems and accessibility — building the foundations that let other teams move faster.",
      "I write because it forces me to think more carefully. The pieces I publish on Medium are usually things I've been turning over for months — somewhere between personal essay and field note.",
    ],
    shortBioLabel: "Short bio",
    shortBio:
      "Matt Kaszubski is Lead Creative Technologist at Asana in Warsaw. He writes about engineering leadership on Medium.",
    connectLabel: "Find me on",
  },

  footer: {
    builtWith: "Built with Astro",
    rights: "All rights reserved",
  },
} as const;

export type Translations = typeof en;
