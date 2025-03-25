import useStore from "../store";
import { useState, useEffect } from "react";
import ClassicContainer from "./classic/ClassicContainer";
import ModeSelection from "./ModeSelection";
import RpgContainer from "./rpg/RpgContainer";
import "../components/classic/styles/classic.css"
import { useTranslation } from "react-i18next";

export default function PortfolioContent() {
  const { theme } = useStore();
  const { t } = useTranslation();
  const [section, setSection] = useState("lore");
  const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
      localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`w-screen min-h-screen flex flex-col items-center justify-start transition-all duration-500 ${
        theme === "rpg"
          ? "bg-gray-950 text-white"
          : theme === "classic"
          ? "full-classic"
          : "bg-gray-800 text-white"
      }`}
    >
      {theme === "" ? (
        <ModeSelection />
      ) : theme === "rpg" ? (
        <RpgContainer />
      ) : (
        <div className="py-8 w-full min-h-screen">
          <ClassicContainer />
        </div>
      )}
    </div>
  );
}