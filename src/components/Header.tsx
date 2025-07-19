import { Phone, Mail, Menu, X, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Logo = () => (
  <div className="flex items-center justify-center w-10 h-10">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="24" height="24" rx="7" fill="#fff" fillOpacity="0.0"/>
      <rect x="2" y="2" width="24" height="24" rx="7" stroke="#E5E7EB" strokeWidth="0"/>
      <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="'Inter',sans-serif" dy=".3em">DB</text>
    </svg>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed bg-white/5 backdrop-blur-xl top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav className={`backdrop-blur-xl bg-oxford_blue-400/30 shadow-lg rounded-2xl px-6 py-2 flex items-center justify-between ${atTop ? '' : 'border-none'}`}>
        <Logo />
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={scrollToServices}
            className="text-white hover:text-primary transition-all duration-200 text-sm font-medium px-2 py-1 rounded focus:outline-none focus:bg-white/10 drop-shadow-md"
          >
            Services
          </button>
          {/* Calendar Icon with no background box */}
          <button
            onClick={scrollToCalendly}
            className="flex items-center justify-center w-10 h-10 hover:scale-110 transition-transform duration-300"
            style={{ animation: 'bounce 1.2s 1' }}
            aria-label="Book Free Consultation"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
              <rect x="3" y="5" width="18" height="16" rx="4" fill="#c4b5fd" fillOpacity="0.15" />
              <rect x="3" y="5" width="18" height="16" rx="4" stroke="#c4b5fd" strokeWidth="1.5" />
              <rect x="7" y="2" width="2" height="4" rx="1" fill="#c4b5fd" />
              <rect x="15" y="2" width="2" height="4" rx="1" fill="#c4b5fd" />
              <rect x="7" y="10" width="2" height="2" rx="1" fill="#c4b5fd" />
              <rect x="11" y="10" width="2" height="2" rx="1" fill="#c4b5fd" />
              <rect x="15" y="10" width="2" height="2" rx="1" fill="#c4b5fd" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-primary rounded-xl hover:bg-gray-100/30 transition-all duration-200"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-white/30 backdrop-blur-xl bg-white/30 rounded-2xl shadow-lg">
          <div className="flex flex-col space-y-4 px-4 pb-4">
            <button 
              onClick={scrollToServices}
              className="text-left text-white hover:text-primary transition-all duration-200 text-sm font-medium px-2 py-1 rounded focus:outline-none focus:bg-white/10 drop-shadow-md"
            >
              Services
            </button>
            {/* Calendar Icon with no background box for mobile */}
            <button
              onClick={scrollToCalendly}
              className="flex items-center justify-center w-10 h-10 hover:scale-110 transition-transform duration-300"
              style={{ animation: 'bounce 1.2s 1' }}
              aria-label="Book Free Consultation"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                <rect x="3" y="5" width="18" height="16" rx="4" fill="#c4b5fd" fillOpacity="0.15" />
                <rect x="3" y="5" width="18" height="16" rx="4" stroke="#c4b5fd" strokeWidth="1.5" />
                <rect x="7" y="2" width="2" height="4" rx="1" fill="#c4b5fd" />
                <rect x="15" y="2" width="2" height="4" rx="1" fill="#c4b5fd" />
                <rect x="7" y="10" width="2" height="2" rx="1" fill="#c4b5fd" />
                <rect x="11" y="10" width="2" height="2" rx="1" fill="#c4b5fd" />
                <rect x="15" y="10" width="2" height="2" rx="1" fill="#c4b5fd" />
              </svg>
            </button>
            <div className="flex items-center space-x-2 text-gray-800 text-sm px-3 py-2 rounded-lg font-semibold bg-white/40 backdrop-blur-sm border border-white/20">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-white/80 drop-shadow-md">dbbookstax@gmail.com</span>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-6px); }
          40% { transform: translateY(-12px); }
          60% { transform: translateY(-6px); }
          80% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce 1.5s infinite cubic-bezier(.28,.84,.42,1);
        }
      `}</style>
    </header>
  );
};

export default Header;