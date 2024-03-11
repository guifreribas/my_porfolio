import { LANGUAGES, defaultLang } from "./index";

export const routes = ["ca", "es", "en"];

export function getLangFromUrl(url) {
  const [, langPath] = url.pathname.split("/");
  if (Object.keys(LANGUAGES).some((lang) => lang === langPath)) return langPath;
  return defaultLang;
}

export function changeLang(url, lang) {
  const [, ...parts] = url.pathname.split("/");
  if (routes.includes(parts[0])) parts.shift();
  if (lang === defaultLang) return `/${parts.join("/")}`;
  return `/${lang}/${parts.join("/")}`;
}

export function navigateTo(path, lang) {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
