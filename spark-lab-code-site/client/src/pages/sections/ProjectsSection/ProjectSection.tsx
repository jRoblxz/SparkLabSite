// src/sections/ProjectsSection.tsx
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  // ... (Seu array de projetos aqui) ...
  {
    name: 'Projeto TCC',
    description: 'Projeto de Conclusão de Curso focado em Análise e Desenvolvimento de Sistemas...',
    technologies: ['PHP', 'Laravel', 'MySQL', 'React', 'N8N'],
    link: 'https://github.com/jRoblxz/Projeto_TCC'
  },
  // ... outros projetos
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Meus Projetos
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              // ... (Seu JSX de mapeamento de projetos aqui) ...
              <motion.div
                key={project.name}
                className="bg-[#e4e0d7] backdrop-blur-sm rounded-2xl p-6 border border-slate-800 shadow-xl hover:shadow-[#7C3AED]  transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-3 text-[#1e1c1c]">{project.name}</h3>
                <p className="text-[#1e1c1c] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#1e1c1c] text-[#e4e0d7] rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#1e1c1c] hover:text-[#7C3AED]  transition-colors font-medium">
                  Ver no GitHub <ExternalLink size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}