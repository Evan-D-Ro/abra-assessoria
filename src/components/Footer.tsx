import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo2 from "@/assets/logo3.png";

const Footer = () => {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: "#0c2947", color: "#f6efe8" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">

          {/* Logo */}
          <img
            src={logo2}
            alt="Logo ABRA"
            className="w-40 mb-4 opacity-90"
          />

          {/* Main Content */}
          <div className="text-center mb-10">
            <p className="leading-relaxed text-[#f6efe8]/80 max-w-3xl mx-auto">
              Especialistas em cobrança extrajudicial, recuperação de crédito e
              gestão de inadimplência. Atendimento em todo o Brasil.
              Atuação ética, segura e dentro dos parâmetros legais.
            </p>
          </div>

          {/* Address */}
          <div className="text-center mb-10 text-sm text-[#f6efe8]/70 space-y-1">
            <p>
              <strong className="text-[#f6efe8]">Endereço:</strong> Rua Voluntários
              de São Paulo, nº 3169 – Sala 13 – Centro
            </p>

            <p>CEP: 15015-910, São José do Rio Preto – SP</p>

            <p>
              <strong className="text-[#f6efe8]">CNPJ:</strong> 63.647.336/0001-60
            </p>

            <p>
              <strong className="text-[#f6efe8]">Razão Social:</strong> ABRA
              ASSESSORIA EM COBRANÇA LTDA
            </p>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-6 mb-12">
            {[
              { href: "https://facebook.com", icon: <Facebook className="w-5 h-5 text-[#f6efe8]" /> },
              { href: "https://instagram.com", icon: <Instagram className="w-5 h-5 text-[#f6efe8]" /> },
              { href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5 text-[#f6efe8]" /> },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#f6efe8]/10 hover:bg-[#f6efe8]/20 flex items-center justify-center transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-[#f6efe8]/60 border-t border-[#f6efe8]/20 pt-8 w-full">
            <p>
              &copy; {new Date().getFullYear()} ABRA Assessoria em Cobrança Ltda.
              Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
