import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">ABRA – Assessoria em Cobrança Ltda.</h3>
            <p className="text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-6">
              Especialistas em cobrança extrajudicial, recuperação de crédito e gestão de inadimplência.
              Atendimento em todo o Brasil. Atuação ética, segura e dentro dos parâmetros legais.
            </p>
          </div>

          {/* Address */}
          <div className="text-center mb-8 text-sm text-primary-foreground/80">
            <p className="mb-2">
              <strong>Endereço:</strong> Rua Voluntários de São Paulo, nº 3169 – Sala 13 – Centro
            </p>
            <p className="mb-2">CEP: 15015-910, São José do Rio Preto – SP</p>
            <p className="mb-2">
              <strong>CNPJ:</strong> 63.647.336/0001-60
            </p>
            <p>
              <strong>Razão Social:</strong> ABRA ASSESSORIA EM COBRANCA LTDA
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/70 border-t border-primary-foreground/20 pt-8">
            <p>&copy; {new Date().getFullYear()} ABRA Assessoria em Cobrança Ltda. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
