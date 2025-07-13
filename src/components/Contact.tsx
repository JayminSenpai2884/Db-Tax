import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Calendar, Clock, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full border border-white/30 mb-6">
            💬 Let's Connect
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Get
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 block">Started?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how we can streamline 
            your financial processes and help your business thrive.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="glass-card shadow-floating">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group hover-lift p-3 rounded-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Phone</p>
                      <p className="text-muted-foreground text-lg">647-896-7487</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover-lift p-3 rounded-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground text-lg">dbbookstax@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover-lift p-3 rounded-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Service Areas</p>
                      <p className="text-muted-foreground text-lg">Canada & United States</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card shadow-floating">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center p-2 rounded hover:bg-accent/20 transition-colors">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-accent/20 transition-colors">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-accent/20 transition-colors">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="glass-card rounded-2xl p-6 shadow-floating">
              <h4 className="font-semibold text-card-foreground mb-4 text-lg">Why Choose Us?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                  Cross-border expertise (Canada & U.S.)
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                  Affordable, transparent pricing
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                  Timely, accurate service delivery
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                  Easy online appointment scheduling
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;