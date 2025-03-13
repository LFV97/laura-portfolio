import { useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Text, Html, useTexture } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import iconMap from "../../constants/iconMap";

export default function SkillNode({ id, position, name, unlocked, color }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // 🎨 Colores de los grupos principales
  const colors = {
    frontend: "#3299a8",
    backend: "#992929",
    ai: "#46a349",
  };

  // 📌 Identificar el grupo del nodo
  const nodeGroup = id.includes("html") || id.includes("css") || id.includes("javascript") ? "frontend"
  : id.includes("java") || id.includes("spring") || id.includes("hibernate") ? "backend"
  : id.includes("python") || id.includes("csharp") ? "ai"
  : null;

  const borderColor = nodeGroup ? colors[nodeGroup] : "gray"; // Color del borde según grupo


  // // Mapeo de información adicional para los modales
  // const skillDetails = {
  //   css: ["Bootstrap", "TailwindCSS"],
  //   javascript: ["React", "Three.js"],
  //   java: ["Spring", "Hibernate", "Struts2"],
  //   csharp: [".NET", "Entity Framework"],
  // };

  // Verifica si el id existe en iconMap, si no usa un icono por defecto
  const iconPath = iconMap[id] || "/icons/default.png"; // Usa un ícono por defecto si falta
  const iconTexture = iconPath ? useTexture(iconPath) : null;
  
  // ✨ Animación de escala en hover
  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { tension: 300, friction: 20 },
  });

  // // 📜 Efecto de fade-in en el modal
  // const modalSpring = useSpring({
  //   opacity: clicked ? 1 : 0,
  //   scale: clicked ? 1 : 0.8,
  //   config: { duration: 200 },
  // });
  
  const isMainNode = id === "frontend" || id === "backend" || id === "ai";
  return (
    <group position={position}>
      {/* Nodo con animación */}

      <animated.mesh
        scale={isMainNode ? [1.3, 1.3, 1.3] : [1, 1, 1]}  // Aumenta tamaño de los principales
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >

      {/* 🟡 Hexágono con borde difuminado */}
      <cylinderGeometry args={[0.35, 0.35, 0.1, 6]} />
        <shaderMaterial
          attach="material"
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            borderColor: { value: new THREE.Color(borderColor) },
            opacity: { value: unlocked ? 1 : 0.5 },
          }}
        />

        {/* 🟡 Hexágono con borde difuminado */}
      {/* <cylinderGeometry args={[0.35, 0.35, 0.1, 6]} />
        <meshStandardMaterial
          color={color} // Fondo negro
          transparent
          opacity={unlocked ? 1 : 0.5}
          emissive={borderColor} // Color de borde difuminado
          emissiveIntensity={hovered ? 1 : 0.3}
        /> */}

      {/* <cylinderGeometry args={[0.35, 0.35, 0.1, 6]} /> */}
      {/* <meshStandardMaterial color={unlocked ? color : "gray"} /> */}

       {/* Aplicar la textura del icono */}
       {iconTexture && (
        <mesh position={[0, -0.06, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.45, 0.45]} />
          <meshBasicMaterial map={iconTexture} transparent />
        </mesh>
      )}
      </animated.mesh>

      {/* 🔖 Nombre flotante (Tooltip) */}
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


// 🎭 **Vertex Shader (Mantiene la geometría)**
const vertexShader = `
  varying vec3 vPosition;
  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// ⚡ **Fragment Shader (Efecto de borde difuminado)**
const fragmentShader = `
  uniform vec3 borderColor;
  uniform float opacity;
  varying vec3 vPosition;

  void main() {
    float edgeFactor = smoothstep(0.3, 0.5, length(vPosition.xy)); 
    vec3 finalColor = mix(vec3(0.0), borderColor, edgeFactor);
    gl_FragColor = vec4(finalColor, opacity);
  }
`;





{/* Modal al hacer click */}
    {/* {clicked && (
        <Html position={[0, 1.5, 0]} center>
          <a.div
            style={{
              opacity: modalSpring.opacity,
              transform: modalSpring.scale.to((s) => `scale(${s})`),
            }}
            className="bg-black text-white text-sm p-3 rounded-md shadow-lg border border-white w-40"
          >
            <h3 className="text-lg font-bold">{name}</h3>
            {skillDetails[id] ? (
              <ul className="mt-2 list-disc list-inside">
                {skillDetails[id].map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2">No hay información adicional</p>
            )}
            <button
              className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => setClicked(false)}
            >
              Cerrar
            </button>
          </a.div>
        </Html>
      )} */}