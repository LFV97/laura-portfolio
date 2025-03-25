import { Html } from "@react-three/drei";
import { Line } from "@react-three/drei";
import "../../styles/RpgSkillTree.css"

export default function SkillLines({ skills }) {
  const connections = [
    ["frontend", "html"],
    ["frontend", "css"],
    ["frontend", "javascript"],
    ["javascript", "react"],
    ["css", "bootstrap"],
    ["css", "tailwindcss"],
    ["backend", "java"],
    ["ai", "csharp"],
    ["ai", "cplusplus"],
    ["ai", "python"],
  ];
  
  return (
    <>
      {connections.map(([from, to], index) => {
        const start = skills.find((s) => s.id === from)?.position;
        const end = skills.find((s) => s.id === to)?.position;
      
        return start && end ? (
          <Line key={index} points={[start, end]} color="white" lineWidth={2} />
        ) : null;
      })}
    </>
    )
  }