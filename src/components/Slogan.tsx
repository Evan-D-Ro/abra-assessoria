import heroBusiness from "@/assets/hero-business.jpg";

const Slogan = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0c2947" }}
    >
      {/* IMAGEM DE FUNDO */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBusiness})`,
          opacity: 0.25, // controla a força da imagem
        }}
      ></div>

      {/* OVERLAY DE GRADIENTE (mantido por cima da imagem) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(209,160,84,0.15), rgba(12,41,71,0.45))",
        }}
      ></div>

      {/* CONTEÚDO */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">

          {/* Ícone */}
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto"
              fill="#d1a054"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-[#f6efe8]">
            Seu crédito recuperado, sua tranquilidade garantida.
          </h2>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#f6efe8]/80">
            Transformando inadimplência em oportunidade de recuperação com ética e eficiência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
