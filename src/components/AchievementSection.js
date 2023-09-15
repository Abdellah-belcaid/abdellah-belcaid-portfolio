import AnimationNumbers from "./AnimationNumbers";

const achievementList = [
  {
    matric: "Projects",
    value: 12,
    postfix: "+",
  },
  {
    matric: "Users",
    value: 12,
    postfix: "+",
  },
  {
    matric: "Awards",
    value: 12,
    postfix: "+",
  },
  {
    matric: "Years",
    value: 12,
    postfix: "+",
  },
];

function AchievementSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 xl:py-16 xl:px-16 ">
      <div className="border-[#33353F] border rounded-full py-4 px-2 md:px-8 xl:px-16 flex flex-wrap justify-center xl:justify-between items-center">
        {achievementList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mb-4 md:mb-0 mx-2 md:mx-4 xl:mx-0"
          >
            <h2 className="text-white text-xs md:text-2xl xl:text-4xl font-bold flex flex-row">
              <AnimationNumbers
                value={achievement.value}
                prefix={achievement?.prefix}
                postfix={achievement.postfix}
              />
            </h2>
            <p className="text-[#ADB7BE] text-xs xl:text-base font-bold">
              {achievement.matric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementSection;
