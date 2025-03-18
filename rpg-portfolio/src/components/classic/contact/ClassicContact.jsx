import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ClassicContact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(t("contact.successMessage"));
    };

    return (
        <section id="contact" className="classic-section transition-all duration-300 w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">{t("contact.title")}</h2>
            <p className="text-gray-600 dark:text-gray-300">{t("contact.description")}</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder={t("contact.name")}
                    className="w-full p-3 border rounded-md subcard"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t("contact.email")}
                    className="w-full p-3 border rounded-md subcard"
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    rows="4"
                    placeholder={t("contact.message")}
                    className="w-full p-3 border rounded-md subcard"
                    onChange={handleChange}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all duration-300"
                >
                    {t("contact.send")}
                </button>
            </form>
        </section>
    );
}
