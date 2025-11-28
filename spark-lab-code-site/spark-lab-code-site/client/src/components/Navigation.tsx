import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <nav className="fixed top-0 w-full bg-[#e4e0d7] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img src="/logo.png" alt="Spark Lab Code" className="h-10 w-auto" />
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
                className="text-[#1e1c1c] font-medium hover:text-[#7c3aed] transition-colors duration-300 relative group"
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7c3aed] group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1e1c1c]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            className="flex flex-col space-y-4 py-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                variants={itemVariants}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[#1e1c1c] font-medium hover:text-[#7c3aed] transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}
