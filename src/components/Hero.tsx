import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Trusted Partner for
                <span className="text-primary block">Financial Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reliable, affordable bookkeeping, payroll, and tax solutions across Canada and the U.S. 
                Let us handle your finances while you focus on growing your business.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                <Calendar className="h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Services
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Serving clients across Canada & United States</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Professional financial services" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;