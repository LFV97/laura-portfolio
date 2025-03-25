import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaMagic, FaPaperPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function ClassicContact() {
    const { t } = useTranslation();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isSummoning, setIsSummoning] = useState(false);
    const [status, setStatus] = useState({ success: null, message: "" });
    const [successMessage, setSuccessMessage] = useState("");
    const [success, setSuccess] = useState(false); // Asegurar que está definido
    const [error, setError] = useState(false); // Asegurar que está definido

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); // Enviar como FormData
        setIsSummoning(true);
        setSuccess(false);
        setError(false);

    try {
        const response = await fetch("https://lfv-dev.com/send-email.php", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data.success) {
            setSuccess(true);
            setSuccessMessage(t("contact.successMessage"));
            setForm({ name: "", email: "", message: "" });
            e.target.reset();
        } else {
            setSuccessMessage(t("summon.error"));
            setError(true);
        }
    } catch (err) {
        console.error("Error:", err);
        setError(true);
    }

    setIsSummoning(false);
};

    return (
        <section id="contact" className="classic-section transition-all duration-300 w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">{t("contact.title")}</h2>
            <p>{t("contact.description")}</p>

            <form className="mt-6 mx-auto space-y-4 p-6" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder={t("contact.name")}
                    className="w-full p-3 border rounded-md"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t("contact.email")}
                    className="w-full p-3 border rounded-md"
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    rows="4"
                    placeholder={t("contact.message")}
                    className="w-full p-3 border rounded-md"
                    onChange={handleChange}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="btn-classic w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all duration-300"
                >
                    {t("contact.send")}
                </button>
            </form>
            {successMessage && <p className="text-success mt-3">{successMessage}</p>}
            <div className="mt-3 justify-center gap-4">
                <div className="mt-6 text-gray-400 text-md">{t("classic.whereToFind")}</div>
                    <div className="flex mx-auto justify-center">
                        <a
                            className="flex p-3 justify-center"
                            href="https://www.linkedin.com/in/laura-frias-viana/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "#FF8C00"}}
                        >
                            <FaLinkedin size={40} />
                        </a>
                        <a
                            className="flex p-3 justify-center"
                            href="https://github.com/LFV97"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "#FF8C00"}}
                        >
                            <FaGithub size={40} />
                        </a>
                    </div>
            </div>
        </section>
    );
}
