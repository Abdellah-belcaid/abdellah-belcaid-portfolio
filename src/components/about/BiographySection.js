import Image from "next/image";
import AnimationNumbers from "../AnimationNumbers";

function BiographySection() {
  return (
    <section>
      <div className="grid md:grid-cols-8 w-full gap-16 sm:gap-8">
        <div className="flex flex-col items-start md:col-span-4 xl:col-span-3 order-2 md:order-1 justify-start ">
          <h2 className="mb-2 text-lg font-bold uppercase text-black dark:text-white/60">
            Biography
          </h2>
          <div className="text-[#394046] dark:text-[#ADB7BE] font-medium">
            <p>
              I&apos;m Abdellah Belcaid, a dedicated FullStack developer with
              expertise in Java, Spring Boot, Angular and react/nextJs. With a
              strong foundation in software engineering and experience in
              microservices and RESTful APIs, I have the skills to create
              user-friendly web applications that meet industry standards.
            </p>

            <p>
              Currently pursuing a Master&apos;s in Information Systems
              Engineering at University Cadi Ayyad, I am committed to staying
              up-to-date with industry trends and the latest technologies. My
              proficiency extends to UML, Merise, and the use of development
              tools such as Visual Studio and Eclipse.
            </p>

            <p>
              Beyond coding, I have a passion for music, presentations, and
              Japanese culture. I have participated in community service and
              intend to continue engaging in meaningful projects to contribute
              to our community. My diverse interests and commitment to personal
              and professional growth drive my ambition to contribute to the
              world of technology.
            </p>
          </div>
        </div>
        <div className="relative h-max rounded-2xl border-2 border-solid border-white p-8 md:col-span-4 xl:col-span-3 order-1 md:order-2">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[110%] rounded-2xl bg-white " />
          <Image
            className="rounded-2xl h-auto w-full"
            src="/images/belcaid.jpg"
            width={200}
            height={200}
            alt=""
          />
        </div>

        <div className="flex flex-row items-end justify-between xl:flex-col  xl:col-span-2 order-3 md:order-3">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">
              <AnimationNumbers value={40} prefix={"+"} postfix={""} />
            </span>
            <h2 className="text-sm sm:text-base md:text-lg xl:text-xl font-medium capitalize text-white/60">
              satisfied client
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">
              <AnimationNumbers value={10} prefix={"~"} postfix={""} />
            </span>
            <h2 className="text-sm sm:text-base md:text-lg xl:text-xl font-medium capitalize text-white/60">
              Projects
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">
              <AnimationNumbers value={40} prefix={"+"} postfix={""} />
            </span>
            <h2 className="text-sm sm:text-base md:text-lg xl:text-xl font-medium capitalize text-white/60">
              Certificates
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiographySection;
