import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  business: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const selectedService = watch("service");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your email service
      console.log("Form submitted:", data);
      
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="glass-professional rounded-xl animate-scale-in">
        <CardContent className="p-6 md:p-8 text-center">
          <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            Your message has been sent successfully. We'll contact you within 24 hours to discuss your needs.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-professional rounded-xl animate-fade-up">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-card-foreground flex items-center gap-2 md:gap-3">
          <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          Get Your Free Consultation
        </CardTitle>
        <p className="text-muted-foreground text-sm md:text-base">
          Tell us about your business needs and we'll create a customized solution for you.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm md:text-base">Full Name *</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your full name"
                className="border-border/50 focus:border-primary"
              />
              {errors.name && (
                <p className="text-xs md:text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm md:text-base">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your@email.com"
                className="border-border/50 focus:border-primary"
              />
              {errors.email && (
                <p className="text-xs md:text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm md:text-base">Phone Number *</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="(123) 456-7890"
                className="border-border/50 focus:border-primary"
              />
              {errors.phone && (
                <p className="text-xs md:text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-sm md:text-base">Service Needed *</Label>
              <Select onValueChange={(value) => setValue("service", value)} value={selectedService}>
                <SelectTrigger className="border-border/50 focus:border-primary">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="border-border/50">
                  <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                  <SelectItem value="payroll">Payroll Services</SelectItem>
                  <SelectItem value="tax-returns">Tax Returns (T1)</SelectItem>
                  <SelectItem value="gst-hst">GST/HST Filing</SelectItem>
                  <SelectItem value="us-sales-tax">U.S. Sales Tax</SelectItem>
                  <SelectItem value="consultation">General Consultation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-xs md:text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.service.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="business" className="text-sm md:text-base">Business Name (Optional)</Label>
            <Input
              id="business"
              {...register("business")}
              placeholder="Your business name"
              className="border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm md:text-base">Tell us about your needs *</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Describe your bookkeeping, tax, or payroll needs..."
              rows={4}
              className="border-border/50 focus:border-primary resize-none"
            />
            {errors.message && (
              <p className="text-xs md:text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-primary-glow hover:shadow-xl hover:scale-105 rounded-xl transition-all duration-300"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to receive communications from DB Bookkeeping & Tax Services.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;