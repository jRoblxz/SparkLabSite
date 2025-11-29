import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce completa com React, Node.js e MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/portfolio-accent.png',
      link: '#',
      github: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard de análise de dados em tempo real com visualizações avançadas',
      tags: ['React', 'TypeScript', 'Recharts', 'WebSocket'],
      image: '/services-bg.png',
      link: '#',
      github: '#',
    },
    {
      title: 'Mobile App',
      description: 'Aplicativo mobile para gerenciamento de tarefas com sincronização em nuvem',
      tags: ['React Native', 'Firebase', 'Redux'],
      image: '/pattern-accent.png',
      link: '#',
      github: '#',
    },
    {
      title: 'CRM System',
      description: 'Sistema de CRM empresarial com automação de vendas e relatórios',
      tags: ['React', 'Python', 'PostgreSQL', 'Docker'],
      image: '/cta-background.png',
      link: '#',
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="portfolio" className="py-24 bg-[#1e1c1c] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#7c3aed] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 15, repeat: Infinity as any }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e4e0d7] mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-[#d4d0c8] max-w-2xl mx-auto">
            Veja alguns dos projetos que desenvolvemos com sucesso para nossos
            clientes
          </p>
        </motion.div>

        {/* Projects Grid */}
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
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              </div>

              {/* Project Info */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#e4e0d7] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#7c3aed] text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#7c3aed] text-white rounded-lg hover:bg-[#6d28d9] transition-colors"
                  >
                    Ver Projeto
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-[#1e1c1c] transition-colors"
                  >
                    GitHub
                    <Github size={16} />
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
