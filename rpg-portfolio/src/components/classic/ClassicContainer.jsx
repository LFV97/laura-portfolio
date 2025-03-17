import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClassicMenu from "./ClassicMenu";
import ClassicProfile from "./ClassicProfile";
import ClassicLore from "./lore/ClassicLore";
import ClassicSkills from "./skills/ClassicSkills";
import ClassicProjects from "./projects/ClassicProjects";
import ClassicResume from "./ClassicResume";
import ClassicContact from "./contact/ClassicContact";
import "./styles/classic.css";

gsap.registerPlugin(ScrollTrigger);

export default function ClassicContainer() {
    const [section, setSection] = useState("lore"); // Por defecto, mostrar Lore
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        // Se asegura de que `darkMode` siempre se refleje en el contenedor
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    useEffect(() => {
        gsap.utils.toArray(".classic-section").forEach((section) => {
            gsap.fromTo(section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }, []);

    return (
        <div className={`classic-container ${darkMode ? "dark-mode" : "light-mode"}`}>
            {/* Navbar fija con el botón de cambio de modo */}
            <ClassicMenu setSection={setSection} darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Contenido dinámico */}
            <div className="content-container">
                <section id="about-me"><ClassicLore /></section>
                <section id="skills"><ClassicSkills /></section>
                <section id="projects"><ClassicProjects /></section>
                <section id="resume"><ClassicResume /></section>
                <section id="contact"><ClassicContact /></section>
            </div>
        </div>
    );
}
