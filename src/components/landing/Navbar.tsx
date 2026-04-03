import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between mt-3">
        <a href="#" className="flex items-center ">
  <img src={logo} alt="FollowPerClick logo" className="h-16 w-auto" />
</a>
        <Button variant="hero" size="sm" onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}>
          Book a Demo
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
