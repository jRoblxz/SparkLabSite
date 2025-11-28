import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'PHP', level: 4},
]
const Button = () => {
  return (
    <StyledPython>
      <div className="button-container">
        <button className="brutalist-button openai button-1">
          <div className="openai-logo">
            <svg className="openai-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
              <defs>
                <linearGradient id="a" x1="-133.268" y1="-202.91" x2="-133.198" y2="-202.84" gradientTransform="translate(25243.061 38519.17) scale(189.38 189.81)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#387eb8"/>
                  <stop offset="1" stop-color="#366994"/>
                </linearGradient><linearGradient id="b" x1="-133.575" y1="-203.203" x2="-133.495" y2="-203.133" gradientTransform="translate(25309.061 38583.42) scale(189.38 189.81)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#ffe052"/>
                  <stop offset="1" stop-color="#ffc331"/>
                </linearGradient>
              </defs>
                <title>file_type_python</title>
                <path d="M15.885,2.1c-7.1,0-6.651,3.07-6.651,3.07V8.36h6.752v1H6.545S2,8.8,2,16.005s4.013,6.912,4.013,6.912H8.33V19.556s-.13-4.013,3.9-4.013h6.762s3.772.06,3.772-3.652V5.8s.572-3.712-6.842-3.712h0ZM12.153,4.237a1.214,1.214,0,1,1-1.183,1.244v-.02a1.214,1.214,0,0,1,1.214-1.214h0Z" fill="url(#a)"/>
                <path d="M16.085,29.91c7.1,0,6.651-3.08,6.651-3.08V23.65H15.985v-1h9.47S30,23.158,30,15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13,4.013-3.9,4.013H12.975S9.2,16.356,9.2,20.068V26.2s-.572,3.712,6.842,3.712h.04Zm3.732-2.147A1.214,1.214,0,1,1,21,26.519v.03a1.214,1.214,0,0,1-1.214,1.214h.03Z" fill="url(#b)"/>
            </svg>
          </div>
          <div className="button-text">
            <span>PYTHON</span>
            <span> </span>
          </div>
          {skills.map((skill, index) => (
              <div className="w-3/4 h-2 bg-slate-700 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-[#FFD141] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
              </div>

            ))}
        </button>
      </div>
    </StyledPython>
  );
}

const StyledPython = styled.div`
  /* Estilos do botão e container (sem alterações) */
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  /* ... (todos os seus outros estilos de .brutalist-button, .openai-logo, etc. continuam aqui sem mudança) ... */

  /* --- ÁREA CORRIGIDA DA BARRA DE PROGRESSO --- */

  .skill-box {
    width: 100%;
    margin-top: 15px; /* Ajuste de margem */
  }

  /* 1. Estilo do container da barra (o "trilho" de fundo) */
  .skill-bar {
    height: 8px;
    width: 100%;
    background: rgba(0,0,0,0.1);
    border-radius: 6px;
  }
  
  /* 2. Estilo da barra de preenchimento (a parte que cresce) */
  .skill-per {
    position: relative;
    display: block;
    height: 100%;
    /* A largura inicial é 0, a animação vai cuidar do resto */
    width: 0; 
    border-radius: 6px;
    background: #FFD343; /* Usei uma cor do seu tema para combinar */
    /* A animação agora está correta */
    animation: progress 0.6s ease-in-out forwards;
  }
  
  /* 3. Classe específica para a skill, definindo a largura final */
  .skill-per.html {
    /* Usamos .skill-per.html (sem vírgula) para ser específico */
    width: 30%;
  }

  /* 4. DEFINIÇÃO DA ANIMAÇÃO (estava faltando) */
  @keyframes progress {
    0% {
      width: 0;
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      /* A largura final será a definida na classe .html (50%) */
    }
  }

  .skill-per .tooltip {
    position: absolute;
    right: -14px;
    top: -28px;
    font-size: 9px;
    font-weight: 500;
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    background: #4070f4;
    z-index: 1;
  }

  /* ... (o restante dos seus estilos de .brutalist-button:hover, keyframes, etc., continuam aqui) ... */
  
  /* Common styles for both buttons */
  .brutalist-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1600px;
    height: 150px;
    color: #FFD141;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Styles for the first button */
  .button-1 {
    background-color: #3770A1;
    border: 3px solid #FFD141;
    border-radius: 12px;
    box-shadow: 4px 4px 1px #000000;
  }

  .button-1:hover {
    background-color: #3770A1;
    border-color: #030504;
    transform: translate(-6px, -6px) rotate(1deg);
    box-shadow: 10px 10px 0 #000000, 15px 15px 20px rgba(64, 164, 122, 0.2);
  }

  .button-1::before,
  .button-1::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: 0.6s;
  }

  .button-1::before {
    left: -100%;
  }
  .button-1::after {
    left: 100%;
  }

  .button-1:hover::before {
    animation: swipeRight 1.5s infinite;
  }
  .button-1:hover::after {
    animation: swipeLeft 1.5s infinite;
  }

  @keyframes swipeRight {
    100% {
      transform: translateX(200%) skew(-45deg);
    }
  }

  @keyframes swipeLeft {
    100% {
      transform: translateX(-200%) skew(-45deg);
    }
  }

  /* Hover effects */
  .brutalist-button:hover .openai-logo {
    transform: translateY(-10px);
  }

  .brutalist-button:hover .openai-icon {
    width: 40px;
    height: 40px;
  }

  .bruta.brutalist-button:hover .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
  }

  /* Styles for the OpenAI logo and text */
  .openai-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  .openai-icon {
    width: 64px;
    height: 64px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .openai-text {
    font-size: 24px;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  .button-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
    text-align: center;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }
  
  .progress {
    display: flex;
    align-items: center;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  .button-text span:first-child {
    font-size: 16px;
  }

  .button-text span:last-child {
    padding-top: 3px;
    font-size: 12px;
    font-weight: normal;
  }

  /* Hover effects */
  .brutalist-button:hover .openai-logo {
    transform: translateY(-10px);
  }

  .brutalist-button:hover .openai-icon {
    width: 40px;
    height: 40px;
  }

  .brutalist-button:hover .button-text,
  .brutalist-button:hover .progress,
  .brutalist-button:hover .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
  }

  /* Animation for the OpenAI logo */
  @keyframes spin-and-zoom {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.1);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }

  .brutalist-button:hover .openai-icon {
    animation: spin-and-zoom 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  .brutalist-button:hover .openai-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .brutalist-button:active .openai-icon,
  .brutalist-button:active .openai-text,
  .brutalist-button:active .progress,
  .brutalist-button:active .button-text {
    transform: scale(0.95);
  }`;

export default Button;
