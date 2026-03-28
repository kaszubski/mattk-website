import type { Translations } from "./en";

export const pl: Translations = {
  // Meta
  siteTitle: "Matt Kaszubski",
  siteDescription:
    "Lead Creative Technologist w Asanie. Buduję wysokowydajne zespoły inżynierskie i systemy, które pozwalają im skalować.",

  // Navigation
  nav: {
    home: "Strona główna",
    about: "O mnie",
    experience: "Doświadczenie",
    writing: "Artykuły",
    contact: "Kontakt",
    skipToContent: "Przejdź do głównej treści",
  },

  // Hero
  hero: {
    greeting: "Cześć, jestem Matt",
    role: "Lead Creative Technologist w Asanie",
    location: "Warszawa, Polska",
    tagline:
      "Buduję wysokowydajne zespoły inżynierskie i systemy, które pozwalają im skalować.",
    cta: {
      writing: "Czytaj moje artykuły",
      contact: "Skontaktuj się",
    },
  },

  // About
  about: {
    title: "O mnie",
    body: [
      "Jestem Lead Creative Technologistem w Asanie w Warszawie, gdzie skupiam się na budowaniu wysokowydajnych zespołów inżynierskich i systemów, które pozwalają im skalować.",
      "Moje doświadczenie obejmuje systemy projektowe, dostępność, creative technology, muzykę i street art — połączenie, które kształtuje moje podejście zarówno do rzemiosła, jak i kultury w inżynierii.",
      "Organizuję społeczność Engineering Leadership Warsaw (ELW) i piszę o przywództwie inżynierskim na Medium.",
    ],
  },

  // Experience
  experience: {
    title: "Doświadczenie",
    roles: [
      {
        company: "Asana",
        title: "Lead Creative Technologist",
        period: "Obecnie",
        location: "Warszawa, Polska",
        description:
          "Budowanie wysokowydajnych zespołów inżynierskich i skalowalnych systemów.",
      },
    ],
  },

  // Writing
  writing: {
    title: "Artykuły",
    subtitle: "Przemyślenia o przywództwie inżynierskim, zespołach i systemach.",
    readOnMedium: "Czytaj na Medium",
    viewAll: "Zobacz wszystkie wpisy",
    posts: [
      {
        slug: "the-goalkeepers-guide-to-em",
        title: "Bramkarski poradnik EM",
        description:
          "Czego zarządzanie inżynierią może nauczyć się od bramkarstwa — pozycjonowanie, antycypacja i pozwolenie zespołowi grać.",
        url: "https://medium.com/@mateuszkaszubski",
      },
      {
        slug: "the-fishing-net-problem",
        title: "Problem sieci rybackiej",
        description:
          "O budowaniu systemów wychwytujących problemy zanim staną się incydentami — i dlaczego większość zespołów łowi wędką.",
        url: "https://medium.com/@mateuszkaszubski",
      },
    ],
  },

  // Contact
  contact: {
    title: "Skontaktuj się",
    body: "Czy chcesz porozmawiać o przywództwie inżynierskim, systemach projektowych czy ELW — chętnie nawiążę kontakt.",
    links: {
      linkedin: "LinkedIn",
      github: "GitHub",
      medium: "Medium",
    },
  },

  // Footer
  footer: {
    builtWith: "Zbudowane z Astro",
    rights: "Wszelkie prawa zastrzeżone",
  },

  // Language switcher
  lang: {
    switchTo: "EN",
    switchLabel: "Switch language to English",
  },
};
