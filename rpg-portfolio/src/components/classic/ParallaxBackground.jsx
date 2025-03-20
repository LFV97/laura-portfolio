import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ParallaxBackground() {
    const parallaxRef = useRef(null);

    useEffect(() => {
        gsap.to(parallaxRef.current, {
            y: "-20%",
            ease: "none",
            scrollTrigger: {
                trigger: parallaxRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });
    }, []);

    return (
        <div className="parallax-bg" ref={parallaxRef}></div>
    );
}
