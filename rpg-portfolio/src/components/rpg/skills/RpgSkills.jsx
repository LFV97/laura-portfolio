import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkillNode from "./SkillNode";
import skillData from "../../../constants/SkillData";
import SkillControls from "./SkillControls";
import { useRef } from "react";

function CameraLimits({ controls }) {
  useFrame(() => {
    if (controls.current) {
      const { target } = controls.current;

      // 📌 Restringe los límites de movimiento en pan
      target.x = Math.max(-2.5, Math.min(2.5, target.x)); // 🔹 Límite en X
      target.y = Math.max(0.5, Math.min(3, target.y)); // 🔹 Límite en Y
      target.z = Math.max(-2, Math.min(2, target.z)); // 🔹 Límite en Z

      controls.current.update();
    }
  });

  return null;
}

export default function SkillTree() {
  const controlsRef = useRef();

  return (
    <div className="relative w-full flex justify-center items-center bg-gray-700 rounded-lg">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }} style={{ width: "100%", height: "50vh" }}>
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          minDistance={5}  
          maxDistance={12}
          enablePan={true}  // 🔹 Permite pan, pero restringido por `CameraLimits`
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
          target={[0, 1.5, 0]}
        />

        {/* 📌 Aplica las restricciones de pan */}
        <CameraLimits controls={controlsRef} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Controles de navegación */}
        <SkillControls />

        {/* Renderizar los Skill Nodes */}
        {skillData.map((skill) => (
          <SkillNode key={skill.id} {...skill} />
        ))}
      </Canvas>
    </div>
  );
}
