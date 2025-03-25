import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    <section
      ref={sectionRef}
      className="classic-section transition-all duration-300 w-5xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-orange-500 mb-4">{t("about.title")}</h2>
      <p className="text-lg mt-4">{t("about.description")}</p>
    </section>
  );
}