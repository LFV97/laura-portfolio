import React from "react";
import { useTranslation } from "react-i18next";

export default function ClassicSkills() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="classic-section w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">{t("skills.title")}</h2>
            
            <div className="mb-6">
                <h3 className="text-xl font-semibold">🏹 {t("skills.main.title")}</h3>
                <ul className="list-disc pl-5">
                    <p>{t("skills.main.frontend")}</p>
                    <p>{t("skills.main.backend")}</p>
                    <p>{t("skills.main.web_design")}</p>
                    <p>{t("skills.main.ux_ui")}</p>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold">🔮 {t("skills.passive.title")}</h3>
                <ul className="list-disc pl-5">
                    <p>{t("skills.passive.teamwork")}</p>
                    <p>{t("skills.passive.fast_learning")}</p>
                    <p>{t("skills.passive.problem_solving")}</p>
                </ul>
            </div>
        </section>
    );
}
