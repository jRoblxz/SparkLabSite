import { useState, useRef } from "react";
import { Zap } from "lucide-react";

interface ImageCompareProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
} //asd

export default function ImageCompare({
  beforeImage,
  afterImage,
  beforeLabel = "Antes (O Problema)",
  afterLabel = "Depois (A Solução)",
}: ImageCompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    // Garante que o valor fique entre 0 e 100%
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  // --- CONTROLES PARA PC (MOUSE) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  // --- CONTROLES PARA CELULAR / IPHONE (TOUCH) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // O evento de toque nativo resolve o problema do iPhone
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      // "touch-none" é a magia que impede o iPhone de rolar a página enquanto você arrasta a imagem
      className="relative w-full h-full overflow-hidden select-none group bg-[#1e1c1c] touch-none"
    >
      {/* Imagem do Depois (O seu Sistema) */}
      <img
        src={afterImage}
        alt="Sistema"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
      />

      {/* Imagem do Antes (Planilha/Caderno) cortada pelo clip-path */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <img
          src={beforeImage}
          alt="Problema"
          className="absolute inset-0 w-full h-full object-cover object-top filter grayscale-[30%] brightness-75 pointer-events-none"
        />
      </div>

      {/* Linha Divisória e o Ícone Sparkzinho */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-[#7c3aed] flex items-center justify-center z-20 pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Ícone de Faísca da SparkLab */}
        <div className="w-10 h-10 bg-[#7c3aed] text-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(124,58,237,0.8)] border border-white/20">
          <Zap size={20} className="fill-white" />
        </div>
      </div>

      {/* Fallback de Acessibilidade e Estabilidade para Browsers Antigos */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={e => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0"
        style={{ WebkitAppearance: "none", appearance: "none" }}
      />

      {/* Etiquetas Flutuantes (Retornou ao estilo original pedido) */}
      <div className="absolute top-4 left-4 bg-black/70 text-[#d4d0c8] px-4 py-1.5 rounded-lg text-sm font-semibold z-40 backdrop-blur-md pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-[#7c3aed]/90 text-white px-4 py-1.5 rounded-lg text-sm font-semibold z-40 backdrop-blur-md pointer-events-none shadow-[0_0_15px_rgba(124,58,237,0.5)]">
        {afterLabel}
      </div>
    </div>
  );
}
