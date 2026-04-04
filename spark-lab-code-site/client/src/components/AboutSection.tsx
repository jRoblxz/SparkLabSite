import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import Joao from '@/components/assets/Images/joao.png'

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar ideias complexas em soluções de software elegantes e eficientes, combinando código limpo com o entendimento profundo da necessidade do cliente.',
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
    <section id="about" className="py-24 bg-[#1e1c1c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* A História / O Fundador */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Dica: Coloque uma foto sua trabalhando ou uma foto profissional aqui */}
            <img 
              src={Joao} 
              alt="João Roblez" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c1c] to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">João Roblez</h3>
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
            <h2 className="text-4xl font-bold text-[#e4e0d7]">
              Construindo software com propósito.
            </h2>
            <p className="text-lg text-[#5a5753] leading-relaxed">
              Minha jornada com tecnologia vai além de escrever código. Como estudante de Análise e Desenvolvimento de Sistemas e atuando profissionalmente em ambientes institucionais (Design Instrucional), aprendi que o melhor software é aquele que resolve problemas reais de pessoas reais.
            </p>
            <p className="text-lg text-[#5a5753] leading-relaxed">
              Através da Spark, trago uma visão pragmática para o desenvolvimento web e mobile. Seja estruturando sistemas complexos em PHP/Laravel, criando interfaces modernas em React, ou explorando soluções inovadoras com Visão Computacional em Python, meu compromisso é entregar qualidade e transparência em cada linha de código.
            </p>
          </motion.div>
        </div>

        {/* Missão, Visão e Valores */}
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
                className="bg-[#f5f3f0] p-8 rounded-xl border border-[#e4e0d7] hover:border-[#7c3aed] transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#1e1c1c] rounded-lg flex items-center justify-center mb-6">
                  <Icon size={24} className="text-[#e4e0d7]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1c1c] mb-4">{item.title}</h3>
                <p className="text-[#5a5753] leading-relaxed">
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