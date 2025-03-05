import { useEffect, useState } from "react";
import { create } from "zustand";
import { Button } from "./ui/button";
import useStore from "../store";
import RpgContainer from "./rpg/RpgContainer";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

export default function PortfolioContent() {
  const { theme, setTheme, toggleLanguage } = useStore();
  const { t } = useTranslation();
   
    return (
      <div className={`min-w-screen min-h-screen flex items-center justify-center ${theme === "rpg" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className="absolute top-4 right-4 flex gap-4">
          <Button onClick={() => setTheme("")} className="px-4 py-2 rounded-lg">
            {t("changeMode")}
          </Button>
          <Button onClick={toggleLanguage} className="px-4 py-2 rounded-lg">
            {t("language")}
          </Button>
        </div>
  
        {theme === "rpg" ? (
          <RpgContainer />
        ) : (
          <div className="p-8 text-center">
            <h1 className="text-4xl font-bold">{t("classicMode")}</h1>
            <p className="mt-4">{t("welcomeClassic")}</p>
          </div>
        )}
      </div>
    );
  }