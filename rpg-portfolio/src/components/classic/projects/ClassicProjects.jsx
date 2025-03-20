import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ClassicProjects() {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            title: t("project.selene.title"),
            date: t("project.selene.date"),
            technologies: ["Vue", "TailwindCSS", "PHP", "Laravel"],
            description: t("project.selene.description"),
            image: "/img/web/selene.png",
            link: "https://selenegames.com",
        },
        {
            id: 2,
            title: t("project.killa.title"),
            date: t("project.killa.date"),
            technologies: ["React", "Bootstrap", "PHP"],
            description: t("project.killa.description"),
            image: "/img/web/killa.png",
            link: "https://killalibros.com",
        },
        {
            id: 3,
            title: t("project.ianua.title"),
            date: t("project.ianua.date"),
            technologies: ["WordPress", "Divi"],
            description: t("project.ianua.description"),
            image: "/img/web/ianua.png",
            link: "https://ianuaeditora.com",
        },
        {
            id: 4,
            title: t("project.medical.title"),
            date: "Mar 2024",
            technologies: ["WordPress", "Divi"],
            description: t("project.medical.description"),
            image: "/img/web/medical.png",
            link: "https://rosaviana.com",
        },
        {
            id: 5,
            title: t("project.coffeeshop.title"),
            date: "2024",
            technologies: ["Figma"],
            description: t("project.coffeeshop.description"),
            image: "/img/web/coffee.png",
            link: "www.figma.com/design/RNfhCF7YjYirWUCspUioHz/Untitled?node-id=1-2&t=gVftQzJ6ULiVvebp-1",
          },
          {
            id: 6,
            title: t("project.everyday.title"),
            date: 2023,
            technologies: ["Figma", "Adobe XD"],
            description: t("project.everyday.description"),
            image: "/img/web/everyday-cakes.png",
            link: "www.figma.com/design/Ko03gLVeO2AtuXRohZJCdT/Everyday-Cakes---UI?node-id=0-1&t=OnnBJaNDGnmrPZCy-1",
          },
    ];


    return (
        <section id="projects" className="classic-section transition-all duration-300 w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-orange-500 mb-8 text-center">{t("project.title")}</h2>

            <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="p-4 rounded-lg shadow-md subcard"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                        <p className="text-sm text-gray-500">{project.date}</p>
                        <p className="text-gray-700 dark:text-amber-50 mt-2">{project.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="px-3 py-1 text-sm bg-gray-900 text-white rounded-md">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" className="block mt-4 text-orange-500 font-bold hover:underline">
                            {t("project.viewProject")}
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
