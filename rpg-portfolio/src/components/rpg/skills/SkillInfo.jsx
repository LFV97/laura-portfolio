import { Html } from "@react-three/drei";

export default function SkillInfo({ skill, visible }) {
  if (!visible) return null;

  return (
    <Html position={skill.position}>
      <div className="bg-black text-white p-2 rounded-md">
        <h3>{skill.name}</h3>
        <p>{skill.unlocked ? "Skill desbloqueada" : "Skill bloqueada"}</p>
      </div>
    </Html>
  );
}
