import { useTranslation } from "react-i18next";
import useStore from "../store";
import Button from "./ui/button";

export default function ModeSelection() {
  const { setTheme, toggleLanguage } = useStore();
  const { t } = useTranslation();

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6">{t("chooseMode")}</h1>
      <div className="flex gap-4">
        <Button onClick={() => setTheme("classic")} className="px-6 py-3 text-lg">
          {t("classicMode")}
        </Button>
        <Button onClick={() => setTheme("rpg")} className="px-6 py-3 text-lg">
          {t("rpgMode")}
        </Button>
      </div>
      <Button onClick={toggleLanguage} className="btn-main mt-6 px-4 py-4 rounded-lg" style={{marginY: "10px"}}>
        {t("language")}
      </Button>
    </div>
  );
}
