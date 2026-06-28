import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarCheck,
  Star,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import ImageCompare from "../ImageCompare";

export default function BarberflowPage() {
  const features = [
    {
      icon: CalendarCheck,
      title: "Agenda Online 24/7",
      description:
        "O seu cliente agenda o horário sozinho através de um link. Diga adeus às interrupções no meio do corte para responder mensagens no WhatsApp.",
    },
    {
      icon: Star,
      title: "Gestão de Clientes VIPs",
      description:
        "Sistema inteligente de níveis de clientes. Identifique quem frequenta mais, ofereça vantagens automáticas e crie um programa de fidelidade real.",
    },
    {
      icon: CreditCard,
      title: "Gateway de Pagamento",
      description:
        "Integração para recebimentos via Pix ou Cartão diretamente no agendamento, diminuindo drasticamente as faltas (no-shows) de última hora.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1e1c1c] text-[#e4e0d7] font-spartan pt-20 selection:bg-[#7c3aed] selection:text-white">
      {/* Botão Voltar */}
      <header className="fixed top-0 w-full bg-[#1e1c1c]/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="/#portfolio"
              className="group flex items-center gap-2 text-[#d4d0c8] hover:text-[#7c3aed] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#7c3aed]/10 transition-colors">
                <ArrowLeft size={20} />
              </div>
              <span className="hidden sm:block font-medium">
                Voltar aos Projetos
              </span>
            </a>
          </div>

          {/* Logo da SparkLab no centro/direita */}
          <a href="/" className="h-12 flex items-center">
            {/* Utilize a imagem real da sua logo aqui */}
            <img
              src="/logo_branca.png"
              alt="SparkLab"
              className="h-full w-auto object-contain"
            />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7c3aed] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-[#7c3aed]/10 text-[#7c3aed] rounded-full font-bold text-sm border border-[#7c3aed]/20"
            >
              ERP & Agendamento para Barbearias
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Escale sua Barbearia no{" "}
              <span className="text-[#7c3aed]">Piloto Automático.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#d4d0c8]"
            >
              O BarberFlow centraliza sua agenda, fideliza seus melhores
              clientes e garante o controle financeiro que o seu salão precisa
              para crescer.
            </motion.p>
          </div>

          {/* Imagem Principal / Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#2a2828] aspect-[4/3] md:aspect-video max-w-5xl mx-auto"
          >
            <ImageCompare
              beforeImage="/barberflow-before.png"
              afterImage="/barberflow.png"
              beforeLabel="Agenda de Papel / WhatsApp"
              afterLabel="Sistema BarberFlow"
            />
            {/* Remova aquela div de gradiente que ficava aqui, o ImageCompare já cuida de tudo */}
          </motion.div>
        </div>
      </section>

      {/* O Problema vs A Solução */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-6">
                O Gargalo do Atendimento
              </h3>
              <p className="text-[#d4d0c8] leading-relaxed mb-4">
                Você perde clientes porque demora a responder no WhatsApp. Você
                perde dinheiro quando o cliente falta no horário de pico. E você
                não sabe quem são seus clientes mais lucrativos porque não tem
                um histórico organizado.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#7c3aed] mb-6">
                A Gestão Profissional
              </h3>
              <p className="text-[#d4d0c8] leading-relaxed mb-4">
                Com o BarberFlow, o processo é automatizado. O cliente acessa
                seu link exclusivo, vê os horários disponíveis em tempo real,
                faz o agendamento e o sistema cuida do resto. Menos tempo no
                celular, mais tempo faturando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Tudo que seu espaço precisa
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10"
              >
                <div className="w-14 h-14 bg-[#7c3aed]/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={28} className="text-[#7c3aed]" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-[#d4d0c8]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#7c3aed] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Profissionalize seu atendimento hoje
          </h2>
          <p className="text-lg mb-10 text-white/80">
            Descubra como o BarberFlow pode dobrar a retenção dos seus clientes
            e organizar sua vida financeira.
          </p>
          <a
            href="https://wa.me/5518996653079?text=Olá, quero conhecer o sistema BarberFlow para a minha barbearia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#7c3aed] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-2xl"
          >
            Falar com um Consultor <MessageCircle size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
