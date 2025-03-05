import { useState } from "react";
import SkillModal from "./SkillModal";

const skillTreeData = {
  frontend: {
    title: "🖌️ Frontend",
    color: "blue",
    skills: [
      { name: "HTML", icon: "📜", position: { x: 50, y: 10 } },
      { name: "CSS", icon: "🎨", position: { x: 30, y: 30 } },
      { name: "JavaScript", icon: "⚡", position: { x: 70, y: 30 } },
      { name: "Bootstrap", icon: "🖌️", position: { x: 30, y: 50 } },
      { name: "React", icon: "🔵", position: { x: 70, y: 50 } },
    ],
    connections: [
      ["HTML", "CSS"],
      ["HTML", "JavaScript"],
      ["CSS", "Bootstrap"],
      ["JavaScript", "React"],
    ],
  },
  backend: {
    title: "⚙️ Backend",
    color: "red",
    skills: [
      { name: "Java", icon: "☕", position: { x: 50, y: 60 } },
      { name: ".NET C#", icon: "🖥️", position: { x: 30, y: 80 } },
      { name: "Python", icon: "🐍", position: { x: 70, y: 80 } },
    ],
    connections: [
      ["Java", ".NET C#"],
      ["Java", "Python"],
    ],
  },
};

export default function RpgSkillTree() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto relative">
      <h2 className="text-2xl font-bold text-yellow-400 text-center">🌳 Árbol de Habilidades</h2>

      <div className="relative w-full h-[400px] flex justify-center items-center">
        {/* Dibujar conexiones entre habilidades */}
        <svg className="absolute w-full h-full">
          {Object.values(skillTreeData).map((branch) =>
            branch.connections.map(([from, to], index) => {
              const fromSkill = branch.skills.find((s) => s.name === from);
              const toSkill = branch.skills.find((s) => s.name === to);
              return (
                <line
                  key={index}
                  x1={`${fromSkill.position.x}%`}
                  y1={`${fromSkill.position.y}%`}
                  x2={`${toSkill.position.x}%`}
                  y2={`${toSkill.position.y}%`}
                  stroke={branch.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              );
            })
          )}
        </svg>

        {/* Dibujar nodos de habilidades */}
        {Object.values(skillTreeData).map((branch) =>
          branch.skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill.name)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-gray-700 text-white text-sm flex items-center gap-2
                border-2 border-${branch.color}-500 hover:bg-${branch.color}-600 hover:scale-110 transition-all`}
              style={{ left: `${skill.position.x}%`, top: `${skill.position.y}%` }}
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </button>
          ))
        )}
      </div>

      {selectedSkill && <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />}
    </div>
  );
}
