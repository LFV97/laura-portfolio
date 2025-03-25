import { FaSun, FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ThemeToggle({ darkMode, setDarkMode }) {
    const { t } = useTranslation();

    return (
        <button
            onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem("darkMode", !darkMode);
                document.body.classList.toggle("dark-mode", !darkMode); // Aplica la clase a <body>
                document.body.classList.toggle("light-mode", darkMode);
            }}
            className="toggle-theme flex items-center px-4 py-2 border rounded-lg shadow-md transition-all duration-300"
        >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
            <span className="ml-2">{darkMode ? t("light-mode") : t("dark-mode")}</span>
        </button>
    );
}