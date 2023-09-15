"use client";
import { educationPath } from "@/data/education";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, website }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8  first:mt-0 last:mb-0 w-[60%] mx-auto  flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">
          {type}&nbsp;
          {website && (
            <a href="" target="_blank" className="text-accent capitalize">
              @{website}
            </a>
          )}
        </h3>
        <span className="capitalize font-medium text-white/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

function EducationSection() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-32 md:mt-16">
      <h2 className="font-bold text-4xl md:text-6xl  mb-16  w-full text-center ">Education</h2>
      <div ref={ref} className=" md:w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-white origin-top "
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between  ml-4">
          {educationPath.map((education, index) => (
            <Details
              key={index}
              type={education.type}
              time={education.time}
              place={education.place}
              info={education.info}
              website={education.website}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EducationSection;
