import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/dbbookstax', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero-rich overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="w-[95%] max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          <div className="space-y-6 md:space-y-8 animate-slide-in-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block px-3 py-2 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-semibold rounded-full border border-white/30 shadow-lg animate-fade-up">
                🏆 Certified Tax Professional
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Your Financial
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 block">Success Partner</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-lg">
                Expert bookkeeping, payroll, and tax solutions for businesses across Canada and the U.S. 
                Professional, reliable, and tailored to your success.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button onClick={openCalendly} size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-gradient-white text-gray-900 font-semibold border-0 hover:shadow-xl hover:scale-105 hover-lift animate-scale-in shadow-lg rounded-xl transition-all duration-300">
                <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button onClick={scrollToServices} size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-transparent text-white border-2 border-white hover:bg-gradient-white hover:text-gray-900 hover:scale-105 hover-lift animate-scale-in font-semibold rounded-xl transition-all duration-300">
                Explore Services
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 text-white/70">
              <MapPin className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base lg:text-lg">Serving clients across Canada & United States</span>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right mt-8 lg:mt-0">
            <div className="relative">
              <div className="glass-professional rounded-2xl md:rounded-3xl overflow-hidden hover-lift">
                <img 
                  src={heroImage} 
                  alt="Professional financial services" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 glass-professional rounded-xl md:rounded-2xl p-3 md:p-4 animate-fade-up">
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs md:text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-professional rounded-xl md:rounded-2xl p-3 md:p-4 animate-fade-up delay-300">
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;