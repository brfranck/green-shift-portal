import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { SocialProof } from "@/components/SocialProof";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Hero />
      <About />
      <Impact />
      <Testimonials />
      <SocialProof />
      <Contact />
    </motion.main>
  );
};

export default Index;