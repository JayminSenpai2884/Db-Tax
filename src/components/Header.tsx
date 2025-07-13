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
      <nav className="glass-navbar rounded-2xl px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30 border border-white/20">
              <span className="text-white font-bold text-sm">DB</span>
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent hidden sm:block">Bookkeeping & Tax</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={scrollToServices}
              className="text-gray-700 hover:text-primary transition-all duration-300 text-sm font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div className="flex items-center space-x-2 text-gray-700 text-sm glass-element px-3 py-1.5 rounded-lg">
              <Phone className="h-3 w-3 text-primary" />
              <span className="font-medium">647-896-7487</span>
            </div>
            <Button onClick={openCalendly} size="sm" className="text-sm bg-gradient-primary-glow text-white border border-white/20 rounded-xl hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary rounded-xl hover:bg-gray-100 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/30">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={scrollToServices}
                className="text-left text-gray-700 hover:text-primary transition-all duration-300 text-sm font-medium"
              >
                Services
              </button>
              <div className="flex items-center space-x-2 text-gray-700 text-sm glass-element px-3 py-2 rounded-lg">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">647-896-7487</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 text-sm glass-element px-3 py-2 rounded-lg">
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-medium">dbbookstax@gmail.com</span>
              </div>
                          <Button onClick={openCalendly} size="sm" className="w-fit bg-gradient-primary-glow text-white border border-white/20 rounded-xl hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300">
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