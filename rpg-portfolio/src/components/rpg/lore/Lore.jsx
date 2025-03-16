import { useState } from "react";
import { FaBook, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Lore() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(null);

  const toggleSection = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const loreSections = [
    {
      title: t("lore.personalityTitle"),
      content: t("lore.personalityContent"),
    },
    {
      title: t("lore.pastryTitle"),
      content: t("lore.pastryContent"),
    },
    {
      title: t("lore.gamesTitle"),
      content: t("lore.gamesContent"),
    },
    {
      title: t("lore.webTitle"),
      content: t("lore.webContent"),
    },
    {
      title: t("lore.experiencesTitle"),
      content: t("lore.experiencesContent"),
    },
    {
      title: t("lore.currentTitle"),
      content: t("lore.currentContent"),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 text-white p-8 rounded-lg shadow-lg border-2 border-yellow-500 relative">
      {/* 📖 Título */}
      <h1 className="text-3xl font-bold text-yellow-400 flex items-center gap-2">
        <FaBook /> {t("lore.title")}
      </h1>

      {/* 📜 Descripción General */}
      {/* <p className="mt-4 text-gray-300">{t("lore.summary")}</p> */}
      <p className="mt-4 text-gray-300">
        {t("lore.summary").split("\\n").map((line, index) => (
            <span key={index}>
            {line}
            <br />
            </span>
        ))}
        </p>

      {/* 📖 Secciones Expansibles */}
      <div className="mt-6 space-y-4">
        {loreSections.map((section, index) => (
          <div key={index} className="border border-yellow-500 rounded-lg p-4">
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center text-left text-yellow-400 font-bold text-lg"
            >
              {section.title}
              {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expanded === index && (
              <p className="mt-2 text-gray-300">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
