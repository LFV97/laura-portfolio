import { useState } from "react";
import projectsData from "../../../constants/projectsData";
import ProjectSlot from "./ProjectSlot";
import "../../../styles/tailwind.css";

export default function Projects() {
    const [expandedId, setExpandedId] = useState(null); // Estado para el proyecto expandido

    const handleExpand = (id) => {
      setExpandedId(expandedId === id ? null : id); // Si está expandido, lo colapsa
    };
  
    return (
        <div className="projects-container p-6 bg-gray-700 text-white rounded-lg w-full w-full max-w-l mx-auto">
        {projectsData.map((project) => (
          <ProjectSlot 
            key={project.id} 
            project={project} 
            isExpanded={expandedId === project.id} 
            onExpand={() => handleExpand(project.id)} 
          />
        ))}
      </div>
  );
}
