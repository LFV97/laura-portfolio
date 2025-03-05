import { useState, useEffect } from "react";
import catWalking from "../assets/cat-walking.gif";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

    return (
      <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
        <div className="relative w-1/2 h-24 mb-4">
          <img
            src={catWalking}
            alt="Loading..."
            className="absolute bottom-0 w-16 h-16"
            style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
          />
        </div>
        <div className="w-1/2 bg-gray-700 h-2 rounded-full overflow-hidden">
          <div className="h-full bg-blue-400 transition-all" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
}
