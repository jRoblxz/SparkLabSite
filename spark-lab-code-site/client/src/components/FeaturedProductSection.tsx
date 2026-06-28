import { motion } from "framer-motion";
import { Target, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export default function FeaturedProductSection() {
  const benefits = [
    {
      icon: Activity,
      title: "Análise Tática e Física",
      description:
        "Mapeamento térmico e rastreio de jogadores em tempo real com Visão Computacional (YOLO/Python).",
    },
    {
      icon: Target,
      title: "Peneiras Inteligentes",
      description:
        "Avaliação baseada em dados precisos, eliminando o achismo na seleção de novos talentos.",
    },
    {
      icon: ShieldCheck,
      title: "Relatórios para Clubes",
      description:
        "Entrega de relatórios de desempenho completos, ideal para clubes, escolas desportivas e agentes.",
    },
  ];

  return (
    <section className="py-24 bg-[#e4e0d7] text-[#1e1c1c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo Textual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-[#7c3aed]/10 text-[#7c3aed] rounded-full font-bold text-sm border border-[#7c3aed]/20">
              Serviço Exclusivo SparkLab
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Gestão de Avaliações com{" "}
              <span className="text-[#7c3aed]">Inteligência Artificial.</span>
            </h2>

            <p className="text-lg text-[#5a5753] leading-relaxed">
              Deixamos o processo de "peneiras" e avaliações desportivas mais
              justo e tecnológico. Terceirize a avaliação do seu clube connosco
              e receba dados precisos de cada atleta através da nossa tecnologia
              de Sports Analytics.
            </p>

            <div className="space-y-6 pt-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-[#d4d0c8] shadow-sm">
                      <Icon size={24} className="text-[#7c3aed]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{benefit.title}</h4>
                      <p className="text-[#5a5753]">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5518996653079?text=Olá, quero entender como funciona o serviço de peneiras com IA."
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e1c1c] text-white font-semibold rounded-xl hover:bg-[#333] transition-colors shadow-lg"
              >
                Falar com um Especialista <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Área Visual / Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-[#1e1c1c] aspect-video">
              {/* Utilize a imagem do Tracking/Yolo aqui */}
              <img
                src="/tracking.png"
                alt="Dashboard de Análise Desportiva"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed]/30 to-transparent"></div>
            </div>

            {/* Card Flutuante de Estatística */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-[#e4e0d7] hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-[#5a5753] font-medium">
                    Precisão do Rastreio
                  </p>
                  <p className="text-2xl font-bold text-[#1e1c1c]">98.5%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
