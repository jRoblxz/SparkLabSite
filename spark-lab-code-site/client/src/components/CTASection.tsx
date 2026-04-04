import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { useState } from "react";
//import BtnVoltar from "@/components/ui/BtnVoltar";
import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/500.css";
import "@fontsource/league-spartan/700.css";
// import  Footer  from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext"; // Importar hook

export default function CTASection() {
  const { t } = useLanguage(); // Usar hook
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("Subject", formData.Subject);
      form.append("message", formData.message);

      const response = await fetch(
        "https://joaoroblez.sparklab.dev.br/api/contact.php",
        {
          method: "POST",
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error("Erro no servidor");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Erro ao enviar");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", Subject: "", message: "" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   setError(null);
  //   setSuccess(false);

  //   try {
  //     // const response = await fetch("/api/vendor/contact.php", {
  //     const response = await fetch("https://joaoroblez.sparklab.dev.br/api/contact.php", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Requested-With": "XMLHttpRequest",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (!response.ok || !data.success) {
  //       throw new Error(data.message || "Erro ao enviar mensagem");
  //     }

  //     setSuccess(true);
  //     setFormData({ name: "", email: "", Subject: "", message: "" });
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   } catch (err: any) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  const [copied, setCopied] = useState(false);
  const email = "joaoroblez@sparklab.dev.br";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Movemos o array de contato para dentro do componente para acessar 't'
  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: "joaoroblez@sparklab.dev.br",
      href: "mailto:joaoroblez@sparklab.dev.br",
    },
    {
      icon: Phone,
      label: t.contact.labels.phone,
      value: "+55 (18) 99665-3079",
      href: "tel:+5518996653079",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 (14) 99665-3079",
      href: "https://wa.me/5514996653079", // Ajustei o href para WhatsApp Web/App
    },
    {
      icon: MapPin,
      label: t.contact.labels.location,
      value: "Presidente Prudente, SP - Brasil",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#e4e0d7] relative overflow-hidden font-spartan min-h-screen flex flex-col"
    >
      {/* <div className="absolute top-6 left-6 z-50">
        <BtnVoltar onClick={handleGoBack} />
      </div> */}

      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url(/cta-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1c1c] mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-[#5a5753] max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-[#1e1c1c] mb-6">
              {t.contact.infoTitle}
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

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-[#5a5753] mb-4">
                {t.contact.socialTitle}
              </p>
              <div className="flex gap-4">
                {/* Botões Sociais (Github, Copy Email, etc) - Mantidos iguais */}
                <a
                  href="https://github.com/jRoblxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212] transition-colors"
                >
                  <span className="absolute bottom-0 left-0 h-0 w-full bg-[#24262a] transition-all duration-300 ease-in-out group-hover:h-full"></span>
                  <svg
                    className="relative z-10 h-6 w-6 text-slate-400 transition-colors group-hover:text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <button
                  onClick={handleCopyEmail}
                  title={copied ? t.hero.emailCopied : t.hero.copyEmail}
                  className="cursor-pointer group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212] transition-colors border-none"
                >
                  <span
                    className={`absolute bottom-0 left-0 w-full transition-all duration-300 ease-in-out ${
                      copied
                        ? "bg-green-600 h-full"
                        : "bg-[#d00909] h-0 group-hover:h-full"
                    }`}
                  ></span>
                  <div className="relative z-10">
                    {copied ? (
                      <Check size={24} className="text-white animate-bounce" />
                    ) : (
                      <Mail
                        size={24}
                        className="text-slate-400 transition-colors group-hover:text-white"
                      />
                    )}
                  </div>
                </button>

                <a
                  href="https://linkedin.com/in/joaoroblez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212] transition-colors"
                >
                  <span className="absolute bottom-0 left-0 h-0 w-full bg-[#0A66C2] transition-all duration-300 ease-in-out group-hover:h-full"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="relative z-10 h-6 w-6 text-slate-400 transition-colors group-hover:text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/joaoroblxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212] transition-colors"
                >
                  <span className="absolute bottom-0 left-0 h-0 w-full bg-[linear-gradient(45deg,#405de6,#5b51db,#b33ab4,#c135b4,#e1306c,#fd1f1f)] transition-all duration-300 ease-in-out group-hover:h-full"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="relative z-10 h-6 w-6 text-slate-400 transition-colors group-hover:text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.046-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#1e1c1c] p-8 rounded-xl shadow-lg"
          >
            <div>
              <label className="block text-sm font-medium text-[#e4e0d7] mb-2">
                {t.contact.form.nameLabel}
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border text-[#e4e0d7] border-[#d4d0c8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition-all duration-300"
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#e4e0d7] mb-2">
                {t.contact.form.emailLabel}
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#d4d0c8] text-[#e4e0d7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition-all duration-300"
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#e4e0d7] mb-2">
                {t.contact.form.SubjectLabel}
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#d4d0c8] text-[#e4e0d7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition-all duration-300"
                placeholder={t.contact.form.SubjectPlaceholder}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#e4e0d7] mb-2">
                {t.contact.form.messageLabel}
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-[#d4d0c8] text-[#e4e0d7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition-all duration-300 resize-none"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>
            {loading && (
              <p className="text-yellow-400 text-sm">Enviando mensagem...</p>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {success && (
              <p className="text-green-500 text-sm">
                Mensagem enviada com sucesso!
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-[#7c3aed] text-white font-semibold rounded-lg hover:bg-[#6d28d9] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              {loading ? "Enviando..." : t.contact.form.btnSubmit}
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* <Footer /> */}
    </section>
  );
}
