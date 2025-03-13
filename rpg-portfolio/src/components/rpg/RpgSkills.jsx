import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkillNode from "./SkillNode";
import SkillLines from "./SkillLines";
import skillData from "../../constants/SkillData";
import SkillControls from "./SkillControls";

export default function SkillTree() {
  return (
    <div className="relative w-full flex justify-center items-center bg-gray-900 rounded-lg">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }} style={{ width: "100%", height: "50vh" }}>
      <OrbitControls
        enableZoom={true}  // Permite zoom
        enablePan={true}  // Deshabilita el movimiento de arrastre
        maxPolarAngle={Math.PI / 2}  // Bloquea la cámara para no ver desde atrás
        minPolarAngle={Math.PI / 3}  // Ajusta la inclinación mínima
        maxAzimuthAngle={Math.PI / 4}  // Restringe el giro lateral
        minAzimuthAngle={-Math.PI / 4}  // Restringe el giro lateral
      />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Controles de navegación */}
        <SkillControls />

        {/* Renderizar las conexiones entre nodos */}
        {/* <SkillLines skills={skillData} /> */}

        {/* Renderizar los Skill Nodes */}
        {skillData.map((skill) => (
          <SkillNode key={skill.id} {...skill} />
        ))}
      </Canvas>
    </div>
  );
}



// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text } from "@react-three/drei";
// import { useState } from "react";
// import SkillNode from "./SkillNode";

// // Datos de habilidades organizadas por secciones con estado (bloqueado/desbloqueado)
// const skillTreeData = {
//   frontend: {
//     title: "Frontend",
//     color: "blue",
//     skills: [
//       { name: "HTML", position: [-3, 2, 0], unlocked: true },
//       { name: "CSS", position: [-2, 3, 0], unlocked: true },
//       { name: "JavaScript", position: [-1, 2, 0], unlocked: true },
//       { name: "Bootstrap", position: [-2, 1, 0], unlocked: false },
//       { name: "React", position: [0, 3, 0], unlocked: false },
//       { name: "Angular", position: [1, 2, 0], unlocked: false },
//       { name: "Astro", position: [2, 1, 0], unlocked: false },
//     ],
//   },
//   backend: {
//     title: "Backend",
//     color: "red",
//     skills: [
//       { name: "Java", position: [0, 0, 0], unlocked: true },
//       { name: "Spring", position: [-1, -1, 0], unlocked: false },
//       { name: ".NET C#", position: [1, -1, 0], unlocked: false },
//       { name: "PHP", position: [2, -2, 0], unlocked: false },
//     ],
//   },
//   ai_data: {
//     title: "AI & Data",
//     color: "green",
//     skills: [
//       { name: "Python", position: [3, 0, 0], unlocked: true },
//       { name: "Machine Learning", position: [4, -1, 0], unlocked: false },
//       { name: "C++", position: [5, -2, 0], unlocked: false },
//     ],
//   },
// };

// export default function RpgSkillTree3D() {
//   const [skills, setSkills] = useState(skillTreeData);

//   return (
//     <div className="w-full h-[500px] bg-gray-900 rounded-lg shadow-md">
//       <Canvas camera={{ position: [0, 0, 10] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={1} />

//         {/* Nodos de habilidades */}
//         {Object.values(skills).map((branch) =>
//           branch.skills.map((skill, index) => (
//             <SkillNode key={index} skill={skill} color={branch.color} />
//           ))
//         )}

//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }
