import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, Users, Receipt, Globe } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Bookkeeping",
    description: "Monthly/quarterly bookkeeping, bank and credit card reconciliation, accounts receivable/payable, and comprehensive financial reporting.",
    features: ["Bank reconciliation", "Financial reporting", "Accounts management"]
  },
  {
    icon: Receipt,
    title: "GST/HST Filing (Canada)",
    description: "Timely GST/HST returns, quarterly or annual filings, and input tax credit tracking to keep you compliant.",
    features: ["Quarterly/annual filings", "ITC tracking", "Compliance management"]
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Complete payroll calculation, remittance, pay stub generation, and detailed reporting for your employees.",
    features: ["Payroll calculation", "Pay stub generation", "Remittance handling"]
  },
  {
    icon: FileText,
    title: "T1 Tax Returns (Canada)",
    description: "Personal tax filing for salaried employees, self-employed individuals, and newcomers to Canada.",
    features: ["Personal tax filing", "Self-employed returns", "Newcomer assistance"]
  },
  {
    icon: Globe,
    title: "U.S. Sales Tax Filing",
    description: "Multi-state sales tax calculation and reporting to ensure compliance across all U.S. jurisdictions.",
    features: ["Multi-state filing", "Tax calculation", "Compliance reporting"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From bookkeeping to tax filing, we provide complete financial solutions 
            tailored to your business needs across Canada and the United States.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border bg-card">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;