import { motion } from 'framer-motion';
import { Code, Smartphone, Zap, Shield, BarChart3, Headphones } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas, responsivas e de alto desempenho com React, TypeScript e tecnologias atuais.',
      color: '#7c3aed',
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Apps nativos e cross-platform para iOS e Android com excelente experiência do usuário.',
      color: '#3b82f6',
    },
    {
      icon: Zap,
      title: 'Otimização de Performance',
      description: 'Análise e otimização de código para máxima velocidade e eficiência de recursos.',
      color: '#f59e0b',
    },
    {
      icon: Shield,
      title: 'Segurança & Compliance',
      description: 'Implementação de segurança robusta, criptografia e conformidade com regulamentações.',
      color: '#10b981',
    },
    {
      icon: BarChart3,
      title: 'Análise de Dados',
      description: 'Dashboards interativos e análise de dados para insights valiosos do seu negócio.',
      color: '#ef4444',
    },
    {
      icon: Headphones,
      title: 'Suporte & Manutenção',
      description: 'Suporte técnico contínuo, atualizações e manutenção preventiva para seus sistemas.',
      color: '#8b5cf6',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#e4e0d7] relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/services-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1c1c] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-[#5a5753] max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de desenvolvimento de
            software para atender todas as suas necessidades
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              >
                {/* Icon Background */}
                <motion.div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <Icon size={32} style={{ color: service.color }} />
                </motion.div>

                <h3 className="text-xl font-bold text-[#1e1c1c] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5a5753] leading-relaxed">
                  {service.description}
                </p>

                {/* Animated Border */}
                <motion.div
                  className="mt-6 h-1 rounded-full"
                  style={{ backgroundColor: service.color }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
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
