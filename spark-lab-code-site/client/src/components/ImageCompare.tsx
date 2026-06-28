import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

interface ImageCompareProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function ImageCompare({
  beforeImage,
  afterImage,
  beforeLabel = "Antes (O Problema)",
  afterLabel = "Depois (A Solução)",
}: ImageCompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full h-full overflow-hidden select-none group bg-[#1e1c1c]">
      {/* Imagem do Depois (O seu Sistema - Fica no fundo) */}
      <img
        src={afterImage}
        alt="Sistema"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Imagem do Antes (Planilha/Caderno - Fica por cima e é cortada pelo clip-path) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <img
          src={beforeImage}
          alt="Problema"
          className="absolute inset-0 w-full h-full object-cover object-top filter grayscale-[30%] brightness-75"
        />
      </div>

      {/* Linha Divisória e Ícone de Arrastar */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-[#7c3aed] flex items-center justify-center z-20 pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-10 h-10 bg-[#7c3aed] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)]">
          <MoveHorizontal size={20} />
        </div>
      </div>

      {/* Input Range Invisível (Faz a mágica da interação funcionar no PC e Celular) */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={e => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />

      {/* Etiquetas Flutuantes */}
      <div className="absolute top-4 left-4 bg-black/70 text-[#d4d0c8] px-4 py-1.5 rounded-lg text-sm font-semibold z-10 backdrop-blur-md pointer-events-none transition-opacity duration-300">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-[#7c3aed]/90 text-white px-4 py-1.5 rounded-lg text-sm font-semibold z-10 backdrop-blur-md pointer-events-none transition-opacity duration-300">
        {afterLabel}
      </div>
    </div>
  );
}
