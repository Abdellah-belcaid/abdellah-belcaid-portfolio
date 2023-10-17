import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function ProjectImgRow({ media }) {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div className="relative flex items-center group my-4 scrollbar-hide">
        <MdChevronLeft
          size={40}
          className="bg-black text-white dark:bg-white dark:text-black left-0 rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block"
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide relative"
        >
          {media.map((img, index) => (
            <div
              key={index}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
            >
              <Image
                className="w-full h-auto block"
                src={img}
                width={300}
                height={200}
                objectFit="cover"
                alt=""
              />
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="bg-black text-white dark:bg-white dark:text-black right-0 rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block"
          onClick={slideRight}
        />
      </div>
    </>
  );
}

export default ProjectImgRow;
