import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { useLocation } from 'wouter';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity as any,
      },
    },
  };

  // Use useLocation para obter a função navigate do Wouter
  const [, navigate] = useLocation();

  const handlePortfolioClick = () => {
    navigate('/portifolio'); // Use a função navigate do Wouter
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#e4e0d7] pt-24 overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-[#7c3aed] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity as any }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-[#1e1c1c] rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity as any, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center space-x-2 bg-[#f5f3f0] px-4 py-2 rounded-full"
              >
                <Code2 size={18} className="text-[#7c3aed]" />
                <span className="text-[#1e1c1c] font-medium text-sm">
                  Desenvolvimento de Software
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-[#1e1c1c] leading-tight">
                Transforme suas{' '}
                <motion.span
                  className="text-[#7c3aed]"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ideias
                </motion.span>{' '}
                em código
              </h1>

              <p className="text-lg text-[#5a5753] leading-relaxed">
                Criamos soluções de software inovadoras e personalizadas para
                transformar seu negócio. Com expertise em tecnologias modernas,
                entregamos qualidade, performance e escalabilidade.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1e1c1c] text-[#e4e0d7] font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#7c3aed] transition-colors duration-300"
              >
                Começar Projeto
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePortfolioClick}
                className="px-8 py-3 border-2 border-[#1e1c1c] text-[#1e1c1c] font-semibold rounded-lg hover:bg-[#1e1c1c] hover:text-[#e4e0d7] transition-all duration-300"
              >
                Ver Portfólio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative w-full h-full"
            >
              <img
                src="/hero-banner.png"
                alt="Software Development"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg"
            >
              <p className="text-[#1e1c1c] font-semibold">100+ Projetos</p>
              <p className="text-[#5a5753] text-sm">Entregues com sucesso</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-8 -right-8 bg-[#7c3aed] text-white p-4 rounded-lg shadow-lg"
            >
              <p className="font-semibold">5+ Anos</p>
              <p className="text-sm opacity-90">De experiência</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
