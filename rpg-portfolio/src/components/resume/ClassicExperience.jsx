import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function ClassicExperience({ darkMode }) {
    const { t } = useTranslation();

    const experiences = [
        {
            date: t("seleneDate"),
            position: t("resume.selene.position"),
            company: "Selene Games",
            description: t("resume.selene.description"),
            icon: <FaBriefcase />,
        },
        {
            date: t("killaDate"),
            position: t("resume.killa.position"),
            company: "Editorial KillaLibros",
            description: t("resume.killa.description"),
            icon: <FaBriefcase />,
        },
        {
            date: t("ianuaDate"),
            position: t("resume.ianua.position"),
            company: "Ianua Editora",
            description: t("resume.ianua.description"),
            icon: <FaBriefcase />,
        },
        {
            date: t("tragsaDate"),
            position: t("resume.tragsatec.position"),
            company: "Tragsatec",
            description: t("resume.tragsatec.description"),
            icon: <FaBriefcase />,
        },
        {
            date: t("medicalDate"),
            position: t("resume.medical.position"),
            company: "Medical Website",
            description: t("resume.medical.description"),
            icon: <FaBriefcase />,
        },
        {
            date: t("nuoDate"),
            position: t("resume.nuoplanet.position"),
            company: "NÜO Planet",
            description: t("resume.nuoplanet.description"),
            icon: <FaBriefcase />,
        },
        {
            date: t("certDateJanApr2025"),
            position: t("resume.certifications.ai900.position"),
            company: "Microsoft",
            description: t("resume.certifications.ai900.description"),
            icon: <FaGraduationCap />,
        },
        {
            date: t("certDateAprJul2024"),
            position: t("resume.certifications.backendJava.position"),
            company: "Accenture",
            description: t("resume.certifications.backendJava.description"),
            icon: <FaGraduationCap />,
        },
        {
            date: t("certDateFebMay2024"),
            position: t("resume.certifications.unity3D.position"),
            company: "Grupo Colon IECM",
            description: t("resume.certifications.unity3D.description"),
            icon: <FaGraduationCap />,
        },
        {
            date: t("certDateFebJul2023"),
            position: t("resume.certifications.webDev.position"),
            company: "CoreNetwork",
            description: t("resume.certifications.webDev.description"),
            icon: <FaGraduationCap />,
        },
        {
            date: t("certDateOct2020Ene2024"),
            position: t("resume.certifications.animation3D.position"),
            company: "FP Superior",
            description: t("resume.certifications.animation3D.description"),
            icon: <FaGraduationCap />,
        },
    ];

    return (
        <section id="experience" className="classic-section transition-all duration-300 w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-orange-500 mb-8 text-center">{t("resume.title")}</h2>

            <VerticalTimeline>
                {experiences.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={exp.date}
                        iconStyle={{ background: "#ff8c00", color: "#fff" }}
                        icon={exp.icon}
                        contentStyle={{
                            background: darkMode ? "#1e1e1e" : "#f4f4f4",
                            color: darkMode ? "#fff" : "#222",
                            borderRadius: "10px",
                            boxShadow: darkMode
                                ? "0px 4px 10px rgba(255, 140, 0, 0.5)"
                                : "0px 4px 10px rgba(255, 140, 0, 0.3)",
                        }}
                        contentArrowStyle={{
                            borderRight: `7px solid ${darkMode ? "#ff8c00" : "#ff8c00"}`,
                        }}
                        className="timeline-item"
                    >
                        <h3 className="text-xl font-semibold">{exp.position} - {exp.company}</h3>
                        <p>{exp.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
}
