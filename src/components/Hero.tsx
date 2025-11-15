import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from "@/assets/1.jpg";

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
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Profissionais de negócios"
          className="w-full h-full object-cover opacity-70"
        />

        {/* Overlay puxando para o #0c2947 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2947]/95 via-[#0c2947]/80 to-[#0c2947]/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up leading-tight text-[#f6efe8]">
            Recuperamos o que é seu.{" "}
            <span className="text-[#ceb14d]">
              Com respeito, estratégia e resultado.
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-fade-in-up leading-relaxed text-[#f6efe8]/90">
            Na{" "}
            <span className="font-semibold text-[#ceb14d]">
              ABRA – Assessoria em Cobrança Ltda.
            </span>
            , ajudamos empresas a reduzirem a inadimplência com métodos
            modernos, transparentes e 100% dentro da lei.
          </p>

          {/* Badges */}
          <div
            className="mt-12 mb-12 flex flex-wrap items-center justify-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            {/* Recuperação Financeira */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0c2947]/50 backdrop-blur-sm rounded-lg border border-[#ceb14d]/40 shadow-sm">
              <ArrowRight className="w-5 h-5 text-[#ceb14d]" />
              <span className="text-sm text-[#f6efe8]">
                Recuperação Financeira
              </span>
            </div>

            {/* Profissionalismo */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0c2947]/50 backdrop-blur-sm rounded-lg border border-[#ceb14d]/40 shadow-sm">
              <Award className="w-5 h-5 text-[#ceb14d]" />
              <span className="text-sm text-[#f6efe8]">
                Profissionalismo
              </span>
            </div>

            {/* Cobrança Ética e Legal */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0c2947]/50 backdrop-blur-sm rounded-lg border border-[#ceb14d]/40 shadow-sm">
              <Shield className="w-5 h-5 text-[#ceb14d]" />
              <span className="text-sm text-[#f6efe8]">
                Cobrança Ética e Legal
              </span>
            </div>


          </div>

          {/* CTA Button */}
          <div className="flex justify-center animate-fade-in-up">
            <button
              onClick={handleWhatsApp}
              className="
                flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold 
                bg-[#ceb14d] text-[#0c2947]
                shadow-md hover:bg-[#d5be5a] transition-all
              "
            >
              <FaWhatsapp className="text-xl" />
              Fale com um especialista
            </button>
          </div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0c2947] to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
