import { FaSun, FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ThemeToggle({ darkMode, setDarkMode }) {
    const { t } = useTranslation();

    return (
        <button
            onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem("darkMode", !darkMode);
            }}
            className="toggle-theme flex items-center px-4 py-2 border rounded-lg shadow-md transition-all duration-300"
        >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
            <span className="ml-2">{darkMode ? t("light-mode") : t("dark-mode")}</span>
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
