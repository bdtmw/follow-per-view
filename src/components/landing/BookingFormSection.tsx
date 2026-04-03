import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/suAZp50xNC77tiayOgih/webhook-trigger/0880fc67-0599-49c2-a966-f383713ceaab",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            business_name: formData.business_name,
            message: formData.message,
          }),
        }
      );

      setLoading(false);

      if (!response.ok) {
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
        return;
      }

      setSubmitted(true);
    } catch (error) {
      setLoading(false);
      console.error("Webhook error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="booking-form" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/8 blur-[150px]"
        style={{ animation: "pulse-ring 8s ease-in-out infinite" }}
      />
      <div
        className="absolute top-10 right-20 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[100px]"
        style={{ animation: "float-orb 16s ease-in-out infinite" }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Ready to Turn Views Into{" "}
              <span className="gradient-text-orange">Revenue?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Fill out the form and our team will reach out within 24 hours to schedule your personalized demo.
            </p>
            <div className="space-y-4">
              {[
                "Free strategy consultation",
                "Custom campaign proposal",
                "No obligation, no pressure",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground">
                  <span className="text-primary">✔</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 border-primary/20 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">We Got Your Request!</h3>
                <p className="text-muted-foreground">
                  Our team will reach out within 24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 border-primary/20 space-y-5 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-t-2xl" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Full Name *</label>
                    <Input
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="john@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Phone</label>
                    <Input
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Business Name</label>
                    <Input
                      placeholder="Your Business"
                      value={formData.business_name}
                      onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Tell us about your goals</label>
                  <Textarea
                    placeholder="What are you looking to achieve with video marketing?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 min-h-[100px] resize-none"
                  />
                </div>

                <Button variant="hero" size="xl" className="w-full" type="submit" disabled={loading}>
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {loading ? "Submitting..." : "Book My Demo"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  No spam. No obligation. Just a conversation.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;