import { useState, useEffect } from "react";
import {
  MessageCircle,
  FileText,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "TemperAndin | Gestão de Vendas",
      description:
        "Sistema versátil para controle de vendas, gestão de estoque e análise financeira. Perfeito para escalar negócios no setor de alimentação e comércio varejista.",
      tags: ["PDV", "Estoque Inteligente", "Dashboards"],
      image: "/temperandin.png",
      demoLink:
        "https://wa.me/5518996653079?text=Olá, gostaria de saber mais sobre o sistema de gestão de vendas e estoque.",
      detailsLink: "/projetos/temperandin",
    },
    {
      title: "BarberFlow | Agendamento & ERP",
      description:
        "Plataforma inteligente de agendamentos com gestão VIP, pagamentos online e relatórios automatizados. Aumente o faturamento da sua barbearia ou salão.",
      tags: ["Agendamento Online", "Fidelização", "Pagamento Pix"],
      image: "/barberflow.png",
      demoLink:
        "https://wa.me/5518996653079?text=Olá, gostaria de agendar uma demonstração do sistema BarberFlow.",
      detailsLink: "/projetos/barberflow",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, projects.length]);

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-[#e4e0d7] text-[#1e1c1c] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute w-full h-full"
          animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
          transition={{ duration: 25, repeat: Infinity as any, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(45deg, #7c3aed 1px, transparent 1px), linear-gradient(-45deg, #7c3aed 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 space-y-4"
        >
          {/* Tag com Identidade SparkLab */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7c3aed]/10 text-[#7c3aed] rounded-full font-bold text-sm border border-[#7c3aed]/20 mx-auto">
            <Zap size={16} className="text-[#7c3aed] fill-[#7c3aed]" />
            Soluções Prontas
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Sistemas Institucionais
          </h2>
          <p className="text-lg md:text-xl text-[#5a5753] max-w-2xl mx-auto leading-relaxed">
            Soluções B2B desenvolvidas para resolver problemas reais: automação,
            organização financeira e crescimento do seu negócio.
          </p>
        </motion.div>

        {/* Container Panorâmico - Ajustado para mobile (h-[500px]) e desktop (aspect-[16/9]) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative group"
        >
          <div className="relative w-full h-[550px] md:h-auto md:aspect-[16/9] bg-[#1e1c1c] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Imagem - No celular ela fica no topo, no pc ocupa tudo */}
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-1/2 md:h-full object-cover object-top md:object-center"
                />

                {/* Degradê Protetor - Ajustado para mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c1c] via-[#1e1c1c]/95 md:via-[#1e1c1c]/50 to-transparent opacity-100" />

                <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-[#7c3aed] shadow-[0_0_15px_#7c3aed]"></div>

                {/* Conteúdo Overlay - Ajustes de padding e tamanhos para responsividade */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-8 md:p-12">
                  <div className="max-w-3xl">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight"
                    >
                      {projects[currentIndex].title}
                    </motion.h3>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-[#d4d0c8] mb-5 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none"
                    >
                      {projects[currentIndex].description}
                    </motion.p>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2 mb-6 md:mb-8"
                    >
                      {projects[currentIndex].tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 md:px-4 py-1.5 bg-[#7c3aed]/20 text-white text-[10px] sm:text-xs md:text-sm rounded-full border border-[#7c3aed]/30 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Botões - Stack vertical no celular, lado a lado no PC */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-3 md:gap-4"
                    >
                      <a
                        href={projects[currentIndex].demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-[#7c3aed] text-white rounded-xl text-sm md:text-base font-semibold hover:bg-[#6d28d9] transition-all duration-300 shadow-lg hover:-translate-y-1"
                      >
                        Agendar Demo <MessageCircle size={18} />
                      </a>
                      <a
                        href={projects[currentIndex].detailsLink}
                        className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 border border-white/20 text-white rounded-xl text-sm md:text-base font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
                      >
                        Ver Estudo de Caso <FileText size={18} />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Setas Flutuantes - Escondidas no celular para não poluir, visíveis no PC */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute z-20 left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-[#1e1c1c]/50 text-white border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#7c3aed] hover:border-[#7c3aed] cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute z-20 right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-[#1e1c1c]/50 text-white border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#7c3aed] hover:border-[#7c3aed] cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores (Dots) na base */}
          <div className="absolute z-20 -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full h-1.5 md:h-2 cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 md:w-8 bg-[#7c3aed]"
                    : "w-1.5 md:w-2 bg-[#d4d0c8]/50 hover:bg-[#7c3aed]/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
