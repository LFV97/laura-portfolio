import { useState } from "react";
import { useTranslation } from "react-i18next";
import RpgHud from "./RpgHud";
import RpgMenu from "./RpgMenu";
import RpgProfile from "./RpgProfile";
import RpgSkills from "./RpgSkills";
import "../../styles/rpg.css";

export default function RpgContainer() {
    const { t } = useTranslation();
    const [section, setSection] = useState("about");

  return (
    <div className="rpg-container min-h-screen flex flex-col">
      <RpgHud />
      <div className="flex flex-grow">
        <RpgMenu setSection={setSection} />
        <div className="flex-grow p-6">
        <RpgProfile />
          {section === "about" && <div>Aqui va tu información personal</div>}
          {section === "skills" && <RpgSkills />}
          {section === "projects" && <h2>{t("sections.projects")}</h2>}
          {section === "lore" && <h2>{t("sections.lore")}</h2>}
          {section === "resume" && <h2>{t("sections.resume")}</h2>}
        </div>
      </div>
    </div>
  );
}
