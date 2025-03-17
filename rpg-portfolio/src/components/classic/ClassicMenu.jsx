import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import useStore from "../../store"; // Importamos el estado global
import { useTranslation } from "react-i18next";

export default function ClassicMenu({ setSection, darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const btnRefs = useRef([]); // 🔹 Aseguramos que sea un array
    const { setTheme, toggleLanguage } = useStore(); 
    const { t } = useTranslation();

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            window.location.hash = sectionId;
        }
    };

    // 🟢 Agregamos una verificación para asegurarnos de que hay elementos en el array antes de iterar
    useEffect(() => {
        if (!btnRefs.current.length) return; // 🔹 Previene errores si el array está vacío

        btnRefs.current.forEach((btn) => {
            if (!btn) return;

            gsap.fromTo(
                btn,
                { scale: 1 },
                {
                    scale: 1.1,
                    duration: 0.2,
                    ease: "power1.out",
                    paused: true,
                    reversed: true,
                    onReverseComplete: () => gsap.to(btn, { scale: 1 }),
                }
            );

            const handleMouseEnter = () => gsap.to(btn, { scale: 1.1 });
            const handleMouseLeave = () => gsap.to(btn, { scale: 1 });

            btn.addEventListener("mouseenter", handleMouseEnter);
            btn.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                btn.removeEventListener("mouseenter", handleMouseEnter);
                btn.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full px-6 py-3 flex justify-between items-center z-50 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800 shadow-md"}`}>
            <h1 className="text-2xl font-bold cursor-pointer" onClick={() => handleScroll("lore")}>
                Mi Portfolio
            </h1>

            {/* Menú principal */}
            <ul className="hidden md:flex gap-6">
                {["lore", "skills", "projects", "resume", "contact"].map((section, index) => (
                    <li
                        key={section}
                        ref={(el) => {
                            if (el) btnRefs.current[index] = el;
                        }} // 🔹 Evita asignaciones de `null`
                        className="cursor-pointer flex items-center px-4 py-2 hover:text-orange-500 transition-all duration-300"
                        onClick={() => handleScroll(section)}
                    >
                        {section === "lore" ? "Sobre mí" : section.charAt(0).toUpperCase() + section.slice(1)}
                    </li>
                ))}
               <li>
                    <button onClick={() => setTheme("")} className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
                        {t("menu.changeMode")}
                    </button>
                </li>
                <li>
                    <button onClick={toggleLanguage} className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
                        {t("language")}
                    </button>
                </li>
                <li>
                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </li>
            </ul>

            {/* Menú móvil */}
            <div className="md:hidden">
                <button ref={btnRefs} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Desplegable móvil */}
            {menuOpen && (
                <ul className={`absolute top-14 left-0 w-full flex flex-col items-center gap-4 py-4 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800 shadow-md"}`}>
                    <li className="cursor-pointer flex items-center px-4 py-2 hover:text-orange-500" onClick={() => { handleScroll("about-me"); setMenuOpen(false); }}>Sobre mí</li>
                    <li className="cursor-pointer flex items-center px-4 py-2 hover:text-orange-500" onClick={() => { handleScroll("skills"); setMenuOpen(false); }}>Habilidades</li>
                    <li className="cursor-pointer flex items-center px-4 py-2 hover:text-orange-500" onClick={() => { handleScroll("projects"); setMenuOpen(false); }}>Proyectos</li>
                    <li className="cursor-pointer flex items-center px-4 py-2 hover:text-orange-500" onClick={() => { handleScroll("resume"); setMenuOpen(false); }}>Currículum</li>
                    <li className="cursor-pointer flex items-center px-4 py-2 hover:text-orange-500" onClick={() => { handleScroll("contact"); setMenuOpen(false); }}>Contacto</li>
                    <li>
                {/* 📌 Botones de Cambio de Modo e Idioma */}
                    <button onClick={() => setTheme("")} className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
                        {t("changeMode")}
                    </button>
                    <button onClick={toggleLanguage} className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
                        {t("language")}
                    </button>
                    </li>
                    <li>
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </li>
                </ul>
            )}
        </nav>
    );
}
