import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const items = [
  {
    icon: Target,
    title: "Missão",
    description: "Recuperar valores com eficiência, ética e tecnologia, preservando relacionamentos e promovendo a saúde financeira de nossos clientes.",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser referência nacional em cobrança extrajudicial moderna e humanizada, reconhecida pela excelência em resultados e respeito ao consumidor.",
  },
  {
    icon: Award,
    title: "Valores",
    description: "Transparência, eficiência, ética, sigilo e respeito. Acreditamos que resultados sólidos só são alcançados com integridade e profissionalismo.",
  },
];

const Mission = () => {
  return (
    <section className="py-20 bg-[#f6efe8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 bg-card border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-[#ceb14d]/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#ceb14d]" />
                </div>
                <h3 className="!text-[#0c2947] text-2xl font-bold text-foreground mb-4 ">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
