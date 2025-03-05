import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import esTranslations from "./locales/es.json";

const userLanguage = localStorage.getItem("portfolioLanguage") || navigator.language.split('-')[0] || "es";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
  },
  lng: userLanguage,
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;



// import { create } from "zustand";
// import i18n from "i18next";
// import { initReactI18next, useTranslation } from "react-i18next";
// import enTranslations from "./locales/en.json";
// import esTranslations from "./locales/es.json";

// // Initialize i18n
// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: enTranslations },
//     es: { translation: esTranslations },
//   },
//   lng: localStorage.getItem("portfolioLanguage") || "es",
//   fallbackLng: "es",
//   interpolation: { escapeValue: false },
// });

// // Zustand store for global state management
// const useStore = create((set) => ({
//   theme: localStorage.getItem("portfolioTheme") || "",
//   setTheme: (newTheme) => {
//     localStorage.setItem("portfolioTheme", newTheme);
//     set({ theme: newTheme });
//   },
//   toggleLanguage: () => {
//     const newLanguage = i18n.language === "es" ? "en" : "es";
//     i18n.changeLanguage(newLanguage);
//     localStorage.setItem("portfolioLanguage", newLanguage);
//   },
// }));
