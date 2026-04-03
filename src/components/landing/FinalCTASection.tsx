import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" style={{ animation: 'pulse-ring 6s ease-in-out infinite' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" style={{ animation: 'pulse-ring 6s ease-in-out infinite 3s' }} />
      <div className="absolute top-10 left-20 w-2 h-2 rounded-full bg-primary/30" style={{ animation: 'drift 7s ease-in-out infinite' }} />
      <div className="absolute bottom-20 right-20 w-1.5 h-1.5 rounded-full bg-primary/25" style={{ animation: 'drift 9s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-primary/20" style={{ animation: 'drift 5s ease-in-out infinite 4s' }} />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Stop Paying for Attention{" "}
            <span className="gradient-text-orange">That Doesn't Convert</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Turn video views into predictable leads and revenue with a system built to follow every viewer.
          </p>
          <Button variant="hero" size="xl" onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Book a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
