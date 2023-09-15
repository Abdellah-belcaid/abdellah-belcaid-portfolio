import BiographySection from "@/components/about/BiographySection";
import EducationSection from "@/components/about/EducationSection";
import SkillsSection from "@/components/about/SkillsSection";

function About() {
  return (
    <div className="text-white items-center py-8 px-4 sm:py-16 xl:px-12 ">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 flex flex-col items-center justify-center">
        About me
      </h2>
      <BiographySection />

      <SkillsSection />

      <EducationSection />
    </div>
  );
}

export default About;
