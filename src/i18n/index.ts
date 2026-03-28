import { en } from "./en";
import { pl } from "./pl";
import type { Translations } from "./en";

export type { Translations };
export type Locale = "en" | "pl";

export const LOCALES: Locale[] = ["en", "pl"];
export const DEFAULT_LOCALE: Locale = "en";

const translations: Record<Locale, Translations> = { en, pl };

export function useTranslations(locale: Locale): Translations {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, firstSegment] = url.pathname.split("/");
  if (firstSegment === "pl") return "pl";
  return "en";
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return normalizedPath;
  return `/pl${normalizedPath}`;
}

export function getAlternatePath(currentUrl: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(currentUrl);
  let path = currentUrl.pathname;

  if (currentLocale === "pl") {
    path = path.replace(/^\/pl/, "") || "/";
  }

  return getLocalizedPath(path, targetLocale);
}
