import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [, navigate] = useLocation();

  // Removi o 'Contato' daqui para transformá-lo em um botão de destaque
  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#about' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleHomeClick = () => {
    // Rola para o topo de forma suave. Se estiver em outra página, use o navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleContactClick = () => {
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1e1c1c]/90 backdrop-blur-md border-b border-white/10 shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span onClick={handleHomeClick} className="cursor-pointer h-20 flex items-center">
              <img src="/logo_branca.png" alt="Spark" className="h-full w-auto" />
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                variants={itemVariants}
                href={item.href}
                className="text-[#e4e0d7] font-medium hover:text-[#7c3aed] transition-colors duration-300 relative group"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7c3aed] group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}

            {/* Botão de Destaque Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="px-6 py-2.5 bg-[#7c3aed] text-white font-medium rounded-lg hover:bg-[#6d28d9] transition-colors shadow-lg shadow-[#7c3aed]/20"
            >
              Começar Projeto
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button - CORRIGIDO: text-[#e4e0d7] */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#e4e0d7] hover:text-[#7c3aed] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          {/* Adicionada uma borda sutil para separar o menu do header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            className="flex flex-col space-y-4 py-6 border-t border-white/10"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                variants={itemVariants}
                href={item.href}
                onClick={() => setIsOpen(false)}
                // CORRIGIDO: text-[#e4e0d7] para ficar visível no fundo escuro
                className="text-[#e4e0d7] text-lg font-medium hover:text-[#7c3aed] px-2 transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Botão de Destaque Mobile */}
            <motion.button
              onClick={handleContactClick}
              className="mt-4 px-6 py-3 mx-2 bg-[#7c3aed] text-white font-medium rounded-lg hover:bg-[#6d28d9] transition-colors text-center"
            >
              Começar Projeto
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}