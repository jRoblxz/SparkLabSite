// src/sections/HeroSection.tsx
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/Typewriter/Typewriter";
import avatarImg from "@/components/assets/Images/joao.png";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              João Pedro
              <br />
              <span className="bg-[#7C3AED] bg-clip-text text-transparent">
                Costa Roblez
              </span>
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-[#e4e0d7] font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typewriter text="Software Developer" delay={120} />
            </motion.p>
            <motion.p
              className="text-lg text-[#e4e0d7] mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Estudante de Análise e Desenvolvimento de Sistemas na Fatec,
              apaixonado por criar soluções tecnológicas inovadoras.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                className="
                  relative overflow-hidden rounded-[0.5em] border-none 
                  bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] 
                  font-medium text-[#1e1c1c] tracking-wider 
                  cursor-pointer
                  transition-transform duration-150 ease-in-out active:scale-95
                  
                  before:content-[''] before:absolute before:top-0 before:left-[-10%] 
                  before:w-[120%] before:h-full before:bg-[#e4e0d7] hover:text-[#e4e0d7] before:skew-x-[30deg] 
                  before:z-0 before:transition-transform before:duration-400 
                  before:ease-[cubic-bezier(0.3,1,0.8,1)]
                  
                  hover:before:translate-x-full

                  w-33 h-10 justify-center
                "
              >
                <span
                  className="relative z-10 inline-flex items-center                     
                    transition-colors duration-400
                  "
                >
                  Ver Projetos
                </span>
              </Button>
              <Button
                className="
                  relative overflow-hidden rounded-[0.5em] border-none 
                  bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] 
                  font-medium text-[#1e1c1c] tracking-wider 
                  cursor-pointer
                  transition-transform duration-150 ease-in-out active:scale-95
                  
                  before:content-[''] before:absolute before:top-0 before:left-[-10%] 
                  before:w-[120%] before:h-full before:bg-[#e4e0d7] hover:text-[#e4e0d7] before:skew-x-[30deg] 
                  before:z-0 before:transition-transform before:duration-400 
                  before:ease-[cubic-bezier(0.3,1,0.8,1)]
                  
                  hover:before:translate-x-full

                  w-33 h-10 justify-center
                "
              >
                <span
                  className="relative z-10 inline-flex items-center                     
                    transition-colors duration-400
                  "
                >
                  Sobre mim
                </span>
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-4 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a
                href="https://www.spotify.com/" // URL correta
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212] transition-colors" // Container principal
              >
                {/* Elemento de fundo que fará a animação */}
                <span
                  className="absolute bottom-0 left-0 h-0 w-full bg-[#24262a] transition-all duration-300 ease-in-out group-hover:h-full" // A mágica acontece aqui!
                ></span>

                {/* O Ícone SVG */}
                <svg
                  className="relative z-10 h-6 w-6 text-slate-400 transition-colors group-hover:text-white" // Ícone fica acima do fundo
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="mailto:joaopedro@example.com"
                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212]  transition-colors"
              >
                <span
                  className="absolute bottom-0 left-0 h-0 w-full bg-[#d00909] transition-all duration-300 ease-in-out group-hover:h-full" // A mágica acontece aqui!
                ></span>
                <Mail
                  className="relative z-10 h-6 w-6 text-slate-400 transition-colors group-hover:text-white"
                  size={24}
                />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-[#7C3AED] rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src={avatarImg}
                alt="João Pedro Costa Roblez"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
