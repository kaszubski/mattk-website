export const en = {
  siteTitle: "Matt Kaszubski",
  siteDescription:
    "Engineering leadership writing by Matt Kaszubski. Lead Creative Technologist at Asana, Warsaw. Organiser of Engineering Leadership Warsaw.",

  nav: {
    writing: "Writing",
    about: "About",
    elw: "ELW",
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
          url: "https://medium.com/@mateuszkaszubski",
          date: "2024",
        },
        {
          title: "The Fishing Net Problem",
          description:
            "On building systems that catch issues before they become incidents — and why most teams fish with a rod.",
          url: "https://medium.com/@mateuszkaszubski",
          date: "2024",
        },
      ],
      allPosts: "All posts on Medium",
      allPostsUrl: "https://medium.com/@mateuszkaszubski",
    },
  },

  writing: {
    title: "Writing",
    description:
      "Essays on engineering leadership, craft, and culture. Published on Medium.",
  },

  about: {
    title: "About",
    narrative: [
      "I grew up thinking I'd do something in music or visual art. I ended up in software — but the thread between those things is tighter than it looks. Most of what I find interesting about engineering leadership has less to do with process frameworks and more to do with craft, taste, and how people work together when things are hard.",
      "I've spent the last several years at Asana in Warsaw, where I lead a team of creative technologists. Before that, my work centred on design systems and accessibility — building the foundations that let other teams move faster.",
      "I started Engineering Leadership Warsaw because I couldn't find a community in Poland focused specifically on the problems engineering leaders face — not just management advice, but the harder questions about technical strategy, culture, and building organisations that last.",
      "I write because it forces me to think more carefully. The pieces I publish on Medium are usually things I've been turning over for months — somewhere between personal essay and field note.",
    ],
    shortBioLabel: "Short bio",
    shortBio:
      "Matt Kaszubski is Lead Creative Technologist at Asana in Warsaw. He writes about engineering leadership on Medium and organises Engineering Leadership Warsaw (ELW).",
    connectLabel: "Find me on",
  },

  footer: {
    builtWith: "Built with Astro",
    rights: "All rights reserved",
  },
} as const;

export type Translations = typeof en;
