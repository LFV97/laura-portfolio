import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <button
            onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem("darkMode", !darkMode); // Guardar en localStorage
            }}
            className={`flex items-center px-4 py-2 border rounded-lg shadow-md transition-all duration-300 ${
                darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            }`}
        >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
            <span className="ml-2">{darkMode ? "Modo Claro" : "Modo Oscuro"}</span>
        </button>
    );
}



// import { useState, useEffect } from "react";

// export default function ThemeToggle() {
//     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//     useEffect(() => {
//         if (darkMode) {
//           document.body.classList.add("dark");
//           document.body.classList.remove("light");
//         } else {
//           document.body.classList.add("light");
//           document.body.classList.remove("dark");
//         }
//       }, [darkMode]);

//     const toggleTheme = () => {
//         setTheme(theme === "light" ? "dark" : "light");
//     };

//     return (
//         <button onClick={toggleTheme} className="toggle-theme">
//             {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
//         </button>
//     );
// }
