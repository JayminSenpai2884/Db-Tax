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
    <section id="services" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-6">
            🚀 Comprehensive Financial Solutions
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Services That Drive
            <span className="text-transparent bg-clip-text bg-gradient-primary block">Your Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From bookkeeping to cross-border tax filing, we provide the expertise 
            and reliability your business needs to thrive in today's competitive market.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="glass-card shadow-floating hover-lift group relative overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                  {service.highlight}
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={openCalendly}
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-floating animate-fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">
              Why Choose DB Bookkeeping & Tax Services?
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference of working with dedicated professionals who understand your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={openCalendly}
              variant="cta" 
              size="lg"
              className="text-lg px-12 py-6 hover-lift"
            >
              Book Your Free Consultation Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;