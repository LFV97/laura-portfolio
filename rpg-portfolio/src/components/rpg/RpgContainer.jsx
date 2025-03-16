import { useState } from "react";
import { useTranslation } from "react-i18next";
import RpgHud from "./RpgHud";
import RpgMenu from "./RpgMenu";
import RpgProfile from "./RpgProfile";
import RpgSkills from "./skills/RpgSkills";
import Projects from "./projects/Project";
import Resume from "./resume/Resume";
import Contact from "./contact/SummonContact";
import Lore from "./lore/Lore";
import "../../styles/rpg.css";

export default function RpgContainer() {
    const { t } = useTranslation();
    const [section, setSection] = useState("lore");

  return (
    <div className="rpg-container w-[50%] min-h-screen flex flex-col">
      <RpgHud />
      <div className="flex flex-grow">
        <RpgMenu setSection={setSection} />
        <div className="flex-grow p-6">
        <RpgProfile />
          {section === "skills" && <RpgSkills />}
          {section === "projects" && <Projects />}
          {section === "lore" && <Lore />}
          {section === "resume" && <Resume />}
          {section === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}
