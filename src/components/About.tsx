import { Eye, Target, Award } from "lucide-react";
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

        </div>
      </div>
    </section>
  );
};

export default About;
