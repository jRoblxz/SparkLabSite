import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import Joao from '@/components/assets/Images/joao.png'

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar ideias complexas em soluções de software elegantes e eficientes, combinando código limpo com o entendimento profundo da necessidade.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser reconhecido como um parceiro tecnológico de excelência, entregando projetos que unem inovação constante e solidez técnica.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Transparência no processo, excelência técnica, aprendizado contínuo e foco absoluto na resolução do problema real.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#1e1c1c] text-[#e4e0d7] relative overflow-hidden">
      {/* Background - Subtle Light for contrast */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#e4e0d7] rounded-full mix-blend-soft-light filter blur-[150px] opacity-10"
          animate={{ x: [100, -100, 100], y: [100, -100, 100] }}
          transition={{ duration: 15, repeat: Infinity as any }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* A História / O Fundador - Card Premium */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/5 group mx-auto aspect-[4/5] md:aspect-[3/4]"
          >
            <img 
              src={Joao} 
              alt="João Roblez" 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradiente elétrico - a centelha */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c1c] via-[#1e1c1c]/20 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#7c3aed] transition-all group-hover:h-3"></div>
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h3 className="text-3xl font-bold">João Roblez</h3>
              <p className="text-[#d4d0c8]">Desenvolvedor & Fundador</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Construindo software <span className="text-[#7c3aed]">com propósito.</span>
            </h2>
            <p className="text-lg text-[#d4d0c8] leading-relaxed">
              Minha jornada com tecnologia vai além de escrever código. Como estudante de ADS e atuando no Design Instrucional, entendo que o melhor software resolve problemas reais de pessoas reais.
            </p>
            <p className="text-lg text-[#d4d0c8] leading-relaxed">
              Através da Spark, trago uma visão pragmática: sistemas complexos em PHP/Laravel, interfaces modernas em React e inovação com Visão Computacional. Meu compromisso é qualidade e transparência.
            </p>
          </motion.div>
        </div>

        {/* Missão, Visão e Valores - Modern Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-xl hover:border-[#7c3aed] group transition-all duration-300 shadow-xl shadow-purple-950/5 hover:shadow-[#7c3aed]/10"
              >
                <div className="w-16 h-16 bg-[#1e1c1c] rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-[#7c3aed] transition-all">
                  <Icon size={32} className="text-[#e4e0d7] transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#d4d0c8] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}