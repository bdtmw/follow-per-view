import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Crosshair, RefreshCw, LayoutDashboard, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  { icon: Video, label: "Video" },
  { icon: Crosshair, label: "Tracking" },
  { icon: RefreshCw, label: "Retargeting" },
  { icon: LayoutDashboard, label: "Funnel" },
  { icon: CalendarCheck, label: "Booking" },
];

const PositioningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/10" style={{ animation: 'pulse-ring 8s ease-in-out infinite' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/5" style={{ animation: 'pulse-ring 8s ease-in-out infinite 2s' }} />
      <div className="absolute top-10 right-10 w-[250px] h-[250px] rounded-full bg-primary/8 blur-[100px]" style={{ animation: 'drift 20s ease-in-out infinite' }} />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            We Don't Run Ads.{" "}
            <span className="gradient-text-orange">We Build Systems That Convert.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            FollowPerView is a complete video marketing system designed to turn attention into revenue. We track who engages with your videos, retarget them across platforms, and drive them into high-converting funnels.
          </p>
        </motion.div>

        {/* System Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3 md:gap-2"
        >
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-xl px-5 py-4 flex flex-col items-center gap-2 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{step.label}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PositioningSection;
