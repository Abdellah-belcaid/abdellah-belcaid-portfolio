"use client";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);
function AnimationNumbers({ value, prefix, postfix }) {
  return (
    <div className="flex flex-row items-center justify-center">
      {prefix}
      <AnimatedNumbers
        includeComma
        animateToNumber={parseInt(value)}
        locale="en-US"
        className="text-white text-base md:text-lg xl:text-xl"
        configs={(_, index) => {
          return {
            mass: 1,
            friction: 100,
            tension: 140 * (index + 1),
          };
        }}
      />
      {postfix}
    </div>
  );
}

export default AnimationNumbers;
