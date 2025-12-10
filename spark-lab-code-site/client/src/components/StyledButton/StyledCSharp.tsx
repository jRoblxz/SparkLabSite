import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'CSharp', level: 4},
]

const Button = () => {
  return (
    <StyledCSharp>
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
      <div className="button-container">
        <button className="brutalist-button openai button-1">
          <div className="openai-logo">
            <svg className="openai-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <g>
                <path fill="#9B4F96" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
                <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
                <path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1l1.2-6.2h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7h3.3zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/>
              </g>
            </svg>
          </div>
          <div className="button-text">
            <span>C#</span>
            <span> </span>
          </div>
          {/* {skills.map((skill, index) => (
            
              <div className="w-3/4 h-2 bg-slate-700 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-[#A47DDD] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
              </div>

            ))} */}
        </button>
      </div>
      </motion.div>
    </StyledCSharp>
  );
}

const StyledCSharp = styled.div`
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
    background: #A47DDD; /* Usei uma cor do seu tema para combinar */
    /* A animação agora está correta */
    animation: progress 0.6s ease-in-out forwards;
  }
  
  /* 3. Classe específica para a skill, definindo a largura final */
  .skill-per.html {
    /* Usamos .skill-per.html (sem vírgula) para ser específico */
    width: 50%;
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
    color: #A47DDD;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Styles for the first button */
  .button-1 {
    background-color: #2F086D;
    border: 3px solid #A47DDD;
    border-radius: 12px;
    box-shadow: 4px 4px 1px #000000;
  }

  .button-1:hover {
    background-color: #2F086D;
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
  }
`;

export default Button;
