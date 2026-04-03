import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OfferSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/6 blur-[150px]" style={{ animation: 'pulse-ring 10s ease-in-out infinite' }} />
      <div className="absolute top-10 left-10 w-[200px] h-[200px] rounded-full bg-primary/4 blur-[80px]" style={{ animation: 'float-orb 18s ease-in-out infinite' }} />
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Done-For-You{" "}
            <span className="gradient-text-orange">Video Lead System</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-10 border-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary" />

          <div className="space-y-6 mb-8">
            {[
              { label: "Setup Investment", value: "$1,500 – $3,000" },
              { label: "Monthly Management", value: "$2,000 – $4,000" },
              { label: "Ad Spend", value: "Separate (you control)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="text-foreground font-bold text-lg">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 mb-8">
            {["Full campaign setup & management", "Custom funnels & retargeting", "Monthly reporting & optimization"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Button variant="hero" size="xl" className="w-full">
            Book a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
