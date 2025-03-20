import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa"; 
import useStore from "../../store";
import "../../App.css";

export default function RpgMenu({ currentSection, setSection }) {
  const { t } = useTranslation();
  const { setTheme, toggleLanguage } = useStore();
  
  const menuItems = [
    { id: "lore", label: t("menu.lore"), icon: "📖" },
    { id: "skills", label: t("menu.skills"), icon: "🛡️" },
    { id: "resume", label: t("menu.resume"), icon: "📄" },
    { id: "projects", label: t("menu.projects"), icon: "🔥" },
    { id: "contact", label: t("menu.contact"), icon: "📜" },
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(currentSection);

  useEffect(() => {
    setActiveSection(currentSection);
  }, [currentSection]);

  return (
    <div className="relative">
      {/* 📱 Botón de menú en móviles */}
      <button 
        // className="lg:hidden bg-transparent text-white p-3 rounded-md fixed top-[5%] left-[5%] z-50"
        className="xl:hidden bg-transparent text-white p-3 rounded-md fixed top-[5%] left-[5%] z-50"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={24} />
      </button>

      {/* 🔹 Fondo Oscuro (Backdrop) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

     {/* 🖥️ Menú Principal */}
     {/* ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:block`} */}
     <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-950 text-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:-translate-x-0 xl:hidden`}
      >
        {/* ❌ Botón para cerrar el menú en móviles */}
        <button className="absolute top-4 right-4 text-white xl:hidden" onClick={() => setIsOpen(false)}>
          <FaTimes size={24} />
        </button>

        {/* 📌 Secciones del Menú */}
        <div className="mt-10 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSection(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-md hover:bg-gray-700 transition ${
                activeSection === item.id ? "bg-gray-700" : ""
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>

        {/* 🌐 Botones de Cambio de Modo e Idioma */}
        <div className="mt-6 space-y-2">
          <button onClick={() => setTheme("")} className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition">
            {t("changeMode")}
          </button>
          <button onClick={toggleLanguage} className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition">
            {t("language")}
          </button>
        </div>
      </div>
    </div>
  );
}
