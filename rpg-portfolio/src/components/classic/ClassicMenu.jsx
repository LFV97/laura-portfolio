import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function ClassicMenu({ setSection, darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 w-full px-6 py-3 flex justify-between items-center z-50 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800 shadow-md"}`}>
            <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setSection("lore")}>
                Mi Portfolio
            </h1>

            {/* Menú principal */}
            <ul className="hidden md:flex gap-6">
                <li className="cursor-pointer hover:text-orange-500" onClick={() => setSection("lore")}>Sobre mí</li>
                <li className="cursor-pointer hover:text-orange-500" onClick={() => setSection("skills")}>Habilidades</li>
                <li className="cursor-pointer hover:text-orange-500" onClick={() => setSection("projects")}>Proyectos</li>
                <li className="cursor-pointer hover:text-orange-500" onClick={() => setSection("resume")}>Currículum</li>
                <li className="cursor-pointer hover:text-orange-500" onClick={() => setSection("contact")}>Contacto</li>
                <li>
                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </li>
            </ul>

            {/* Menú móvil */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Desplegable móvil */}
            {menuOpen && (
                <ul className={`absolute top-14 left-0 w-full flex flex-col items-center gap-4 py-4 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800 shadow-md"}`}>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => { setSection("lore"); setMenuOpen(false); }}>Sobre mí</li>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => { setSection("skills"); setMenuOpen(false); }}>Habilidades</li>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => { setSection("projects"); setMenuOpen(false); }}>Proyectos</li>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => { setSection("resume"); setMenuOpen(false); }}>Currículum</li>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => { setSection("contact"); setMenuOpen(false); }}>Contacto</li>
                    <li>
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </li>
                </ul>
            )}
        </nav>
    );
}
