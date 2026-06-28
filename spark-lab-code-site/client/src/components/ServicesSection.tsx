import { motion, Variants } from 'framer-motion';
import { Code2, Smartphone, Database, ScanEye, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Presença Digital e Vendas",
      description:
        "Desenvolvimento de Landing Pages e sites de alta conversão, projetados para destacar sua marca e captar mais clientes na internet",
      color: "#7c3aed",
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description:
        "Desenvolvimento de aplicativos modernos e responsivos com React Native para iOS e Android.",
      color: "#3b82f6",
    },
    {
      icon: Database,
      title: "Automação e Gestão Interna",
      description:
        "Sistemas web personalizados para organizar seu estoque, cadastros e processos diários. Diga adeus às planilhas lentas e ganhe tempo.",
      color: "#f59e0b",
    },
    {
      icon: ScanEye,
      title: "IA & Visão Computacional",
      description:
        "Soluções inovadoras de automação e análise de dados utilizando Python, OpenCV e YOLO.",
      color: "#10b981",
    },
  ];

  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const cardVariants : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#1e1c1c] text-[#e4e0d7] relative overflow-hidden"
    >
      {/* Background Texture - Modernized Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div
          className="absolute w-full h-full"
          animate={{ backgroundPosition: ["0px 0px", "20px 20px"] }}
          transition={{ duration: 15, repeat: Infinity as any, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(30, 28, 28, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 28, 28, 0.5) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
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
            Especialidades da <span className="text-[#7c3aed]">SparkLab</span>
          </h2>
          <p className="text-xl text-[#5a5753] max-w-2xl mx-auto leading-relaxed">
            Foco técnico em tecnologias modernas para entregar produtos digitais
            sólidos, performáticos e escaláveis.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                // Adicionei shadow-glow personalizado
                className="bg-[#e4e0d7] p-10 rounded-2xl border border-[#e4e0d7] hover:border-[#7c3aed] transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] group"
              >
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-8 border transition-all duration-300"
                  style={{
                    backgroundColor: `${service.color}15`,
                    borderColor: `${service.color}30`,
                  }}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }} // Faísca mais dinâmica
                >
                  <Icon size={32} style={{ color: service.color }} />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-[#1e1c1c] flex items-center gap-2">
                  {service.title}{" "}
                  <Zap size={20} className="text-[#7c3aed] opacity-50" />
                </h3>
                <p className="text-[#5a5753] leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  className="mt-8 h-1 rounded-full group-hover:scale-x-110 transition-transform origin-left"
                  style={{ backgroundColor: service.color }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}