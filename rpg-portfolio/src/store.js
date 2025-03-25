import { create } from "zustand";
import i18n from "i18next";

const useStore = create((set) => ({
  theme: localStorage.getItem("portfolioTheme") || "",
  setTheme: (newTheme) => {
    localStorage.setItem("portfolioTheme", newTheme);
    set({ theme: newTheme });
  },
  toggleLanguage: () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("portfolioLanguage", newLanguage);
  },
}));

export default useStore;