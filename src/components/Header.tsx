import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/Logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const goToClientArea = () => {
    window.open("https://wa.me/17991991818", "_blank");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-[#f6efe8] text-[#0c2947] shadow-md"
      )}
    >
      <div className="container mx-auto px-4">

        {/* GRID DE 3 COLUNAS */}
        <div className="flex md:grid md:grid-cols-3 items-center h-20 justify-between">

          {/* COLUNA 1 — LOGO */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-2"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
            </button>
          </div>

          {/* COLUNA 2 — MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 justify-center">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("quem-somos")}
              className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold"
            >
              Contato
            </button>
          </nav>

          {/* COLUNA 3 — ÁREA DO CLIENTE (desktop) + MENU MOBILE (mobile) */}
          <div className="flex justify-end items-center gap-3">

            {/* BOTÃO ÁREA DO CLIENTE – SOMENTE DESKTOP */}
            <button
              onClick={goToClientArea}
              className="hidden md:flex px-6 py-3 rounded-xl text-[#0c2947] font-bold bg-[#ceb14d] hover:bg-[#b99c3d] transition-all flex items-center gap-2 shadow-md"
            >
              <User className="w-5 h-5" />
              Fale conosco
            </button>

            {/* MENU MOBILE ICON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#0c2947]"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>

        {/* MENU MOBILE */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">

              <button
                onClick={() => scrollToSection("inicio")}
                className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold text-left py-2"
              >
                Início
              </button>

              <button
                onClick={() => scrollToSection("quem-somos")}
                className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold text-left py-2"
              >
                Quem Somos
              </button>

              <button
                onClick={() => scrollToSection("servicos")}
                className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold text-left py-2"
              >
                Serviços
              </button>

              <button
                onClick={() => scrollToSection("faq")}
                className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold text-left py-2"
              >
                FAQ
              </button>

              <button
                onClick={() => scrollToSection("contato")}
                className="text-[#0c2947] hover:text-[#ceb14d] transition-colors font-semibold text-left py-2"
              >
                Contato
              </button>

              {/* BOTÃO MOBILE ÁREA DO CLIENTE */}
              <button
                onClick={goToClientArea}
                className="mt-4 px-6 py-3 rounded-xl text-[#0c2947] font-bold bg-[#ceb14d] hover:bg-[#b99c3d] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <User className="w-5 h-5" />
                Fale conosco
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
