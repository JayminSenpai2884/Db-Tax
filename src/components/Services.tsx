import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Book,
  UsersThree,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Trophy,
  ClockCountdown
} from "@phosphor-icons/react";

const services = [
  {
    icon: Book,
    title: "Bookkeeping Essentials",
    description: "Accurate records, reconciliations, and clear financial insights.",
    features: [
      "Monthly & quarterly bookkeeping",
      "Bank & credit card reconciliation",
      "Accounts receivable/payable",
      "Actionable financial reports"
    ],
    highlight: "Most Popular"
  },
  {
    icon: UsersThree,
    title: "Payroll Management",
    description: "Reliable payroll processing and compliance for your team.",
    features: [
      "Payroll calculation & processing",
      "Tax remittance & reporting",
      "Pay stub generation",
      "Year-end T4 preparation"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Tax Planning & Advisory",
    description: "Strategic guidance to minimize tax and maximize growth.",
    features: [
      "Year-round tax planning",
      "Business structure optimization",
      "Cross-border tax strategies",
      "Compliance risk management"
    ]
  }
];

const benefits = [
  {
    icon: Trophy,
    title: "Expert Cross-Border Knowledge",
    description: "Specialized expertise in both Canadian and U.S. tax systems"
  },
  {
    icon: ClockCountdown,
    title: "Timely & Reliable Service",
    description: "Meet all deadlines with accurate, professional service delivery"
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential",
    description: "Your financial data is protected with bank-level security"
  }
];

const Services = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 md:w-80 md:h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="w-[95%] max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4 drop-shadow-md">
            Bookkeeping, payroll, and tax solutions for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all duration-200 font-semibold group relative overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full font-medium shadow-sm drop-shadow-md">
                  {service.highlight}
                </div>
              )}
              <CardHeader className="pb-3 flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center mb-2 rounded-full bg-primary/10 dark:bg-primary/20">
                  <service.icon size={32} weight="duotone" className="text-primary drop-shadow-glass" />
                </div>
                <CardTitle className="text-base md:text-lg font-semibold text-white text-center mb-1 drop-shadow-lg">
                  {service.title}
                </CardTitle>
                <p className="text-white/80 text-xs md:text-sm text-center drop-shadow-md">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 md:space-y-3 mt-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-white/90 drop-shadow-md">
                      <CheckCircle size={18} weight="fill" className="text-primary flex-shrink-0 mt-0.5 opacity-80 drop-shadow-glass" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 dark:bg-white/5 border border-white/20 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all duration-200 font-semibold p-6 md:p-8 lg:p-12 animate-fade-up">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">
              Why Choose Us?
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base drop-shadow-md">
              Professional, reliable, and tailored to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mx-auto mb-2 rounded-full bg-primary/10 dark:bg-primary/20">
                  <benefit.icon size={32} weight="duotone" className="text-primary drop-shadow-glass" />
                </div>
                <h4 className="text-sm md:text-base font-semibold text-white mb-1 drop-shadow-lg">
                  {benefit.title}
                </h4>
                <p className="text-white/80 text-xs md:text-sm drop-shadow-md">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToCalendly}
              size="lg"
              className="bg-gradient-primary-glow text-primary-foreground hover:shadow-xl hover:scale-105 rounded-xl transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;