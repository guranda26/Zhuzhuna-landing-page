import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationKA from "./locales/ka/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ka: {
      translation: translationKA,
    },
  },
  lng: "ka",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
