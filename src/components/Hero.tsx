import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20 shadow-sm">
            🏆 Certified Tax Professional
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
          Your Financial <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400">Success Partner</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto mb-10 drop-shadow">
          Bookkeeping, payroll, and tax expertise for modern businesses in Canada and the U.S.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Button onClick={scrollToCalendly} size="lg" className="text-base px-8 py-4 bg-white/10 dark:bg-white/5 text-white border border-white/20 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all duration-200 font-semibold">
            <Calendar className="h-5 w-5 mr-2" />
            Book Free Consultation
          </Button>
          <Button onClick={scrollToServices} size="lg" className="text-base px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all duration-200 font-semibold">
            Explore Services
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-2 text-white/80">
          <MapPin className="h-5 w-5" />
          <span className="text-base">Serving clients across Canada & United States</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;