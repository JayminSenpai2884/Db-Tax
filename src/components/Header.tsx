import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import dbLogo from "@/assets/db-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/dbbookstax', '_blank');
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav className="glass-card rounded-full px-6 py-3 shadow-floating">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={dbLogo} alt="DB Bookkeeping & Tax Services" className="h-8 w-auto" />
            <h1 className="text-lg font-bold text-primary hidden sm:block">DB Bookkeeping & Tax</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={scrollToServices}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Services
            </button>
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <Phone className="h-3 w-3" />
              <span>647-896-7487</span>
            </div>
            <Button onClick={openCalendly} variant="cta" size="sm" className="text-sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary rounded-full hover:bg-accent/50 transition-all"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border/20">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={scrollToServices}
                className="text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Services
              </button>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>647-896-7487</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4" />
                <span>dbbookstax@gmail.com</span>
              </div>
              <Button onClick={openCalendly} variant="cta" size="sm" className="w-fit">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;