import { CheckCircle2, TrendingUp, Users, MapPin, FileCheck, ShieldCheck } from "lucide-react";
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
  {
    icon: ShieldCheck,
    title: "Conformidade legal e segurança em todas as etapas",
  },
];


const Benefits = () => {
  return (
    <section className="py-20 bg-[#0c2947]">
      <div className="container mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f6efe8] mb-4">
            Por que escolher a ABRA?
          </h2>
          <div className="w-24 h-1 bg-[#ceb14d] mx-auto rounded"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="
                p-6 rounded-xl border border-[#ceb14d]/20 
                bg-[#ceb14d]/10 backdrop-blur-sm shadow-md 
                hover:shadow-xl hover:border-[#ceb14d]/40 
                transition-all duration-300 hover:scale-105 animate-fade-in-up
              "
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center gap-4">

                {/* Ícone */}
                <div className="flex-shrink-0 w-14 h-14 rounded-lg 
                                bg-[#ceb14d]/15 flex items-center justify-center shadow-inner">
                  <benefit.icon className="w-7 h-7 text-[#ceb14d]" />
                </div>

                {/* Texto */}
                <div className="flex-1">
                  <h3 className="font-semibold text-[#f6efe8] leading-snug">
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
