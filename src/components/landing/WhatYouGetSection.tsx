import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const items = [
  "Video ad campaign setup",
  "Retargeting system buildout",
  "Funnel + landing page creation",
  "Conversion tracking (calls, forms, bookings)",
  "Ongoing optimization and scaling",
];

const WhatYouGetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute -top-10 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/6 blur-[130px]" style={{ animation: 'float-orb 16s ease-in-out infinite' }} />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-accent/5 blur-[80px]" style={{ animation: 'drift 12s ease-in-out infinite' }} />
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            What's <span className="gradient-text-orange">Included</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium text-lg">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
