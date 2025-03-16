import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";

// 📜 Datos del CV
const cvData = {
  name: "Laura Frías Viana",
  title: "Maga de la Orden de los Escribas",
  summary: "Desarrolladora Web con experiencia en React, Three.js y más.",
  stats: {
    intelligence: 18,
    wisdom: 16,
    dexterity: 14,
    constitution: 12,
    strength: 8,
    charisma: 10,
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Three.js",
    "Java",
    "SQL",
    "C#",
    "Python",
  ],
  languages: ["Español", "Inglés"],
};

// 📜 Generar PDF con el diseño RPG
const generatePDF = () => {
  const doc = new jsPDF();
  doc.setFont("times", "bold");
  doc.setFontSize(20);
  doc.text(cvData.name, 20, 20);
  doc.setFontSize(16);
  doc.text(cvData.title, 20, 30);
  doc.setFont("times", "normal");
  doc.text(cvData.summary, 20, 40);
  doc.text("📖 Habilidades:", 20, 50);
  doc.text(cvData.skills.join(", "), 20, 60);
  doc.text("🌍 Idiomas:", 20, 70);
  doc.text(cvData.languages.join(", "), 20, 80);
  doc.text("🎲 Estadísticas:", 20, 90);
  let y = 100;
  Object.entries(cvData.stats).forEach(([stat, value]) => {
    doc.text(`${stat.toUpperCase()}: ${value}`, 20, y);
    y += 10;
  });
  doc.save("CV_RPG_Laura.pdf");
};

// 🎨 Componente principal
export default function CVRPG() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold my-4">{cvData.name}</h1>
      <h2 className="text-xl italic text-yellow-400">{cvData.title}</h2>

      {/* 🎲 Espacio 3D */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} />

        {/* 📜 Tarjeta 3D del CV */}
        <mesh
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry args={[3, 4]} />
          <meshStandardMaterial color={hovered ? "goldenrod" : "white"} />
          <Html position={[0, 0, 0.1]} transform>
            <div className="p-4 bg-gray-800 text-white rounded-lg text-center">
              <h2 className="text-lg font-bold">{cvData.title}</h2>
              <p className="text-sm">{cvData.summary}</p>
              <p className="text-xs text-yellow-300">🎲 INT: {cvData.stats.intelligence} | WIS: {cvData.stats.wisdom}</p>
              <p className="text-xs text-yellow-300">🛡️ DEX: {cvData.stats.dexterity} | CON: {cvData.stats.constitution}</p>
            </div>
          </Html>
        </mesh>
      </Canvas>

      {/* 📥 Botón para descargar el CV */}
      <button
        className="mt-6 px-4 py-2 bg-yellow-500 text-black rounded flex items-center gap-2"
        onClick={generatePDF}
      >
        <FaDownload /> Descargar CV
      </button>
    </div>
  );
}
