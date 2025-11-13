import { Scale, Handshake, TrendingDown, MapPin, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    features: [
      "Simulação de propostas",
      "Condições flexíveis",
      "Registro formal de acordos",
    ],
  },
  {
    icon: TrendingDown,
    title: "Gestão de Inadimplência",
    description: "Para empresas que buscam saúde financeira.",
    features: [
      "Análise de carteira",
      "Mapeamento de inadimplentes",
      "Monitoramento contínuo",
    ],
  },
  {
    icon: MapPin,
    title: "Localização de Devedores",
    description: "Utilização de ferramentas profissionais para encontrar clientes desaparecidos ou com contato desatualizado.",
    features: [],
  },
  {
    icon: FileText,
    title: "Notificações Extrajudiciais",
    description: "Envio de notificações formais reforçando a exigibilidade da dívida.",
    features: [],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em recuperação de crédito e gestão de inadimplência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mb-6 rounded-lg bg-primary/10 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
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
