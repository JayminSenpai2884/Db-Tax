import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import CalendlySection from "@/components/CalendlySection";
import { motion } from "framer-motion";

const scrollEffect = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: false, amount: 0.2 },
};

const Index = () => {
  return (
    <div className="text-white">
      <motion.section initial={scrollEffect.initial} whileInView={scrollEffect.whileInView} transition={scrollEffect.transition} viewport={scrollEffect.viewport}>
        <Header />
      </motion.section>
      <motion.section initial={scrollEffect.initial} whileInView={scrollEffect.whileInView} transition={scrollEffect.transition} viewport={scrollEffect.viewport}>
        <Hero />
      </motion.section>
      <motion.section initial={scrollEffect.initial} whileInView={scrollEffect.whileInView} transition={scrollEffect.transition} viewport={scrollEffect.viewport}>
        <Services />
      </motion.section>
      <motion.section initial={scrollEffect.initial} whileInView={scrollEffect.whileInView} transition={scrollEffect.transition} viewport={scrollEffect.viewport}>
        <CalendlySection />
      </motion.section>
      <motion.section initial={scrollEffect.initial} whileInView={scrollEffect.whileInView} transition={scrollEffect.transition} viewport={scrollEffect.viewport}>
        <Contact />
      </motion.section>
    </div>
  );
};

export default Index;
