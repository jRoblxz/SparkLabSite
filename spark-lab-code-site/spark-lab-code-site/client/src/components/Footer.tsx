import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Empresa',
      links: ['Sobre Nós', 'Blog', 'Carreiras', 'Contato'],
    },
    {
      title: 'Serviços',
      links: ['Web Development', 'Mobile Apps', 'Consultoria', 'Suporte'],
    },
    {
      title: 'Recursos',
      links: ['Documentação', 'API', 'Comunidade', 'FAQ'],
    },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-[#1e1c1c] text-[#e4e0d7] py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#7c3aed] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity as any }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 size={28} className="text-[#7c3aed]" />
              <span className="text-2xl font-bold">Spark Lab Code</span>
            </div>
            <p className="text-[#d4d0c8]">
              Transformando ideias em soluções de software inovadoras e escaláveis.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-[#d4d0c8] hover:text-[#7c3aed] transition-colors duration-300"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent mb-8 origin-left"
        />

        {/* Bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p variants={itemVariants} className="text-[#d4d0c8]">
            © {currentYear} Spark Lab Code. Todos os direitos reservados.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 mt-4 md:mt-0"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-[#d4d0c8] hover:text-[#7c3aed] transition-colors duration-300"
            >
              Privacidade
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-[#d4d0c8] hover:text-[#7c3aed] transition-colors duration-300"
            >
              Termos
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-[#d4d0c8] hover:text-[#7c3aed] transition-colors duration-300"
            >
              Cookies
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
