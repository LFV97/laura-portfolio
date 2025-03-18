import { useState } from "react";
import { FaMagic, FaPaperPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function SummonContact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSummoning, setIsSummoning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSummoning(true);
    setSuccess(false);
    setError(false);

    try {
    const response = await fetch("https://lfv-dev.com/send_email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });
    
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setError(true);
    }

    setIsSummoning(false);
  };

  return (
    <div className="w-full max-w-l mx-auto bg-gray-800 text-white p-8 rounded-lg shadow-lg border-2 border-purple-500 relative text-center">
      <h2 className="text-3xl font-bold text-purple-400">{t("summon.title")}</h2>
      <p className="text-gray-300 italic">{t("summon.subtitle")}</p>

      {isSummoning && (
        <div className="mt-4 text-yellow-300 text-lg animate-pulse">{t("summon.casting")}</div>
      )}
      {success && (
        <div className="mt-4 text-green-400 text-lg">{t("summon.success")}</div>
      )}
      {error && (
        <div className="mt-4 text-red-400 text-lg">{t("summon.error")}</div>
      )}

      {!success && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t("summon.name")}
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder={t("summon.email")}
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder={t("summon.message")}
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 rounded bg-gray-700 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            <FaMagic /> {t("summon.button")}
          </button>
        </form>
      )}

      <div className="mt-3 justify-center gap-4">
        <div className="mt-6 text-gray-400 text-md">{t("summon.whereToFind")}</div>
        <a className="flex p-3 justify-center" href="https://www.linkedin.com/in/laura-frias-viana/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
      </div>
      <p className="mt-6 text-gray-400 text-sm">{t("summon.footer")}</p>
    </div>
  );
}
