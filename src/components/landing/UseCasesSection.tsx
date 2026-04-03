import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Wrench, Briefcase } from "lucide-react";

const useCases = [
  { icon: Sparkles, title: "Med Spas", desc: "Fill your calendar with high-value aesthetic treatments." },
  { icon: Wrench, title: "Contractors", desc: "Generate qualified leads for home services and renovations." },
  { icon: Briefcase, title: "Service Businesses", desc: "Turn local attention into booked appointments and revenue." },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Who This Is <span className="gradient-text-orange">For</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-8 text-center group hover:border-primary/20 transition-colors duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <uc.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{uc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
