import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Esconde o cursor padrão do sistema (Opcional, você pode remover se preferir manter a setinha dentro da bolinha)
    document.body.style.cursor = "none";

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Verifica se o mouse está sobre um link ou botão
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto"; // Restaura ao desmontar
    };
  }, []);

  // Não renderiza em dispositivos móveis (telas touch)
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-screen"
      animate={{
        x: mousePosition.x - 12, // Centraliza a bolinha no mouse
        y: mousePosition.y - 12,
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered
          ? "rgba(124, 58, 237, 0.3)"
          : "rgba(124, 58, 237, 0.8)",
        boxShadow: isHovered
          ? "0 0 30px 10px rgba(124, 58, 237, 0.5)"
          : "0 0 15px 5px rgba(124, 58, 237, 0.4)",
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.15,
      }}
    />
  );
}
    