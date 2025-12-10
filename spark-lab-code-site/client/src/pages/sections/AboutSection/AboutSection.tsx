// src/sections/AboutSection.tsx
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Sobre <span className="bg-[#7C3AED] bg-clip-text text-transparent">Mim</span>
          </h2>
          <div className="bg-[#1e1c1c] backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            {/* ... (Todo o seu conteúdo da seção Sobre Mim) ... */}
            <p className="text-lg text-[#e4e0d7] leading-relaxed mb-6">
              Sou João Pedro Costa Roblez, estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>, com grande interesse em criar soluções tecnológicas que unam eficiência e inovação.
            </p>
            <p className="text-lg text-[#e4e0d7] leading-relaxed mb-6">
              Tenho foco no desenvolvimento de sistemas bem estruturados, com atenção à qualidade do código, usabilidade e boas práticas de engenharia de software.
            </p>
            <p className="text-lg text-[#e4e0d7] leading-relaxed">
              Busco constantemente aprimorar meus conhecimentos e contribuir para projetos que gerem impacto real por meio da tecnologia.
            </p>
            <div className="mt-8 pt-8 border-t border-[#e4e0d7]">
                <h3 className="text-xl font-bold mb-4 text-[#e4e0d7]">Formação</h3>
                <p className="text-[#e4e0d7]">
                    <strong>Fatec - Faculdade de Tecnologia</strong>
                    <br />
                    Análise e Desenvolvimento de Sistemas
                    <br />
                    <span className="text-[#e4e0d785]">Conclusão prevista: Meio de 2026</span>
                </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}