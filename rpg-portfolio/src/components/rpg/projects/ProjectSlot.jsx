import { useTranslation } from "react-i18next";

export default function ProjectSlot({ project, isExpanded, onExpand }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div 
  className={`mx-auto relative flex flex-col md:flex-row items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md border-2 border-gray-600 hover:border-yellow-500 transition-all duration-300 w-full max-w-3xl cursor-pointer ${
    isExpanded ? "scale-105 p-6 border-yellow-500" : ""
  }`}
  onClick={onExpand}
>
  {/* 📷 Imagen del Proyecto */}
  <div className="mb-2 md:mb-0">
    <img 
      src={project.image} 
      alt={project.title[lang]} 
      className={`w-24 h-24 rounded-md object-cover border border-gray-700 transition-all mx-auto md:mx-0 ${
        isExpanded ? "w-32 h-32" : ""
      }`} 
    />
  </div>

  {/* 📋 Información del Proyecto */}
  <div className="flex-1 text-center md:text-left">
    <h3 className="text-lg font-bold text-white">{project.title[lang]}</h3>
    <p className="text-sm text-gray-400">{project.date[lang]} - {project.status[lang]}</p>
    <p className="text-gray-300 text-sm">{project.description[lang]}</p>

    {/* 📜 Descripción extendida cuando está expandido */}
    {isExpanded && (
      <p className="mt-2 text-gray-200 text-sm">
        {project.extendedDescription[lang] || t("projects.no_details")}
      </p>
    )}

    <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
      {project.technologies.map((tech, index) => (
        <span key={index} className="bg-gray-700 px-2 py-1 rounded text-gray-300 text-xs">
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* 🔗 Enlace */}
  <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
    {project.link && (
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="link px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition font-bold"
      >
        {t("projects.view_project")}
      </a>
    )}
  </div>
</div>
  );
}
