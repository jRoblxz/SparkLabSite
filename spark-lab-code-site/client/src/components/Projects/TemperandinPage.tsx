import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  ShoppingCart,
  PieChart,
  MessageCircle,
} from "lucide-react";
import ImageCompare from "../ImageCompare";

export default function TemperandinPage() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Controle de Estoque Inteligente",
      description:
        "Baixa automática de produtos a cada venda. Saiba exatamente o que repor e quando, evitando desperdício de insumos ou falta de mercadoria na prateleira.",
    },
    {
      icon: TrendingUp,
      title: "Gestão de Vendas (PDV)",
      description:
        "Interface rápida para registro de pedidos e vendas. Reduza o tempo de espera do seu cliente e tenha 100% de precisão na hora de fechar o caixa.",
    },
    {
      icon: PieChart,
      title: "Análise Financeira (Dashboards)",
      description:
        "Painéis visuais que mostram o lucro real do dia, itens mais vendidos e fluxo de despesas. Tome decisões comerciais baseadas em dados, não em palpites.",
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

      {/* Hero Section do Produto */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-[#7c3aed]/10 text-[#7c3aed] rounded-full font-bold text-sm border border-[#7c3aed]/20"
            >
              Sistema de Gestão e Vendas
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              O fim da desorganização no seu{" "}
              <span className="text-[#7c3aed]">Negócio.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#d4d0c8]"
            >
              O TemperAndin foi desenhado para resolver a maior dor do comércio
              moderno: a falta de controle exato sobre o estoque, fluxo de caixa
              e lucro diário.
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
              beforeImage="/temperandin-before.png" // Garanta que essa imagem existe na pasta public
              afterImage="/temperandin.png"
              beforeLabel="Planilhas e Desorganização"
              afterLabel="Gestão TemperAndin"
            />
          </motion.div>
        </div>
      </section>

      {/* O Problema vs A Solução */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-6">
                O Problema do Mercado
              </h3>
              <p className="text-[#d4d0c8] leading-relaxed mb-4">
                Seja em um restaurante, distribuidora ou loja física, a maioria
                dos donos controla o estoque no "olho" e as finanças em
                cadernos. Isso gera furos de caixa invisíveis, compras de
                mercadorias desnecessárias, e uma rotina estressante para tentar
                fechar as contas no final do mês.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#7c3aed] mb-6">
                A Solução SparkLab
              </h3>
              <p className="text-[#d4d0c8] leading-relaxed mb-4">
                Desenvolvemos uma plataforma em nuvem totalmente adaptável. Cada
                venda desconta automaticamente o item do seu estoque. Você abre
                o sistema e vê de forma clara e visual: o que está acabando,
                quanto de lucro o dia rendeu e de onde vem a maior parte do seu
                faturamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Como o sistema trabalha por você
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
            Pronto para profissionalizar sua gestão?
          </h2>
          <p className="text-lg mb-10 text-white/80">
            Agende uma demonstração gratuita e veja como podemos adaptar e
            customizar o sistema para a realidade do seu comércio.
          </p>
          <a
            href="https://wa.me/5518996653079?text=Olá, quero agendar uma demonstração do sistema de gestão e vendas para o meu negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#7c3aed] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-2xl"
          >
            Agendar Demonstração <MessageCircle size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
