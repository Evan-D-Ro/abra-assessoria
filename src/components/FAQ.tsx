import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "A cobrança é feita com respeito?",
    answer: "Sim. Seguimos rigorosamente o Código de Defesa do Consumidor, sem constrangimento. Nossa abordagem é profissional, ética e humanizada, sempre buscando a melhor solução para todas as partes envolvidas.",
  },
  {
    question: "Quanto tempo leva para recuperar um crédito?",
    answer: "Varia conforme perfil do devedor, mas muitos casos se resolvem nas primeiras 48–72 horas. Trabalhamos com agilidade e estratégias comprovadas para maximizar a recuperação no menor tempo possível.",
  },
  {
    question: "A empresa atende todo o Brasil?",
    answer: "Sim, nossa atuação é nacional. Atendemos empresas de todos os estados brasileiros com a mesma qualidade e eficiência.",
  },
  {
    question: "Como acompanho os resultados?",
    answer: "O cliente recebe relatórios completos de desempenho e evolução das cobranças. Mantemos total transparência sobre todas as ações realizadas e resultados obtidos.",
  },
  {
    question: "Qual o diferencial da ABRA?",
    answer: "Combinamos tecnologia, experiência e abordagem humanizada. Nossa metodologia une inteligência financeira, comunicação estratégica e negociação especializada, sempre dentro da lei.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded mb-6"></div>
            <p className="text-muted-foreground">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full animate-fade-in-up">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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
