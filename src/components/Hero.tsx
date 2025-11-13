import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5517996570202", "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Profissionais de negócios"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
            Recuperamos o que é seu.{" "}
            <span className="text-primary">Com respeito, estratégia e resultado.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
            Na <span className="font-semibold text-foreground">ABRA – Assessoria em Cobrança Ltda.</span>, 
            ajudamos empresas a reduzirem a inadimplência com métodos modernos, transparentes e 100% dentro da lei.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button variant="whatsapp" size="xl" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Fale agora com um especialista
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToContact}>
              <FileText className="w-5 h-5" />
              Solicite uma proposta
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
