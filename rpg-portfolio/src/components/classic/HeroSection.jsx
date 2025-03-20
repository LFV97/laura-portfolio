import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import profilePhoto from "../../assets/img/profile.jpeg";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-8">
      {/* Imagen de perfil */}
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-lg">
        <img src={profilePhoto} alt="Laura Frías" className="w-full h-full object-cover" />
      </div>
      {/* Texto de presentación */}
      <div className="text-center w-[60%]">
        <h1 className="text-4xl font-bold">
          {t("presentation")} <span className="highlight">Laura</span>
        </h1>
        <h2 className="text-2xl mt-2">
          {t("presentDesc")} {" "}
          <TypeAnimation
            sequence={[t("webDev"), 3000, t("ui"), 3000, t("interactivity"), 3000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="changing-text"
          />
        </h2>
      </div>
    </section>
  );
}
