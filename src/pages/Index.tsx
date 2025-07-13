import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <TechStack />
    </div>
  );
};

export default Index;
