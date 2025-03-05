import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function RpgMenu({ setSection }) {
  const { t } = useTranslation();
  const menuItems = [
    { id: "about", label: t("menu.about") },
    { id: "lore", label: t("menu.lore") },
    { id: "skills", label: t("menu.skills") },
    { id: "resume", label: t("menu.resume") },
    { id: "projects", label: t("menu.projects") },
  ];
  
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="w-48 bg-gray-800 p-4 space-y-4">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => { setActiveSection(item.id); setSection(item.id); }}
          className={`block w-full text-left px-4 py-2 rounded ${
            activeSection === item.id ? "bg-yellow-500" : "hover:bg-gray-700"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
