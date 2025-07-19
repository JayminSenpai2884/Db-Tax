import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Calendar, Clock, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-transparent">
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
            <Card className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/10 hover:scale-102 transition-all duration-300 font-semibold">
              <CardHeader>
                <CardTitle className="text-base md:text-lg text-white flex items-center gap-2 md:gap-3 drop-shadow-lg">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">J</span>
                  </div>
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-white/80 text-xs md:text-sm drop-shadow-md">
                  <p className="leading-relaxed">
                    Certified tax professional with expertise in cross-border bookkeeping and compliance. 
                    Dedicated to helping businesses thrive through accurate financial management.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Certified</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">5+ Years</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Bilingual</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/10 hover:scale-102 transition-all duration-300 font-semibold">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-white flex items-center gap-2 md:gap-3 drop-shadow-lg">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary drop-shadow-glass" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-xs md:text-sm drop-shadow-md">Phone</p>
                      <p className="text-white/80 text-sm md:text-base drop-shadow-md">647-896-7487</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-xs md:text-sm drop-shadow-md">Email</p>
                      <p className="text-white/80 text-sm md:text-base drop-shadow-md">dbbookstax@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-xs md:text-sm drop-shadow-md">Service Areas</p>
                      <p className="text-white/80 text-sm md:text-base drop-shadow-md">Canada & United States</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/10 hover:scale-102 transition-all duration-300 font-semibold">
              <CardHeader>
                <CardTitle className="text-base md:text-lg text-white flex items-center gap-2 md:gap-3 drop-shadow-lg">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary drop-shadow-glass" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 md:space-y-2 text-white/80 text-xs md:text-sm drop-shadow-md">
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