import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffects() {
    useEffect(() => {
        gsap.from(".fade-in", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".fade-in",
                start: "top 80%",
            }
        });
    }, []);

    return null;
}
