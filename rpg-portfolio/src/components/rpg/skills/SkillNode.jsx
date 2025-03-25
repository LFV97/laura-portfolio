import { useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Text, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import iconMap from "../../../constants/iconMap";

export default function SkillNode({ id, position, name, unlocked, color }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Colores de los grupos principales
  const colors = {
    frontend: "#3299a8",
    backend: "#992929",
    ai: "#46a349",
  };

  // Identificar el grupo del nodo
  const frontendSkills = ["html", "css", "javascript", "react", "bootstrap", "tailwind", "three"];
  const backendSkills = ["java", "spring", "hibernate", "struts2"];
  const aiSkills = ["python", "csharp", "entity", "dotnet", "azure", "dotnet"];

  let nodeGroup = null;
  if (frontendSkills.includes(id)) nodeGroup = "frontend";
  if (backendSkills.includes(id)) nodeGroup = "backend";
  if (aiSkills.includes(id)) nodeGroup = "ai";

  const borderColor = nodeGroup ? colors[nodeGroup] : "#555"; // Si no está en un grupo, gris oscuro

  // Cargar la textura del icono si existe
  const iconPath = iconMap[id] || null;
  const iconTexture = iconPath ? useTexture(iconPath) : null;

  // Animación de escala en hover
  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { tension: 300, friction: 20 },
  });

  const isMainNode = id === "frontend" || id === "backend" || id === "ai";

  return (
    <group position={position}>
      {/* Luz detrás del nodo para generar brillo */}
      {!isMainNode && (
        <pointLight color={borderColor} intensity={hovered ? 2 : 0.7} distance={1.5} position={[0, 0, -0.1]} />
      )}

      {/* Nodo con animación */}
      <animated.mesh
        scale={isMainNode ? [1.3, 1.3, 1.3] : [1, 1, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        {/* Hexágono con color sólido para nodos principales, borde para secundarios */}
        <cylinderGeometry args={[0.35, 0.35, 0.1, 6]} />
        <meshStandardMaterial
          color={isMainNode ? color : "black"}
          transparent
          opacity={unlocked ? 1 : 0.5}
          emissive={borderColor}
          emissiveIntensity={hovered ? 1 : 0.5}
        />

        {/* Aplicar la textura del icono */}
        {iconTexture && (
          <mesh position={[0, -0.06, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.45, 0.45]} />
            <meshBasicMaterial map={iconTexture} transparent />
          </mesh>
        )}
      </animated.mesh>

      {/* Nombre flotante (Tooltip) */}
      {hovered && (
        <Html position={[0, 0.6, 0]} center>
          <div className="bg-black text-white text-xs px-2 py-1 rounded-md shadow-lg border border-white">
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}
