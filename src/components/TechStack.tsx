import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Calendar, Mail, Server, Zap, Globe } from "lucide-react";

const techRecommendations = [
  {
    icon: Code,
    title: "Frontend Framework",
    tech: "Next.js",
    description: "React-based framework with excellent SEO capabilities, perfect for professional service websites.",
    benefits: ["SEO-friendly", "Fast performance", "Easy deployment"]
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    tech: "Calendly Widget",
    description: "Embedded booking system that requires no backend development and offers free tier options.",
    benefits: ["No backend needed", "Free tier available", "Easy integration"]
  },
  {
    icon: Mail,
    title: "Contact Forms",
    tech: "EmailJS",
    description: "Client-side email service that sends emails directly from your website without a backend.",
    benefits: ["No server required", "Easy setup", "Cost-effective"]
  },
  {
    icon: Server,
    title: "Hosting Platform",
    tech: "Vercel / Netlify",
    description: "Free hosting with automatic deployments and excellent performance for static sites.",
    benefits: ["Free hosting", "Auto-deployment", "Global CDN"]
  },
  {
    icon: Zap,
    title: "Development Speed",
    tech: "Minimal Backend",
    description: "This stack allows rapid development with minimal backend complexity and maximum efficiency.",
    benefits: ["Quick setup", "Low maintenance", "Scalable solution"]
  },
  {
    icon: Globe,
    title: "Domain & SSL",
    tech: "Custom Domain",
    description: "Professional domain with automatic SSL certificates for trust and credibility.",
    benefits: ["Professional image", "Secure connection", "Brand recognition"]
  }
];

const TechStack = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Recommended Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For businesses looking to build a similar professional website with embedded appointment booking 
            and email contact functionality, here's our recommended technology stack for quick, cost-effective setup.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techRecommendations.map((tech, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border bg-card">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-3">
                  <tech.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg text-card-foreground">{tech.title}</CardTitle>
                <CardDescription className="text-primary font-medium">{tech.tech}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tech.description}
                </p>
                <ul className="space-y-1">
                  {tech.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-accent rounded-lg p-8 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4">Why This Stack?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">Cost Efficiency</h4>
              <p className="text-sm">Minimal monthly costs with free hosting and scheduling options, perfect for small to medium businesses.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Fast Development</h4>
              <p className="text-sm">Get your professional website online quickly without complex backend development or database setup.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Easy Maintenance</h4>
              <p className="text-sm">Simple tech stack means less maintenance overhead and easier updates for your growing business.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Professional Result</h4>
              <p className="text-sm">Achieve a professional, fully-functional business website that builds trust with potential clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;