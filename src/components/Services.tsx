import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  FileText, 
  Users, 
  DollarSign, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Clock,
  Award
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Professional Bookkeeping",
    description: "Complete financial record management for your business",
    features: [
      "Monthly/quarterly bookkeeping",
      "Bank & credit card reconciliation", 
      "Accounts receivable/payable",
      "Financial reporting & insights"
    ],
    highlight: "Most Popular"
  },
  {
    icon: FileText,
    title: "GST/HST Filing (Canada)",
    description: "Timely and accurate GST/HST compliance management",
    features: [
      "Quarterly & annual GST/HST returns",
      "Input tax credit optimization",
      "Compliance monitoring",
      "Filing deadline management"
    ]
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Comprehensive payroll management and compliance",
    features: [
      "Payroll calculation & processing",
      "Tax remittances & reporting",
      "Pay stub generation",
      "Year-end T4 preparation"
    ]
  },
  {
    icon: DollarSign,
    title: "T1 Tax Returns (Canada)",
    description: "Personal tax filing for all situations",
    features: [
      "Salaried employee returns",
      "Self-employed filing",
      "Newcomer tax assistance",
      "Tax optimization strategies"
    ]
  },
  {
    icon: Globe,
    title: "U.S. Sales Tax Filing",
    description: "Multi-state sales tax calculation and reporting",
    features: [
      "State-by-state compliance",
      "Sales tax calculation",
      "Filing & remittance",
      "Nexus determination"
    ]
  },
  {
    icon: Shield,
    title: "Tax Planning & Advisory",
    description: "Strategic tax planning and business consulting",
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
    icon: Award,
    title: "Expert Cross-Border Knowledge",
    description: "Specialized expertise in both Canadian and U.S. tax systems"
  },
  {
    icon: Clock,
    title: "Timely & Reliable Service",
    description: "Meet all deadlines with accurate, professional service delivery"
  },
  {
    icon: Shield,
    title: "Secure & Confidential",
    description: "Your financial data is protected with bank-level security"
  }
];

const Services = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/dbbookstax', '_blank');
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 md:w-80 md:h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="w-[95%] max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Professional bookkeeping, payroll, and tax solutions for businesses across Canada and the U.S.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="glass-professional hover:border-primary/50 transition-all duration-300 group relative overflow-hidden animate-fade-up rounded-xl hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                  {service.highlight}
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <service.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <CardTitle className="text-base md:text-lg text-card-foreground">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 md:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="glass-professional rounded-xl p-6 md:p-8 lg:p-12 animate-fade-up">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-3 md:mb-4">
              Why Choose Us?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
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
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h4 className="text-sm md:text-base font-semibold text-card-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={openCalendly}
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