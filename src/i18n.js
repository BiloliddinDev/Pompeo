import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import langEn from "./locales/en/translation.json";
import langRu from "./locales/ru/translation.json";
import langUz from "./locales/uz/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: langEn,
    },
    ru: {
      translation: langRu,
    },
    uz: {
      translation: langUz,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
