import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClassicMenu from "./ClassicMenu";
import ClassicLore from "./lore/ClassicLore";
import ClassicSkills from "./skills/ClassicSkills";
import ClassicProjects from "./projects/ClassicProjects";
import ClassicExperience from "../resume/ClassicExperience";
import ClassicContact from "./contact/ClassicContact";
import "./styles/classic.css";
import ParallaxBackground from "./ParallaxBackground";
import HeroSection from "./Herosection";

gsap.registerPlugin(ScrollTrigger);

export default function ClassicContainer() {
    const [section, setSection] = useState("lore");
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    useEffect(() => {
        gsap.utils.toArray(".classic-section").forEach((section) => {
            gsap.fromTo(section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }, []);
    
    return (
        <div className={`min-h-screen classic-container transition-all duration-300`}>
            <ClassicMenu setSection={setSection} darkMode={darkMode} setDarkMode={setDarkMode} />
            
            <div className="content-container">
                <section><HeroSection /></section>
                <section id="about-me"><ClassicLore /></section>
                <section id="skills"><ClassicSkills /></section>
                <section id="projects"><ClassicProjects /></section>
                <section id="resume"><ClassicExperience darkMode={darkMode} /></section>
                <section id="contact"><ClassicContact /></section>
            </div>
        </div>
    );

}
