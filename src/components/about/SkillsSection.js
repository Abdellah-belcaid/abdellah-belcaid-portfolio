"use client";
import skillsData from "@/data/skills";
import { motion } from "framer-motion";

const Skill = ({ children, x, y }) => {
  return (
    <motion.div
      className="flex absolute items-center justify-center rounded-full font-semibold md:bg-white md:text-black  py-2 px-2 lg:py-2 lg:px-4 lx:py-3 md:px-6 text-3xl shadow-lightBlue-50 cursor-pointer"
      whileHover={{ scale: 1.5 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

function SkillsSection() {
  return (
    <section>
      <h2 className="font-bold text-4xl md:text-6xl mt-16 md:mt-32 mb-8 md:mb-20 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLightSm dark:bg-circularDarkSm md:bg-circularLightMd dark:md:bg-circularDarkMd lg:bg-circularLightLg dark:lg:bg-circularDarkLg xl:bg-circularLight dark:xl:bg-circularDark  ">
        <motion.div
          className="flex text-base md:text-xl absolute items-center justify-center rounded-full font-semibold bg-white text-black  p-2 md:p-6 shadow-lightBlue-50 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skillsData.map((catg, index) => (
          <Skill key={index} x={`${catg.x}vw`} y={`${catg.y}vw`}>
            {catg.icon}
          </Skill>
        ))}
      </div>
    </section>
  );
}
export default SkillsSection;
