import { useState, useEffect } from "react";
import useStore from "./store";
import LoadingScreen from "./components/LoadingScreen";
import ModeSelection from "./components/ModeSelection";
import PortfolioContent from "./components/PortfolioContent";

export default function App() {
  const { theme } = useStore();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simula el tiempo de carga de 3 segundos
  //   const timeout = setTimeout(() => setLoading(false), 4000);
  //   return () => clearTimeout(timeout);
  // }, []);

  // // Si está en carga, mostrar la pantalla de carga
  // if (loading) {
  //   return <LoadingScreen />;
  // }

  // Si no ha elegido un tema, mostrar la selección de modo
  if (!theme) {
    return <ModeSelection />;
  }

  // Mostrar el contenido del portfolio según el tema elegido
  return <PortfolioContent />;
}
