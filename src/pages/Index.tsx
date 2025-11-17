import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Mission from "@/components/Mission";
import Slogan from "@/components/Slogan";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Benefits />

      <Services />
      <FAQ />
      <Slogan />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
