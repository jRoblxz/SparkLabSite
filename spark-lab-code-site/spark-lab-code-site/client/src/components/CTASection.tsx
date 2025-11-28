import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@sparklabcode.com',
      href: 'mailto:contato@sparklabcode.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, SP - Brasil',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#e4e0d7] relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/cta-background.png)',
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
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-lg text-[#5a5753] max-w-2xl mx-auto">
            Tem um projeto em mente? Entre em contato conosco e vamos transformar
            suas ideias em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-[#1e1c1c] mb-6">
              Informações de Contato
            </h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#f5f3f0] transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#7c3aed] text-white">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#5a5753]">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-[#1e1c1c]">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <p className="text-sm font-medium text-[#5a5753] mb-4">
                Siga-nos nas redes sociais
              </p>
              <div className="flex gap-4">
                {['LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-[#1e1c1c] text-[#e4e0d7] flex items-center justify-center hover:bg-[#7c3aed] transition-colors duration-300"
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
          >
            <div>
              <label className="block text-sm font-medium text-[#1e1c1c] mb-2">
                Nome
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#d4d0c8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition-all duration-300"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e1c1c] mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#d4d0c8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e1c1c] mb-2">
                Mensagem
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-[#d4d0c8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition-all duration-300 resize-none"
                placeholder="Descreva seu projeto..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-[#7c3aed] text-white font-semibold rounded-lg hover:bg-[#6d28d9] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Enviar Mensagem
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
