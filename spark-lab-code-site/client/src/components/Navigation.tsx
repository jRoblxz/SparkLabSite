import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, navigate] = useLocation();

  // Detecta o scroll para aplicar o efeito "Glass" apenas quando a página desce
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "#about" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleContactClick = () => {
    setIsOpen(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled || isOpen
          ? "bg-[#1e1c1c]/80 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2"
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo com animação de pulso sutil no hover */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span
              onClick={handleHomeClick}
              className="cursor-pointer h-12 md:h-16 flex items-center group"
            >
              <img
                src="/logo_branca.png"
                alt="SparkLab"
                className="h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map(item => (
              <motion.a
                key={item.label}
                variants={itemVariants}
                href={item.href}
                className="text-[#e4e0d7] font-medium hover:text-[#7c3aed] transition-colors duration-300 relative group"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7c3aed] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#7c3aed]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}

            {/* Botão Elétrico Desktop */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="px-6 py-2.5 bg-[#7c3aed] text-white font-medium rounded-xl hover:bg-[#6d28d9] transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
            >
              Começar Projeto <Zap size={16} className="fill-white" />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#e4e0d7] hover:text-[#7c3aed] transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation com transição fluida */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-6 border-t border-white/10 mt-2">
                {navItems.map(item => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[#e4e0d7] text-lg font-medium hover:text-[#7c3aed] px-2 transition-colors duration-300"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.button
                  onClick={handleContactClick}
                  className="mt-4 px-6 py-4 mx-2 bg-[#7c3aed] text-white font-bold rounded-xl hover:bg-[#6d28d9] transition-colors text-center flex items-center justify-center gap-2"
                >
                  Começar Projeto <Zap size={18} className="fill-white" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
