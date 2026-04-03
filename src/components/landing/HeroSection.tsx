import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, BarChart3, Users, TrendingUp, Eye } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay + 0.8, duration: 0.6 }}
    className={`glass-card rounded-xl px-4 py-3 text-sm ${className}`}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Orange Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Video Marketing System for Growth</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
          >
            Turn Video Views Into{" "}
            <span className="gradient-text-orange">Booked Appointments</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build and manage video ad systems that track, retarget, and convert viewers into real customers for your business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="xl">
              Book a Demo
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-4 h-4" />
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-muted-foreground"
          >
            {["Built for Local Businesses", "Conversion-Focused Campaigns", "No Long-Term Contracts"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-primary">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating UI Elements */}
        <div className="hidden lg:block">
          <FloatingCard className="absolute top-1/4 left-8 animate-float" delay={0}>
            <div className="flex items-center gap-3">
              <Eye className="w-4 h-4 text-primary" />
              <div>
                <p className="text-foreground font-medium">12.4K Views</p>
                <p className="text-xs text-muted-foreground">Last 7 days</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute top-1/3 right-8 animate-float" delay={0.2}>
            <div className="flex items-center gap-3">
              <BarChart3 className="w-4 h-4 text-primary" />
              <div>
                <p className="text-foreground font-medium">+340% ROI</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute bottom-1/4 left-16 animate-float" delay={0.4}>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-primary" />
              <div>
                <p className="text-foreground font-medium">89 Retargeted</p>
                <p className="text-xs text-muted-foreground">Active viewers</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute bottom-1/3 right-16 animate-float" delay={0.6}>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-4 h-4 text-primary" />
              <div>
                <p className="text-foreground font-medium">23 Bookings</p>
                <p className="text-xs text-muted-foreground">This week</p>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
