import { motion, Variants } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#1e1c1c] text-[#e4e0d7] pt-20 relative overflow-hidden">
      {/* Background Pattern - Modernized and Subtle */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute w-full h-full"
          animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
          transition={{ duration: 20, repeat: Infinity as any, ease: 'linear' }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 1px, rgba(0,0,0,0) 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#7c3aed] rounded-full mix-blend-screen filter blur-[150px] opacity-20"
          animate={{ x: [-100, 100, -100], y: [-100, 100, -100] }}
          transition={{ duration: 15, repeat: Infinity as any }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Content - Flutuando em um Glass Card */}
          <motion.div variants={itemVariants} className="space-y-6 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-900/10">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Código que resolve. <span className="text-[#7c3aed] relative">Software que transforma.<span className="absolute bottom-1 left-0 w-full h-1 bg-[#7c3aed]"></span></span>
            </h1>
            <p className="text-xl text-[#d4d0c8] leading-relaxed">
              Inovação técnica e design estratégico para dar vida à sua visão digital. Criamos sistemas inteligentes e interfaces que engajam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3.5 bg-[#7c3aed] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#6d28d9] transition-all duration-300 shadow-lg shadow-[#7c3aed]/30"
              >
                Começar Projeto <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="px-8 py-3.5 border-2 border-white/10 text-[#d4d0c8] font-semibold rounded-xl flex items-center justify-center hover:bg-white/5 transition-all duration-300"
              >
                Ver Portfólio
              </motion.a>
            </div>
          </motion.div>

          {/* Visual Element - Código e Spark */}
          <motion.div variants={itemVariants} className="hidden md:flex justify-center relative">
            <motion.div
              animate={{ rotate: [0, 5, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 10, repeat: Infinity as any }}
              className="w-96 h-96 border-4 border-[#7c3aed] rounded-full p-6 relative flex items-center justify-center group"
            >
              <motion.div
                className="absolute inset-0 bg-[#7c3aed]/10 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"
              />
              {/* <Code2 size={200} className="text-[#e4e0d7]/30" strokeWidth={1}/> */}
               <img src="/5.png" alt="Spark Icon" className="w-50 h-50" />
              <motion.div
                className="absolute top-10 right-10 w-16 h-16 bg-[#7c3aed] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity as any, ease: 'linear' }}
              >
                <span className="text-4xl font-bold text-white">
                  {/* <img src="/5.png" alt="Spark Icon" className="w-8 h-8" /> */}
                  <Code2 size={40} className="text-[#e4e0d7]/30" strokeWidth={1}/>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}