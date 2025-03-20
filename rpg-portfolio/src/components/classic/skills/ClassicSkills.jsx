import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function ClassicSkillCarousel() {
    const { t } = useTranslation();
    const [speed, setSpeed] = useState(40);

    const skills = [
        { name: "HTML", icon: "/icons_cl/html.png", color: "rgba(227, 79, 38, 0.2)" },
        { name: "CSS", icon: "/icons_cl/css.png", color: "rgba(21, 114, 182, 0.2)" },
        { name: "JavaScript", icon: "/icons_cl/js.png", color: "rgba(247, 223, 30, 0.2)" },
        { name: "React", icon: "/icons_cl/react.png", color: "rgba(97, 218, 251, 0.2)" },
        { name: "Three.js", icon: "/icons_cl/three.png", color: "rgba(180, 180, 180, 0.2)" },
        { name: "Bootstrap", icon: "/icons_cl/bootstrap.png", color: "rgba(121, 82, 179, 0.2)" },
        { name: "TailwindCSS", icon: "/icons_cl/tailwindcss.png", color: "rgba(56, 189, 248, 0.2)" },
        { name: "Java", icon: "/icons_cl/java.png", color: "rgba(0, 115, 150, 0.2)" },
        { name: "Spring", icon: "/icons_cl/spring.png", color: "rgba(109, 179, 63, 0.2)" },
        { name: "Hibernate", icon: "/icons_cl/hibernate.png", color: "rgba(89, 102, 108, 0.2)" },
        { name: "Struts2", icon: "/icons_cl/struts.png", color: "rgba(16, 78, 139, 0.2)" },
        { name: "C#", icon: "/icons_cl/c-sharp.png", color: "rgba(35, 145, 32, 0.2)" },
        { name: ".NET", icon: "/icons_cl/dot-net.png", color: "rgba(81, 43, 212, 0.2)" },
        { name: "Azure", icon: "/icons_cl/azure.png", color: "rgba(0, 120, 212, 0.2)" },
        { name: "EntityFramework", icon: "/icons_cl/entity.png", color: "rgba(81, 43, 212, 0.2)" },
        { name: "Python", icon: "/icons_cl/python.png", color: "rgba(55, 118, 171, 0.2)" },
    ];

    // Duplica la lista para lograr un bucle infinito sin cortes
    const duplicatedSkills = [...skills, ...skills];

    return (
        <section id="skills" className="classic-section transition-all duration-300 w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-orange-500 mb-8 text-center">{t("skills.title")}</h2>

            <div 
                className="carousel-container relative overflow-hidden w-full" 
                onMouseEnter={() => setSpeed(80)} 
                onMouseLeave={() => setSpeed(40)}
            >
                <motion.div 
                    className="carousel flex space-x-8"
                    animate={{ x: ["0%", "-200%"] }}
                    transition={{ ease: "linear", duration: speed, repeat: Infinity }}
                >
                    {duplicatedSkills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            className="skill-item flex flex-col items-center p-4 rounded-lg shadow-md"
                            whileHover={{ scale: 1.2, backgroundColor: skill.color }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className="w-16 h-16 object-contain"
                                whileHover={{ rotate: 10 }}
                            />
                            <p className="mt-2 text-sm font-semibold">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
