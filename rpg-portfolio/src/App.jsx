import { useState, useEffect } from "react";
import useStore from "./store";
import LoadingScreen from "./components/LoadingScreen";
import ModeSelection from "./components/ModeSelection";
import PortfolioContent from "./components/PortfolioContent";

export default function App() {
  const { theme } = useStore();
  const [loading, setLoading] = useState(true);

  // Si no ha elegido un tema, mostrar la selección de modo
  if (!theme) {
    // return <ModeSelection />;
    return <PortfolioContent />;
  }

  // Mostrar el contenido del portfolio según el tema elegido
  return <PortfolioContent />;
}
