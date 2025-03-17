import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import profilePhoto from "../../../assets/img/profile.jpeg"; // Asegúrate de cambiar esto por tu imagen real

export default function AboutMe() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
      gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
  }, []);

  return (
    <section className="container mx-auto justify-center px-6 py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Imagen de perfil */}
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-lg">
        <img
          src={profilePhoto}
          alt="Laura Frías"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto de presentación */}
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {t("about.title")}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          {t("about.description")}
        </p>

        {/* Lista de tecnologías */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-primary">
            {t("about.techTitle")}
          </h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Three.js",
              "Java",
              "SQL",
              "C#",
              "Python",
              "WordPress",
            ].map((tech, index) => (
              <li
                key={index}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-sm text-gray-900 dark:text-gray-100"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
