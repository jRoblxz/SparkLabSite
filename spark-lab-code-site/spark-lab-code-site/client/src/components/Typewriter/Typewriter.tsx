import { Typography, type TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay: number;
  variant?: TypographyProps["variant"];
  color?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay,
  variant = "h4",
  color = "inherit",
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reinicia quando o texto muda
  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text]);

  // Efeito de digitação
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <Typography
      variant={variant}
      color={color}
      textAlign="left"
      sx={{ fontFamily: "monospace" }}
    >
      {currentText}
      <span
        style={{
          display: "inline-block",
          width: "1ch",
          animation: "blink 1s steps(2, start) infinite",
        }}
      >
        |
      </span>
    </Typography>
  );
};

export default Typewriter;
