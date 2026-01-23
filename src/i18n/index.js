import catalan from "./ca.json";
import english from "./en.json";
import spanish from "./es.json";

export const LANGUAGES = {
  ca: catalan,
  en: english,
  es: spanish,
};

export const getI18N = ({ currentLocale = "es" }) => {
  const i18n = LANGUAGES[currentLocale];
  return i18n;
};

export const defaultLang = "es";
