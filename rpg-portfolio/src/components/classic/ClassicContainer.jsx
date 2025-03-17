import { useState, useEffect } from "react";
import ClassicMenu from "./ClassicMenu";
import ClassicProfile from "./ClassicProfile";
import ClassicLore from "./lore/ClassicLore";
import ClassicSkills from "./skills/ClassicSkills";
import ClassicProjects from "./projects/ClassicProjects";
import ClassicResume from "./ClassicResume";
import ClassicContact from "./contact/ClassicContact";
import "./styles/classic.css";

export default function ClassicContainer() {
    const [section, setSection] = useState("lore"); // Por defecto, mostrar Lore
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        // Se asegura de que `darkMode` siempre se refleje en el contenedor
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <div className={`classic-container ${darkMode ? "dark-mode" : "light-mode"}`}>
            {/* Navbar fija con el botón de cambio de modo */}
            <ClassicMenu setSection={setSection} darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Contenido dinámico */}
            <div className="content-container">
                {section === "lore" && <ClassicLore />}
                {section === "skills" && <ClassicSkills />}
                {section === "projects" && <ClassicProjects />}
                {section === "resume" && <ClassicResume />}
                {section === "contact" && <ClassicContact />}
            </div>
        </div>
    );
}
