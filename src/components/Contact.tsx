import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Calendar, Clock, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero-rich relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-72 md:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="w-[95%] max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4">
            Contact us for a free consultation and discover how we can help your business thrive.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6 animate-slide-in-left">
            <Card className="glass-professional rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-card-foreground flex items-center gap-2 md:gap-3">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 rounded-lg">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground text-xs md:text-sm">Phone</p>
                      <p className="text-muted-foreground text-sm md:text-base">647-896-7487</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 rounded-lg">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground text-xs md:text-sm">Email</p>
                      <p className="text-muted-foreground text-sm md:text-base">dbbookstax@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 rounded-lg">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground text-xs md:text-sm">Service Areas</p>
                      <p className="text-muted-foreground text-sm md:text-base">Canada & United States</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-professional rounded-xl">
              <CardHeader>
                <CardTitle className="text-base md:text-lg text-card-foreground flex items-center gap-2 md:gap-3">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>


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