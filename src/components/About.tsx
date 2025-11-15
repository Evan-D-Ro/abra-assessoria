import { Eye, Target, Award } from "lucide-react";
import heroBusiness from "@/assets/2.jpg";

const items = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Recuperar valores com eficiência, ética e tecnologia, preservando relacionamentos e promovendo a saúde financeira de nossos clientes.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência nacional em cobrança extrajudicial moderna e humanizada, reconhecida pela excelência em resultados e respeito ao consumidor.",
  },
  {
    icon: Award,
    title: "Valores",
    description:
      "Transparência, eficiência, ética, sigilo e respeito. Acreditamos que resultados sólidos só são alcançados com integridade e profissionalismo.",
  },
];

const About = () => {
  return (
    <section id="quem-somos" className="py-20 bg-[#f6efe8]">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* TÍTULO CENTRALIZADO NO TOPO */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2947] mb-4">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-[#ceb14d] mx-auto rounded"></div>
        </div>

        {/* IMAGEM + TEXTO */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative animate-fade-in-up">
            <img
              src={heroBusiness}
              alt="Equipe de cobrança"
              className="rounded-2xl shadow-lg object-cover w-full h-[420px]"
            />
            <div className="absolute inset-0 rounded-2xl bg-[#0c2947]/20"></div>
          </div>

          <div className="animate-fade-in-up">
            <p className="text-[#0c2947]/80 leading-relaxed mb-6 text-justify">
              A <span className="font-semibold text-[#0c2947]">ABRA – Assessoria em Cobrança Ltda.</span> é especializada em
              recuperação de crédito e gestão de inadimplência. Trabalhamos para
              recuperar valores com eficiência e respeito, preservando o bom
              relacionamento entre credor e cliente.
            </p>

            <p className="text-[#0c2947]/80 leading-relaxed text-justify">
              Atuamos com ética, transparência e técnicas modernas, unindo
              inteligência financeira, comunicação estratégica e negociação
              profissional.
            </p>
          </div>
        </div>

        {/* MVV ABAIXO DE TUDO */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-sm border border-[#e5dccf] animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#ceb14d]/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-[#ceb14d]" />
                </div>

                <h3 className="text-xl font-bold text-[#0c2947]">
                  {item.title}
                </h3>
              </div>


              <p className="text-[#0c2947]/70 leading-relaxed text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
