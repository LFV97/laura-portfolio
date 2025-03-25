import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import useStore from "../../store";
import Logo from "../../../public/img/logo.png"
import { useTranslation } from "react-i18next";

export default function ClassicMenu({ setSection, darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const btnRefs = useRef([]);
    const { setTheme, toggleLanguage } = useStore(); 
    const { t } = useTranslation();

    const sections = [
        { id: "lore", label: t("menu.lore") },
        { id: "skills", label: t("menu.skills") },
        { id: "projects", label: t("menu.projects") },
        { id: "resume", label: t("menu.resume") },
        { id: "contact", label: t("menu.contact") },
    ];

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            window.location.hash = sectionId;
        }
    };

    // 🟢 Agregamos una verificación para asegurarnos de que hay elementos en el array antes de iterar
    useEffect(() => {
        if (!btnRefs.current.length) return;

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
            <div className="w-15 p-1 cursor-pointer">
                <img src={Logo} alt="logo LFV" />
            </div>

            {/* Menú principal */}
            <ul className="hidden xl:flex gap-6">
            {sections.map((section, index) => (
                    <li
                        key={section.id}
                        ref={(el) => {
                            if (el) btnRefs.current[index] = el;
                        }}
                        className="cursor-pointer flex items-center px-4 py-2 hover:text-orange-500 transition-all duration-300"
                        onClick={() => handleScroll(section.id)}
                    >
                        {section.label}
                    </li>
                ))}
                <li>
                    <button onClick={() => setTheme("")} className="btn-classic px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
                        {t("menuC.changeMode")}
                    </button>
                </li>
                <li>
                    <button onClick={toggleLanguage} className="btn-classic px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
                        {t("menuC.language")}
                    </button>
                </li>
                <li>
                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </li>
            </ul>

            {/* Menú móvil */}
            <div className="absolute top-4 right-8 xl:hidden">
                <button ref={btnRefs} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Desplegable móvil */}
            {menuOpen && (
                <ul className={`absolute top-14 left-0 w-full flex flex-col items-center gap-4 py-4 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800 shadow-md"}`}>
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            className="cursor-pointer flex items-center px-4 py-2 hover:text-orange-500"
                            onClick={() => {
                                handleScroll(section.id);
                                setMenuOpen(false);
                            }}
                        >
                            {section.label}
                        </li>
                    ))}
                    <li>
                        <button onClick={() => setTheme("")} className="btn-classic px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
                            {t("menuC.changeMode")}
                        </button>
                        <button onClick={toggleLanguage} className="btn-classic px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
                            {t("menuC.language")}
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
