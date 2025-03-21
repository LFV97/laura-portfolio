import useStore from "../store";
import { useState, useEffect } from "react";
import ClassicContainer from "./classic/ClassicContainer";
import ModeSelection from "./ModeSelection";
import RpgContainer from "./rpg/RpgContainer";
import "../components/classic/styles/classic.css"
import { useTranslation } from "react-i18next";

export default function PortfolioContent() {
  const { theme } = useStore();
  const { t } = useTranslation();
  const [section, setSection] = useState("lore");
  const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
      localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`w-screen min-h-screen flex flex-col items-center justify-start transition-all duration-500 ${
        theme === "rpg"
          ? "bg-gray-950 text-white"
          : theme === "classic"
          ? "full-classic" // Eliminamos "light-mode dark-mode"
          : "bg-gray-800 text-white"
      }`}
    >
      {theme === "" ? (
        <ModeSelection />
      ) : theme === "rpg" ? (
        <RpgContainer />
      ) : (
        <div className="py-8 w-full min-h-screen">
          <ClassicContainer />
        </div>
      )}
    </div>
  );
}



//   import useStore from "../store";
// import ClassicContainer from "./classic/ClassicContainer";
// import RpgContainer from "./rpg/RpgContainer";
// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import gsap from "gsap";

// export default function PortfolioContent() {
//   const { theme } = useStore();
//   const { t } = useTranslation();
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("darkMode") === "true"
//   );

//   useEffect(() => {
//     if (theme === "classic") {
//       const handleMouseMove = (e) => {
//         const { clientX: x, clientY: y } = e;
//         const particles = document.querySelectorAll(".background-effect div");

//         particles.forEach((particle, index) => {
//           const delay = index * 50;
//           gsap.to(particle, {
//             x: x - window.innerWidth / 2,
//             y: y - window.innerHeight / 2,
//             duration: 0.3,
//             delay: delay / 1000,
//             ease: "power2.out",
//           });
//         });
//       };

//       window.addEventListener("mousemove", handleMouseMove);
//       return () => window.removeEventListener("mousemove", handleMouseMove);
//     }
//   }, [theme]);

//   return (
//     <div
//       className={`min-w-screen min-h-screen flex items-center justify-center transition-all duration-500 ${
//         theme === "rpg"
//           ? "bg-gray-950 text-white"
//           : darkMode
//           ? "full-classic dark-mode"
//           : "full-classic light-mode"
//       }`}
//     >
//       {theme === "rpg" ? (
//         <RpgContainer />
//       ) : (
//         <div className="relative w-full h-full">
//           {/* 🎨 Fondo Animado */}
//           <div className="background-effect">
//             <div></div>
//             <div></div>
//             <div></div>
//           </div>
//           <ClassicContainer />
//         </div>
//       )}
//     </div>
//   );
// }
