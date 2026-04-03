import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Month 1", cpl: 85 },
  { month: "Month 2", cpl: 72 },
  { month: "Month 3", cpl: 55 },
  { month: "Month 4", cpl: 42 },
  { month: "Month 5", cpl: 30 },
  { month: "Month 6", cpl: 22 },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[300px] rounded-full bg-primary/8 blur-[130px]" style={{ animation: 'float-orb 22s ease-in-out infinite' }} />
      <div className="absolute top-20 right-10 w-[200px] h-[200px] rounded-full border border-primary/10 opacity-30" style={{ animation: 'spin-slow 30s linear infinite' }} />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Built to <span className="gradient-text-orange">Lower Your Cost Per Lead</span> Over Time
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As campaigns gather data, retargeting becomes more efficient, lowering cost per lead and increasing conversion rates. The longer you run, the better it gets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card rounded-xl p-6"
          >
            <p className="text-sm text-muted-foreground mb-4 font-medium">Cost Per Lead Over Time</p>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="cplGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(24, 100%, 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(24, 100%, 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="hsl(0, 0%, 40%)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(0, 0%, 40%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                <Area type="monotone" dataKey="cpl" stroke="hsl(24, 100%, 50%)" strokeWidth={2} fill="url(#cplGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
