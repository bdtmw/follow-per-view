import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Activity, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Rocket, title: "Launch Video Campaigns", desc: "We create and deploy high-performing video ads across platforms." },
  { icon: Activity, title: "Track Engagement", desc: "Every view, watch time, and interaction is tracked in real-time." },
  { icon: Target, title: "Retarget Across Platforms", desc: "Engaged viewers see follow-up ads on every platform they use." },
  { icon: TrendingUp, title: "Drive Conversions", desc: "Warm leads are funneled into booking pages that convert." },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 md:py-32 bg-gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Animated background */}
      <div className="absolute inset-0 bg-diagonal-pattern" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] rounded-full bg-primary/6 blur-[120px]" style={{ animation: 'float-orb 18s ease-in-out infinite' }} />
      <div className="absolute bottom-10 right-20 w-[300px] h-[300px] rounded-full bg-primary/4 blur-[100px]" style={{ animation: 'drift 14s ease-in-out infinite' }} />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            How It <span className="gradient-text-orange">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="glass-card rounded-xl p-6 text-center group hover:border-primary/20 transition-all duration-300 relative"
            >
              <div className="absolute -top-3 -left-1 text-6xl font-black text-primary/10">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="xl" onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}>Book a Demo</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
