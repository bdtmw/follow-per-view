import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneOff, UserX, HelpCircle, DollarSign } from "lucide-react";

const problems = [
  { icon: PhoneOff, text: "You get views, but no calls" },
  { icon: UserX, text: "No system to follow up with viewers" },
  { icon: HelpCircle, text: "No idea who is actually interested" },
  { icon: DollarSign, text: "Wasted ad spend with no ROI" },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Animated background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-destructive/5 blur-[100px]" style={{ animation: 'float-orb 12s ease-in-out infinite' }} />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" style={{ animation: 'float-orb 15s ease-in-out infinite reverse' }} />
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Most Video Ads{" "}
            <span className="gradient-text-orange">Don't Make Money</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            High views. Low conversions. Sound familiar?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-6 flex items-start gap-4 group hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                <problem.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-foreground text-lg font-medium">{problem.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
