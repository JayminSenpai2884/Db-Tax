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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 animate-fade-up">
                🏆 Trusted Cross-Border Tax Experts
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Your Financial
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 block">Success Partner</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Expert bookkeeping, payroll, and tax solutions for businesses across Canada and the U.S. 
                Professional, reliable, and tailored to your success.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={openCalendly} variant="cta" size="lg" className="text-lg px-8 py-6 hover-lift animate-scale-in">
                <Calendar className="h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button onClick={scrollToServices} variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 hover-lift animate-scale-in">
                Explore Services
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 text-white/70">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Serving clients across Canada & United States</span>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="glass-card rounded-3xl overflow-hidden shadow-floating hover-lift">
                <img 
                  src={heroImage} 
                  alt="Professional financial services" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 glass-card rounded-2xl p-4 animate-fade-up">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 animate-fade-up delay-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
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