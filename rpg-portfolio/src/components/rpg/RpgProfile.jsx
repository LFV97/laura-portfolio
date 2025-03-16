import { useState, useEffect } from "react";
import avatar from '../../assets/img/avatar.png';
import borderFrame from '../../assets/img/avatar-frame.png';
import { useTranslation } from "react-i18next";

export default function RpgProfile() {
    const { t } = useTranslation();
    const [hp, setHp] = useState(2048);
    const maxHp = 2048;
    const [mp, setMp] = useState(195);
    const maxMp = 210;
    const [hpEffect, setHpEffect] = useState(false);
    const [mpEffect, setMpEffect] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setHp((prev) => {
                const newHp = prev > 100 ? prev - 100 : maxHp;
                setHpEffect(true);
                setTimeout(() => setHpEffect(false), 500);
                return newHp;
            });

            setMp((prev) => {
                const newMp = prev > 20 ? prev - 20 : maxMp;
                setMpEffect(true);
                setTimeout(() => setMpEffect(false), 500);
                return newMp;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-l mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Contenedor con el marco decorativo */}
                <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52 group">
                    {/* Imagen del borde */}
                    <div 
                        className="absolute inset-[-8%] bg-cover bg-center opacity-100 transition-all group-hover:scale-110"
                        style={{ 
                            backgroundImage: `url(${borderFrame})`, 
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            filter: "brightness(1.2) drop-shadow(0px 0px 8px rgba(255, 215, 0, 0.8))"
                        }}
                    ></div>

                    {/* Imagen de avatar totalmente redonda */}
                    <img 
                        src={avatar} 
                        alt="Laura" 
                        className="relative rounded-full border-4 border-yellow-500 shadow-lg transition-all group-hover:scale-105 w-[90%] object-cover"
                    />
                </div>

                {/* Información */}
                {/* <div className="text-center sm:text-left w-full"> */}
                <div className="text-center md:text-left mx-auto w-full max-w-xl">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{t("profile.name")}</h2>
                    
                    {/* Barras de HP/MP */}
                    <div className="mt-2">
                        {/* HP */}
                        <div className="flex items-center gap-2">
                            <span className="text-green-400 font-bold">HP</span>
                            <div className="w-full max-w-xs sm:max-w-sm bg-gray-800 h-3 sm:h-4 rounded-full overflow-hidden relative">
                                <div
                                    className={`h-full bg-green-500 transition-all duration-500 ease-in-out ${hpEffect ? "animate-ping" : ""}`}
                                    style={{ width: `${(hp / maxHp) * 100}%` }}
                                ></div>
                            </div>
                            <span className="text-white text-sm">{hp} / {maxHp}</span>
                        </div>

                        {/* MP */}
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-blue-400 font-bold">MP</span>
                            <div className="w-full max-w-xs sm:max-w-sm bg-gray-800 h-3 sm:h-4 rounded-full overflow-hidden relative">
                                <div
                                    className={`h-full bg-blue-500 transition-all duration-500 ease-in-out ${mpEffect ? "animate-pulse" : ""}`}
                                    style={{ width: `${(mp / maxMp) * 100}%` }}
                                ></div>
                            </div>
                            <span className="text-white text-sm">{mp} / {maxMp}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Descripción */}
            <p className="mt-4 text-gray-300 text-center sm:text-left">
                {t("profile.description")}
            </p>
        </div>
    );
}
