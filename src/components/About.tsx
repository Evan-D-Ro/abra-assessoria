import { Shield, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: Shield,
    title: "Transparência",
    description: "Atuação clara e honesta em todos os processos",
  },
  {
    icon: Target,
    title: "Resultado",
    description: "Foco em recuperação efetiva de créditos",
  },
  {
    icon: Heart,
    title: "Respeito",
    description: "Tratamento humanizado com todos os clientes",
  },
];

const About = () => {
  return (
    <section id="quem-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quem Somos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none mb-16 animate-fade-in-up">
            <p className="text-muted-foreground text-center leading-relaxed mb-6">
              A <span className="font-semibold text-foreground">ABRA – Assessoria em Cobrança Ltda.</span> é uma empresa 
              especializada em recuperação de crédito e gestão de inadimplência. Nossa missão é recuperar valores de forma 
              eficiente, preservando o relacionamento entre credor e cliente.
            </p>
            
            <p className="text-muted-foreground text-center leading-relaxed">
              Com atuação ética, profissional e fundamentada na legislação vigente, utilizamos técnicas modernas de cobrança 
              que unem inteligência financeira, comunicação estratégica e negociação especializada.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
