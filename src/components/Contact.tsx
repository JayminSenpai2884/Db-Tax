import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Calendar, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can streamline 
            your financial processes and help your business thrive.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="shadow-card border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Phone</p>
                      <p className="text-muted-foreground">647-896-7487</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground">dbbookstax@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Service Areas</p>
                      <p className="text-muted-foreground">Canada & United States</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Schedule Your Free Consultation
              </h3>
              <p className="text-muted-foreground">
                Book an appointment online through our embedded scheduling system. 
                We'll discuss your needs and create a customized solution for your business.
              </p>
              <Button 
                onClick={() => window.open('https://calendly.com/dbbookstax', '_blank')}
                variant="cta" 
                size="lg" 
                className="text-lg px-8 py-6"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment Online
              </Button>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h4 className="font-semibold text-card-foreground mb-3">Why Choose DB Bookkeeping & Tax Services?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Cross-border expertise (Canada & U.S.)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Affordable, transparent pricing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Timely, accurate service delivery
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Easy online appointment scheduling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;