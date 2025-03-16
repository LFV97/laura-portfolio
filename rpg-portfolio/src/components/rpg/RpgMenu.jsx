import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa"; 
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
        className="lg:hidden bg-gray-800 text-white p-2 rounded-md fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* 🖥️ Menú Principal */}
      <div className={`lg:block ${isOpen ? "block" : "hidden"} absolute lg:relative top-12 left-0 lg:top-0 lg:left-0 h-full w-48 bg-gray-900 p-4 space-y-4 rounded-lg shadow-md flex flex-col justify-between`}>
        
        {/* Secciones del Menú */}
        <div>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { 
                setActiveSection(item.id);
                setSection(item.id);
                setIsOpen(false);
              }}
              className={`btn ${activeSection === item.id ? "active" : ""}`}
            >
              <span>{item.icon}</span> 
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* 📌 Botones de Cambio de Modo e Idioma */}
        <div className="mt-4 flex flex-col gap-2">
          <button onClick={() => setTheme("")} className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
            {t("changeMode")}
          </button>
          <button onClick={toggleLanguage} className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
            {t("language")}
          </button>
        </div>
      </div>
    </div>
  );
}
