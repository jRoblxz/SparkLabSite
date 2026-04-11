import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Amphora, ExternalLink, Github } from 'lucide-react';

export default function PortfolioSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const projects = [
    {
      title: 'Plataforma de Gestão Esportiva',
      description: 'Sistema completo (TCC) desenvolvido para gerenciar e otimizar processos de avaliação e seleção em peneiras de futebol.',
      tags: ['PHP', 'Laravel', 'React'],
      image: '/peneiras.png',
      link: 'https://projeto-tcc-jade.vercel.app/login',
      github: 'https://github.com/jRoblxz/Projeto_TCC',
    },
    {
      title: 'Sports Analytics Tracker',
      description: 'Sistema inovador de visão computacional capaz de mapear e rastrear jogadores de hóquei em tempo real.',
      tags: ['Python', 'OpenCV', 'YOLO', 'IA'],
      image: '/tracking.png',
      link: 'https://projeto-tcc-jade.vercel.app/login',
      github: 'https://github.com/jRoblxz/Sports-Analytics-Tracker',
    },
    {
      title: 'Jogo Web Interativo',
      description: 'Aplicação web interativa focada na experiência do usuário e gerenciamento dinâmico de estados.',
      tags: ['React', 'Tailwind CSS', 'UI/UX'],
      image: '/kpopgame.png',
      link: 'https://word-search-kpop.vercel.app/',
      github: 'https://github.com/jRoblxz/word_search_kpop',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="portfolio" className="py-24 bg-[#1e1c1c] text-[#e4e0d7] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute w-full h-full"
          animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
          transition={{ duration: 25, repeat: Infinity as any, ease: 'linear' }}
          style={{
            backgroundImage: 'linear-gradient(45deg, #7c3aed 1px, transparent 1px), linear-gradient(-45deg, #7c3aed 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-[#d4d0c8] max-w-2xl mx-auto leading-relaxed">
            Estudos de caso e inovações técnicas criadas com tecnologia moderna, focadas em performance e resolução de problemas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            // Lógica unificada: O card está "aberto" se o estado do React for igual ao index.
            const isOpen = activeCard === index;

            return (
              <motion.div
                key={index}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                onClick={() => setActiveCard(isOpen ? null : index)}
                className="group bg-white/5 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/10 border border-white/5 relative flex flex-col h-[400px] cursor-pointer"
              >
                {/* Imagem e Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${isOpen ? 'scale-105' : 'group-hover:scale-105'}`}
                  />
                  <div className={`absolute inset-0 transition-colors duration-300 ${isOpen ? 'bg-[#1e1c1c]/95' : 'bg-[#1e1c1c]/40 group-hover:bg-[#1e1c1c]/90'}`} />
                  <div className={`absolute top-0 left-0 w-full h-1 bg-[#7c3aed] transition-transform origin-left z-20 ${isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
                </div>

                {/* Container de Conteúdo Dinâmico */}
                <div className={`relative z-10 flex flex-col justify-end p-6 md:p-8 h-full transition-transform duration-300 
                  ${isOpen ? 'translate-y-0' : 'translate-y-24 group-hover:translate-y-0'}`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                  
                  <p className={`text-[#d4d0c8] mb-4 md:mb-6 leading-relaxed text-sm md:text-base transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  >
                    {project.description}
                  </p>

                  <div className={`flex flex-wrap gap-2.5 mb-6 transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  >
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-[#7c3aed]/20 text-[#e4e0d7] text-xs md:text-sm rounded-full border border-[#7c3aed]/30 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={`flex flex-wrap gap-3 md:gap-4 pt-4 border-t border-white/10 mt-auto md:mt-0 transition-opacity duration-300
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'}`}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 md:flex-none flex justify-center items-center gap-2 px-4 py-2.5 bg-[#7c3aed] text-white rounded-xl hover:bg-[#6d28d9] transition-colors text-xs md:text-sm font-medium shadow-lg shadow-[#7c3aed]/20"
                    >
                      Ver Detalhes <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 md:flex-none flex justify-center items-center gap-2 px-4 py-2.5 border border-white/10 text-[#d4d0c8] rounded-xl hover:bg-white/5 transition-colors text-xs md:text-sm font-medium"
                    >
                      Código <Github size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

