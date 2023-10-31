"use client";
import Bulb from "@/components/UI/Bulb";
import Circles from "@/components/UI/Circles";
import BiographySection from "@/components/about/BiographySection";
import EducationSection from "@/components/about/EducationSection";
import SkillsSection from "@/components/about/SkillsSection";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="text-black dark:text-white items-center py-8 px-4 sm:py-16 xl:px-12 ">
      <Circles />
      <motion.div
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        animate="show"        
        whileTap={{ scale: 0.9 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12 flex flex-col items-center justify-center">
          About me
        </h2>
        <BiographySection />
        <EducationSection />
        <SkillsSection />
      </motion.div>
      <Bulb />
    </div>
  );
}

export default About;
