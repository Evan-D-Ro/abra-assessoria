import { CheckCircle2, TrendingUp, Users, MapPin, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: TrendingUp,
    title: "Cobrança extrajudicial rápida e eficiente",
  },
  {
    icon: Users,
    title: "Negociação humanizada e estratégica",
  },
  {
    icon: CheckCircle2,
    title: "Redução comprovada da inadimplência",
  },
  {
    icon: MapPin,
    title: "Atuação em todo o Brasil",
  },
  {
    icon: FileCheck,
    title: "Relatórios completos e acompanhamento em tempo real",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a ABRA?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
