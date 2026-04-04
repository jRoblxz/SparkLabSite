import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Peneiras from '@/components/assets/Images/peneiras.png'
import IA from '@/components/assets/Images/tracking.png'
import Mobile from '@/components/assets/Images/mobile.png'
import Jogo from '@/components/assets/Images/kpopgame.png'

export default function PortfolioSection() {
  const projects = [
    {
      title: 'Plataforma de Gestão Esportiva',
      description: 'Sistema completo desenvolvido para gerenciar e otimizar processos de avaliação e seleção em peneiras de futebol.',
      tags: ['PHP', 'Laravel', 'React'],
      image: Peneiras, // Substitua por um print do seu TCC
      link: 'https://projeto-tcc-jade.vercel.app/login',
      github: 'https://github.com/jRoblxz/Projeto_TCC',
    },
    {
      title: 'Sports Analytics Tracker',
      description: 'Sistema de visão computacional capaz de mapear e rastrear coordenadas de jogadores em partidas de futebol em tempo real.',
      tags: ['Python', 'OpenCV', 'YOLO', 'Roboflow'],
      image: IA, // Substitua por um print do seu projeto de IA
      link: 'https://projeto-tcc-jade.vercel.app/login',
      github: 'https://github.com/jRoblxz/Projeto_TCC',
    },
    {
      title: 'Aplicativo Mobile',
      description: 'Desenvolvimento de aplicação mobile focada em performance e usabilidade para iOS e Android.',
      tags: ['React Native', 'Mobile'],
      image: '/pattern-accent.png',
      link: '#',
      github: '#',
    },
    {
      title: 'Jogo Web Interativo',
      description: 'Aplicação web interativa com mecânicas de busca de palavras, focada na experiência do usuário e gerenciamento de estados.',
      tags: ['React', 'Tailwind CSS', 'UI/UX'],
      image: Jogo, // Substitua por um print do jogo de K-pop
      link: 'https://word-search-kpop.vercel.app/',
      github: 'https://github.com/jRoblxz/word_search_kpop',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  return (
    <section id="portfolio" className="py-24  bg-[#e4e0d7] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#7c3aed] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 15, repeat: Infinity as any }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e4e0d7] mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-[#d4d0c8] max-w-2xl mx-auto">
            Soluções reais construídas com tecnologia moderna, focadas em performance e resolução de problemas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#e4e0d7] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#7c3aed] text-white text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#7c3aed] text-white rounded-lg hover:bg-[#6d28d9] transition-colors text-sm"
                  >
                    Ver Detalhes <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-[#1e1c1c] transition-colors text-sm"
                  >
                    Código Fonte <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}