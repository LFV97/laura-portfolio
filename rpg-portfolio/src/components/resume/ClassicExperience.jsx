import { useTranslation } from "react-i18next";

export default function ClassicExperience() {
    const { t } = useTranslation();

    const experiences = [
        {
            date: "2025 - Actualidad",
            position: t("resume.selene.position"),
            company: "Selene Games",
            description: t("resume.selene.description")
        },
        {
            date: "2024",
            position: t("resume.tragsatec.position"),
            company: "Tragsatec",
            description: t("resume.tragsatec.description")
        },
        {
            date: "2024",
            position: t("resume.nuoplanet.position"),
            company: "NÜO Planet",
            description: t("resume.nuoplanet.description")
        },
        {
            date: "2023",
            position: t("resume.mentorship.position"),
            company: t("resume.mentorship.company"),
            description: t("resume.mentorship.description")
        }
    ];

    return (
        <section id="experience" className="classic-section transition-all duration-300 w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">{t("resume.title")}</h2>
            
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="p-4 rounded-lg shadow-md subcard">
                        <h3 className="text-xl font-semibold">{exp.position} - {exp.company}</h3>
                        <p className="text-sm text-gray-500">{exp.date}</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
