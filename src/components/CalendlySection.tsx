import React from "react";
import { InlineWidget } from "react-calendly";
import { Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CalendlySection = () => {
  return (
    <section id="calendly" className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      {/* Background Elements to match Services section */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 md:w-80 md:h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      <div className="w-[95%] max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">
            Book a Free Consultation
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4 drop-shadow-md">
            Schedule a time that works for you and get expert advice for your business. No obligation, just value.
          </p>
        </div>
        <div className="flex justify-center animate-fade-up">
          <Card className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/0.1 hover:scale-102 transition-ease-in-out duration-300 font-semibold w-full max-w-5xl">
            <CardContent className="p-0 flex justify-center items-center overflow-hidden" style={{ height: "600px" }}>
              <InlineWidget
                url="https://calendly.com/jaiminsinh2884"
                styles={{ width: '100%', height: '100%', minWidth: '320px', borderRadius: '0px', background: 'transparent', border: 'none', overflow: 'hidden' }}
                pageSettings={{ backgroundColor: '10172a', hideEventTypeDetails: false, hideLandingPageDetails: false, primaryColor: '2563eb', textColor: 'ffffff' }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection; 