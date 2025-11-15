import { Scale, Handshake, TrendingDown, MapPin, FileText, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import background from "@/assets/5.png";
const services = [
  {
    icon: Scale,
    title: "Cobrança Extrajudicial",
    description: "Atuação ágil e estratégica para recuperar valores sem processo judicial.",
    features: [
      "Contato via telefone, WhatsApp, e-mail e notificações",
      "Identificação e qualificação do devedor",
      "Acordos personalizados",
      "Relatórios completos",
    ],
  },
  {
    icon: Handshake,
    title: "Negociação de Dívidas",
    description: "Estratégias eficientes para acordos rápidos e seguros.",
    features: ["Simulação de propostas", "Condições flexíveis", "Registro formal de acordos"],
  },
  {
    icon: TrendingDown,
    title: "Gestão de Inadimplência",
    description: "Para empresas que buscam saúde financeira.",
    features: ["Análise de carteira", "Mapeamento de inadimplentes", "Monitoramento contínuo"],
  },
  {
    icon: MapPin,
    title: "Localização de Devedores",
    description:
      "Utilização de ferramentas profissionais para encontrar clientes desaparecidos ou com contato desatualizado.",
    features: [],
  },
  {
    icon: FileText,
    title: "Notificações Extrajudiciais",
    description: "Envio de notificações formais reforçando a exigibilidade da dívida.",
    features: [],
  },
  {
    icon: ShieldCheck,
    title: "Proteção Jurídica",
    description: "Garantia de conformidade legal em todas as etapas da cobrança.",
    features: [],
  },

];

const Services = () => {
  return (
    <section
      id="servicos"
      className="
        relative py-20
        bg-[#f6efe8] from-secondary/10 to-secondary/30
      "
    >
      {/* IMAGEM DE FUNDO */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
          opacity: 0.25, // controla a força da imagem
        }}
      ></div>

      {/* Bolhas suaves como no About */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl top-0 left-0"></div>
        <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 !text-[#0c2947]">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-[#ceb14d] mx-auto rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em recuperação de crédito e gestão de inadimplência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="
                p-8 
                rounded-xl
                transition-all duration-500 
                animate-fade-in-up

                /* Tema inspirado no About */
                bg-white/40 dark:bg-black/20
                backdrop-blur-xl
                border border-white/20 dark:border-white/10
                shadow-md hover:shadow-xl
                hover:-translate-y-1
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mb-6 rounded-lg bg-[#ceb14d]/20 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-[#ceb14d]" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 !text-[#0c2947]">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
