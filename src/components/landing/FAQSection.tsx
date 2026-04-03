import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to film content?",
    a: "Not necessarily. We can work with existing footage, stock video, or help you create new content. Many of our clients start with simple video ads that we optimize over time.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients start seeing leads within the first 2-3 weeks. As our retargeting system gathers data, results improve significantly over months 2-3 and beyond.",
  },
  {
    q: "What platforms do you use?",
    a: "We deploy across YouTube, Facebook, Instagram, TikTok, and connected TV — wherever your audience is watching video content. Retargeting follows viewers across all platforms.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Animated background */}
      <div className="absolute inset-0 bg-diagonal-pattern opacity-30" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" style={{ animation: 'drift 18s ease-in-out infinite' }} />
      <div className="absolute top-20 left-20 w-[250px] h-[250px] rounded-full bg-accent/4 blur-[90px]" style={{ animation: 'float-orb 15s ease-in-out infinite' }} />
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Common <span className="gradient-text-orange">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
