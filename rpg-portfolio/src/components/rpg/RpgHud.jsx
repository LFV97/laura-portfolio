import { useTranslation } from "react-i18next";

export default function RpgHud() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-gray-800 text-center py-3 shadow-lg">
      <h1 className="text-xl font-bold">{t("hud.title")}</h1>
    </div>
  );
}
