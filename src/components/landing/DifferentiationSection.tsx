import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const othersItems = [
  "Focus on impressions",
  "No real tracking",
  "No retargeting depth",
];

const fpvItems = [
  "Tracks viewer behavior",
  "Retargets based on intent",
  "Focuses on conversions and ROI",
];

const DifferentiationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-section relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Why This Works{" "}
            <span className="gradient-text-orange">When Others Don't</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Others */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border p-8 bg-background/50"
          >
            <h3 className="text-lg font-bold text-muted-foreground mb-6 uppercase tracking-wider text-sm">Other Agencies</h3>
            <div className="space-y-4">
              {othersItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <X className="w-4 h-4 text-destructive/60 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FPV */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-primary/30 p-8 relative overflow-hidden glow-orange"
          >
            <div className="absolute inset-0 bg-primary/5" />
            <div className="relative">
              <h3 className="text-lg font-bold text-primary mb-6 uppercase tracking-wider text-sm">FollowPerView</h3>
              <div className="space-y-4">
                {fpvItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
