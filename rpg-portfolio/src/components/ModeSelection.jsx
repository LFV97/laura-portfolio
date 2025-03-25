import { useTranslation } from "react-i18next";
import useStore from "../store";
import Button from "./ui/button";

export default function ModeSelection() {
  const { setTheme, toggleLanguage } = useStore();
  const { t } = useTranslation();

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white text-center px-6">
      <h1 className="text-4xl font-bold mb-6">{t("chooseMode")}</h1>
      
      {/* Contenedor de los modos */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* 🎨 Modo Clásico */}
        <div className="flex flex-col items-center">
          <Button onClick={() => setTheme("classic")} className="px-6 py-3 text-lg">
            {t("classicMode")}
          </Button>
          <p className="mt-2 text-sm text-gray-300 max-w-sm">{t("classicModeDesc")}</p>
        </div>

        {/* Modo RPG */}
        <div className="flex flex-col items-center">
          <Button onClick={() => setTheme("rpg")} className="px-6 py-3 text-lg">
            {t("rpgMode")}
          </Button>
          <p className="mt-2 text-sm text-gray-300 max-w-sm">{t("rpgModeDesc")}</p>
        </div>
      </div>

      {/* Botón de idioma */}
      <Button onClick={toggleLanguage} className="btn-main mt-6 px-4 py-4 rounded-lg">
        {t("language")}
      </Button>
    </div>
  );
}
