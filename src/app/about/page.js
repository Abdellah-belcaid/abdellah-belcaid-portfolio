import Bulb from "@/components/UI/Bulb";
import Circles from "@/components/UI/Circles";
import BiographySection from "@/components/about/BiographySection";
import EducationSection from "@/components/about/EducationSection";
import SkillsSection from "@/components/about/SkillsSection";

function About() {
  return (
    <div className="text-black dark:text-white items-center py-8 px-4 sm:py-16 xl:px-12 ">
      <Circles />
      <div>
        <h2 className="text-4xl md:text-6xl font-bold mb-12 flex flex-col items-center justify-center">
          About me
        </h2>
        <BiographySection />
        <EducationSection />
        <SkillsSection />
      </div>
      <Bulb />
    </div>
  );
}

export default About;
