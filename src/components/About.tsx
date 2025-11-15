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
    <section id="quem-somos" className="py-20 bg-[#f6efe8]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Título */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2947] mb-4">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-[#ceb14d] mx-auto rounded mb-8"></div>
          </div>

          {/* Texto */}
          <div className="prose prose-lg max-w-none mb-16 animate-fade-in-up">
            <p className="text-[#0c2947]/80 text-center leading-relaxed mb-6">
              A <span className="font-semibold text-[#0c2947]">ABRA – Assessoria em Cobrança Ltda.</span> é uma empresa 
              especializada em recuperação de crédito e gestão de inadimplência.
              Nossa missão é recuperar valores de forma eficiente, preservando o
              relacionamento entre credor e cliente.
            </p>
            
            <p className="text-[#0c2947]/80 text-center leading-relaxed">
              Atuamos com ética, transparência e técnicas modernas, unindo
              inteligência financeira, comunicação estratégica e negociação
              profissional.
            </p>
          </div>

          {/* Pilares */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="
                  p-10 text-center rounded-xl bg-white shadow-md 
                  border border-[#ceb14d]/30 hover:shadow-2xl 
                  hover:border-[#ceb14d]/60 transition-all duration-300 
                  hover:scale-105 animate-fade-in-up
                "
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-full 
                                bg-[#ceb14d]/20 flex items-center justify-center">
                  <pillar.icon className="w-10 h-10 text-[#ceb14d]" />
                </div>

                <h3 className="text-xl font-bold text-[#0c2947] mb-3">
                  {pillar.title}
                </h3>

                <p className="text-[#0c2947]/70">
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
