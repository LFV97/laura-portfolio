import { useState } from "react";
import { FaDownload, FaDiceD20, FaScroll } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function RPGCharacterSheet() {
  const { t, i18n } = useTranslation();
  const [cvDownloading, setCvDownloading] = useState(false);
  const [flipped, setFlipped] = useState(null);

  const handleDownload = () => {
    setCvDownloading(true);
    setTimeout(() => {
      setCvDownloading(false);
      const cvFile = i18n.language === "es" ? "../../../lfv_cv_es.pdf" : "../../../lfv_cv_en.pdf";
      window.open(cvFile, "_blank");
    }, 1000);
  };

  const handleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto bg-gray-800 text-white p-8 rounded-lg shadow-lg border-2 border-yellow-500 relative">
      {/* 📜 Nombre y título */}
      <h1 className="text-4xl font-bold text-yellow-400 text-center">
        Laura Frías Viana
      </h1>
      <h2 className="text-lg text-center text-gray-300 italic">
        {t("classTitle")}
      </h2>

      {/* 🔍 Información General */}
      <div className="mt-6 border border-yellow-500 p-4 rounded-lg">
        <h3 className="text-xl font-bold text-yellow-400">{t("generalInfo")}</h3>
        <p><strong>🧙 {t("class")}:</strong> {t("wizard")}</p>
        <p><strong>📜 {t("subclass")}:</strong> {t("scribeOrder")}</p>
        <p><strong>👤 {t("race")}:</strong> {t("human")}</p>
        <p><strong>📈 {t("level")}:</strong> {t("juniorMid")}</p>
        <p><strong>🏗️ {t("background")}:</strong> {t("codeArchitect")}</p>
        <p><strong>⚖️ {t("alignment")}:</strong> {t("neutralGood")}</p>
      </div>

      {/* 📊 Atributos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mt-6">
        {[
          { label: "intelligence", value: 18 },
          { label: "wisdom", value: 16 },
          { label: "dexterity", value: 14 },
          { label: "constitution", value: 12 },
          { label: "strength", value: 2 },
          { label: "charisma", value: 10 }
        ].map((stat, index) => (
          <div
            key={index}
            className={`p-4 border border-yellow-500 rounded-lg transition-all duration-500 cursor-pointer ${
              flipped === index ? "bg-yellow-500 text-gray-900" : ""
            }`}
            onClick={() => handleFlip(index)}
          >
            <p className="text-lg font-bold flex items-center justify-center gap-2">
              <FaDiceD20 /> {t(stat.label)}: {stat.value}
            </p>
            {flipped === index && (
              <p className="text-sm mt-2">{t(`${stat.label}Desc`)}</p>
            )}
          </div>
        ))}
      </div>

      {/* 🏆 Rasgos de Clase */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-yellow-400 text-center">{t("classTraits")}</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <p>{t("structuredCode")}</p>
          <p>{t("fastLearner")}</p>
          <p>{t("repoManager")}</p>
          <p>{t("multiExplorer")}</p>
        </ul>
      </div>

      {/* 📂 Experiencia */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-yellow-400 text-center">{t("experience")}</h3>
        <div className="mt-4 space-y-2">
          {[
            { date: t("seleneDate"), role: "Selene Games", desc: "seleneGames" },
            { date: t("killaDate"), role: "Editorial KillaLibros", desc: "killaLibros" },
            { date: t("ianuaDate"), role: "Ianua Editora", desc: "ianuaEditora" },
            { date: t("tragsaDate"), role: "Tragsatec", desc: "tragsatec" },
            { date: t("medicalDate"), role: "Medical Website", desc: "medicalWebsite" },
            { date: t("nuoDate"), role: "NUO Planet", desc: "nuoPlanet" },
          ].map((exp, index) => (
            <div key={index} className="flex justify-between border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-300">{exp.date}</p>
              <div className="text-end">
                <p className="text-gray-300 italic">{t(exp.desc)}</p>
                <p className="text-gray-400">{exp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* 📜 Certificaciones y Cursos */}
    <div className="mt-6">
      <h3 className="text-xl font-bold text-yellow-400 text-center">{t("certifications")}</h3>
      <div className="mt-4 space-y-2">
        {[
          { date: t("certDateJanApr2025"), cert: t("certAI900") },
          { date: t("certDateAprJul2024"), cert: t("certBackendJava") },
          { date: t("certDateFebMay2024"), cert: t("certUnity3D") },
          { date: t("certDateFebJul2023"), cert: t("certWebDev") },
          { date: t("certDateOct2020Ene2024"), cert: t("certAnimation3D") },
        ].map((cert, index) => (
          <div key={index} className="flex justify-between border-l-4 border-yellow-500 pl-4">
            <p className="text-gray-300">{cert.date}</p>
            <p className="text-gray-400">{cert.cert}</p>
          </div>
        ))}
      </div>
    </div>


      {/* 🛠️ Habilidades Principales */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-yellow-400 text-center">{t("mainSkills")}</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {["frontendDev", "backendDev", "webDesign", "uiUx", "seoOptimization"].map((skill, index) => (
            <div key={index} className="border border-yellow-500 p-3 rounded-lg">
              <p className="text-lg font-bold">{t(skill)}</p>
              <p className="text-sm text-gray-300">{t(`${skill}Desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🛠️ Habilidades Pasivas */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-yellow-400 text-center">{t("passiveSkills")}</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {["teamwork", "fastLearning"].map((skill, index) => (
            <div key={index} className="border border-yellow-500 p-3 rounded-lg">
              <p className="text-lg font-bold">{t(skill)}</p>
              <p className="text-sm text-gray-300">{t(`${skill}Desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 📥 Botón de descarga de CV */}
      <div className="mt-6 text-center">
        <button
          onClick={handleDownload}
          className="bg-yellow-500 text-white mx-auto font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition flex items-center justify-center gap-2"
        >
          <FaDownload />
          {cvDownloading ? t("downloading") : t("downloadCV")}
        </button>
      </div>
    </div>
  );
}



// import { useState } from "react";
// import { FaDownload, FaDiceD20 } from "react-icons/fa";

// export default function RPGCharacterSheet() {
//   const [cvDownloading, setCvDownloading] = useState(false);
//   const [flipped, setFlipped] = useState(null);

//   const handleDownload = () => {
//     setCvDownloading(true);
//     setTimeout(() => {
//       setCvDownloading(false);
//       window.open("/path-to-your-cv.pdf", "_blank");
//     }, 1000);
//   };

//   const handleFlip = (index) => {
//     setFlipped(flipped === index ? null : index);
//   };

//   return (
//     <div className="max-w-5xl mx-auto bg-gray-800 text-white p-8 rounded-lg shadow-lg border-2 border-yellow-500 relative">
//       {/* 📜 Nombre y título */}
//       <h1 className="text-4xl font-bold text-yellow-400 text-center">
//         Laura Frías Viana
//       </h1>
//       <h2 className="text-lg text-center text-gray-300 italic">
//         Maga de la Orden de los Escribas
//       </h2>

//       {/* 📊 Atributos */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mt-6">
//         {[
//           { label: "Intelligence", value: 18, description: "Aprendizaje rápido de nuevas tecnologías y frameworks." },
//           { label: "Wisdom", value: 16, description: "Buen juicio en la toma de decisiones técnicas y arquitectura de código." },
//           { label: "Dexterity", value: 14, description: "Habilidad en CSS, animaciones, UI/UX y diseño responsivo." },
//           { label: "Constitution", value: 12, description: "Capacidad para trabajar bajo presión y optimizar código." },
//           { label: "Strength", value: 8, description: "No levanta servidores físicos, pero sí carga con repositorios pesados. 😆" },
//           { label: "Charisma", value: 10, description: "Comunicación en equipo y presentación de ideas." },
//         ].map((stat, index) => (
//           <div
//             key={index}
//             className={`p-4 border border-yellow-500 rounded-lg transition-all duration-500 cursor-pointer ${
//               flipped === index ? "bg-yellow-500 text-gray-900" : ""
//             }`}
//             onClick={() => handleFlip(index)}
//           >
//             <p className="text-lg font-bold flex items-center justify-center gap-2">
//               <FaDiceD20 /> {stat.label}: {stat.value}
//             </p>
//             {flipped === index && (
//               <p className="text-sm mt-2">{stat.description}</p>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* 🛠️ Habilidades */}
//       <div className="mt-6 text-center">
//         <h3 className="text-xl font-bold text-yellow-400">Habilidades</h3>
//         <p className="text-gray-300">
//           HTML, CSS, JavaScript, React, Three.js, Java, SQL, C#, Python
//         </p>
//       </div>

//       {/* 📖 Grimorio de Hechizos */}
//       <div className="mt-6 text-center">
//         <h3 className="text-xl font-bold text-yellow-400">Grimorio de Hechizos (Stack Tecnológico)</h3>
//         <ul className="text-gray-300 space-y-1">
//           <li>🔹 Trucos: HTML, CSS, JavaScript, React, Bootstrap.</li>
//           <li>🔹 Hechizos de Nivel 1: Three.js, WordPress (Divi), UI/UX, SEO.</li>
//           <li>🔹 Hechizos de Nivel 2: Java, SQL, Hibernate, APIs REST.</li>
//           <li>🔹 Hechizos de Nivel 3: Tailwind, React Three Fiber.</li>
//           {/* <li>🔹 Hechizos de Nivel 4: Automación con Python, maquetación avanzada con XML.</li> */}
//           <li>🔹 Rituales: Diseño editorial con Affinity Publisher.</li>
//         </ul>
//       </div>

//       {/* 📂 Experiencia */}
//       <div className="mt-6">
//         <h3 className="text-xl font-bold text-yellow-400 text-center">Experiencia</h3>
//         <div className="space-y-4 mt-4">
//           {[
//             {
//               date: "2025 - Presente",
//               role: "Mantenimiento y actualización de la web",
//               company: "Selene Games",
//             },
//             {
//               date: "2025",
//               role: "Desarrollo de sitio web en React y Bootstrap",
//               company: "Editorial KillaLibros",
//             },
//             {
//               date: "2024 - En proceso",
//               role: "Rediseño de WordPress (Divi)",
//               company: "Ianua Editora",
//             },
//             {
//               date: "Sept 2024 - Dic 2024",
//               role: "Prácticas Desarrolladora Backend Java",
//               company: "Tragsatec",
//             },
//             {
//               date: "Enero 2023 - Feb 2024",
//               role: "Desarrolladora Frontend React",
//               company: "NUO Planet",
//             },
//             {
//               date: "2023 - En proceso",
//               role: "Desarrollo en WordPress (Divi)",
//               company: "Web médica",
//             },
//           ].map((exp, index) => (
//             <div
//               key={index}
//               className="border-l-4 border-yellow-500 pl-4 space-y-1"
//             >
//               <p className="text-yellow-400 font-bold">{exp.date}</p>
//               <p className="text-gray-300">{exp.role}</p>
//               <p className="text-gray-400 italic">{exp.company}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 📜 Certificaciones y Cursos */}
//       <div className="mt-6">
//         <h3 className="text-xl font-bold text-yellow-400 text-center">
//           Certificaciones y Cursos
//         </h3>
//         <ul className="text-gray-300 space-y-1 mt-4">
//           <li>📜 AI-900: Microsoft Azure AI Fundamentals | Ene - Abr 2025</li>
//           <li>📜 Backend Java con Hibernate y Spring Boot - Programa Tu Futuro | Abr - Jul 2024</li>
//           <li>📜 IFCD28 Desarrollo de Videojuegos y Realidad Virtual con Unity 3D | Feb - May 2024</li>
//           <li>📜 IFCD0210 Desarrollo de aplicaciones con tecnologías web | Feb - Jul 2023</li>
//           <li>📜 FP Superior - Animación 3D, Juegos y Entornos Interactivos | Oct 2020 - Ene 2024</li>
//         </ul>
//       </div>

//       {/* 📜 Rasgos de Clase */}
//       <div className="mt-6">
//         <h3 className="text-xl font-bold text-yellow-400 text-center">Rasgos de Clase</h3>
//         <ul className="text-gray-300 space-y-1 mt-4">
//           <li>📖 Escritura de Código Estructurado: Código limpio y bien documentado.</li>
//           <li>🧠 Aprendiz del Conocimiento Digital: Aprendizaje rápido de nuevas tecnologías.</li>
//           <li>💾 Archivera del Código: Gestión de repositorios en Git/GitHub.</li>
//           <li>🌐 Exploradora Multiversal: Capacidad de trabajar en frontend y backend.</li>
//         </ul>
//       </div>

//       {/* 📜 Idiomas */}
//       <div className="mt-6 text-center">
//         <h3 className="text-xl font-bold text-yellow-400">Idiomas</h3>
//         <p className="text-gray-300">Español, Inglés</p>
//       </div>

//       {/* 📥 Botón de descarga de CV */}
//       <div className="mt-6 text-center">
//         <button
//           onClick={handleDownload}
//           className="bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition flex items-center justify-center gap-2"
//         >
//           <FaDownload />
//           {cvDownloading ? "Descargando..." : "Descargar CV"}
//         </button>
//       </div>
//     </div>
//   );
// }
