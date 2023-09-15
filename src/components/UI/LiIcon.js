"use client";
import { motion, useScroll } from "framer-motion";

function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-white/75 ">
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-accent stroke-1 fill-none"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className=" stroke-[10px] fill-white"
          style={{
            pathLength: scrollYProgress, 
          }}
        />
        <circle cx={75} cy={50} r={10} className="animate-pulse stroke-1 fill-accent" />
      </svg>
    </figure>
  );
}

export default LiIcon;
