import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "A cobrança é feita com respeito?",
    answer:
      "Sim. Seguimos rigorosamente o Código de Defesa do Consumidor, sem constrangimento. Nossa abordagem é profissional, ética e humanizada, sempre buscando a melhor solução para todas as partes envolvidas.",
  },
  {
    question: "Quanto tempo leva para recuperar um crédito?",
    answer:
      "Varia conforme perfil do devedor, mas muitos casos se resolvem nas primeiras 48–72 horas. Trabalhamos com agilidade e estratégias comprovadas para maximizar a recuperação no menor tempo possível.",
  },
  {
    question: "A empresa atende todo o Brasil?",
    answer:
      "Sim, nossa atuação é nacional. Atendemos empresas de todos os estados brasileiros com a mesma qualidade e eficiência.",
  },
  {
    question: "Como acompanho os resultados?",
    answer:
      "O cliente recebe relatórios completos de desempenho e evolução das cobranças. Mantemos total transparência sobre todas as ações realizadas e resultados obtidos.",
  },
  {
    question: "Qual o diferencial da ABRA?",
    answer:
      "Combinamos tecnologia, experiência e abordagem humanizada. Nossa metodologia une inteligência financeira, comunicação estratégica e negociação especializada, sempre dentro da lei.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-20"
      style={{ backgroundColor: "#0c2947" }} // Fundo base solicitado
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* Título */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f6efe8] mb-4">
              Perguntas Frequentes
            </h2>

            {/* Linha dourada */}
            <div className="w-20 h-1 mx-auto rounded mb-6"
              style={{ backgroundColor: "#d1a054" }}
            ></div>

            <p className="text-[#e8e1d9] opacity-90">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          {/* Accordion */}
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 animate-fade-in-up"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                  rounded-xl overflow-hidden

                  /* Glass suave sobre fundo escuro */
                  bg-white/10 backdrop-blur-xl

                  border border-[#d1a054]/20 shadow-sm
                  transition-all
                  hover:border-[#d1a054]/40 hover:shadow-md
                "
              >
                <AccordionTrigger
                  className="
                    text-left font-semibold px-4 py-4 text-[#f6efe8]
                    transition-all

                    hover:text-[#d1a054]
                    data-[state=open]:text-[#d1a054]

                    [&>svg]:text-[#d1a054]
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    leading-relaxed px-4 pb-4
                    text-[#e8e1d9]

                    animate-fade-in-up
                  "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
