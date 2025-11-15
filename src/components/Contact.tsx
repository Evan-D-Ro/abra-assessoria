import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleWhatsApp = () => {
    window.open("https://wa.me/5517996570202", "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <section id="contato" className="py-24 bg-[#f6efe8] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ceb14d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0c2947]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0c2947]">
              Entre em Contato
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#ceb14d] to-[#ceb14d]/50 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#0c2947]/70 max-w-2xl mx-auto">
              Preencha o formulário abaixo para enviar sua mensagem
              ou entre em contato. Será um prazer atendê-lo(a)!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Contact Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact Card */}
              <Card className="p-8 bg-white border-2 border-[#ceb14d]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0c2947] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#ceb14d]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c2947]">Fale Agora</h3>
                </div>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-[#0c2947] hover:bg-[#0c2947]/90 text-white group transition-all duration-300"
                    onClick={handleWhatsApp}
                  >
                    <FaWhatsapp className="w-5 h-5 mr-2 text-[#ceb14d] group-hover:scale-110 transition-transform" />
                    WhatsApp: (17) 99657-0202
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-[#ceb14d] text-[#0c2947] hover:bg-[#ceb14d] hover:text-white group transition-all duration-300"
                    onClick={() =>
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Solicitar Proposta
                  </Button>
                </div>
              </Card>

              {/* Info Card */}
              <Card className="p-8 bg-gradient-to-br from-[#0c2947] to-[#0c2947]/90 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Informações</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#ceb14d]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ceb14d]/30 transition-colors">
                      <MapPin className="w-5 h-5 text-[#ceb14d]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Endereço</p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Rua Voluntários de São Paulo, nº 3169 – Sala 13
                        <br />
                        Centro, CEP: 15015-910
                        <br />
                        São José do Rio Preto – SP
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#ceb14d]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ceb14d]/30 transition-colors">
                      <Phone className="w-5 h-5 text-[#ceb14d]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Telefone</p>
                      <p className="text-white/80 text-sm">(17) 99657-0202</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Form */}
            <Card
              className="lg:col-span-3 p-8 md:p-10 bg-white border-2 border-[#ceb14d]/20 shadow-xl"
              id="contact-form"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#ceb14d] flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0c2947]">Envie sua Mensagem</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Nome *"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-[#f6efe8] border-[#ceb14d]/30 focus:border-[#ceb14d] text-[#0c2947] placeholder:text-[#0c2947]/50 h-12 ${errors.name ? "border-red-500" : ""
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="E-mail *"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-[#f6efe8] border-[#ceb14d]/30 focus:border-[#ceb14d] text-[#0c2947] placeholder:text-[#0c2947]/50 h-12 ${errors.email ? "border-red-500" : ""
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#f6efe8] border-[#ceb14d]/30 focus:border-[#ceb14d] text-[#0c2947] placeholder:text-[#0c2947]/50 h-12"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Mensagem *"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`bg-[#f6efe8] border-[#ceb14d]/30 focus:border-[#ceb14d] text-[#0c2947] placeholder:text-[#0c2947]/50 resize-none ${errors.message ? "border-red-500" : ""
                      }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-[#0c2947] hover:bg-[#0c2947]/90 text-white text-lg font-semibold group transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;