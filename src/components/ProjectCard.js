import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

function ProjectCard({ project }) {
  const {
    title,
    description,
    technologies,
    devURL,
    prodURL,
    imageURL,
    duration,
    role,
    tag,
  } = project;
  return (
    <div class="animate-border flex flex-col h-full rounded-xl bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-0.5">
      <div
        className="h-72 rounded-t-xl relative group "
        style={{ background: `url(${imageURL})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden  group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={devURL}
            className="h-14 w-14 mr-2 border-2 relative rounded-full text-[#ADB7BE] hover:border-white   group/link "
          >
            <BsCodeSlash className="h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer  group-hover/link:text-white" />
          </Link>
          <Link
            href={prodURL}
            className="h-14 w-14 border-2 relative rounded-full text-[#ADB7BE] hover:border-white   group/link "
          >
            <AiOutlineEye className="h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer  group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-4 px-4 ">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-2">{description}</p>
        <div className="flex flex-wrap space-x-2 ">
          {technologies &&
            technologies.map((tech, index) => (
              <span
                key={index}
                className="text-gray-100 bg-gray-700 dark:bg-white dark:text-gray-900 hover:bg-red-500 hover:text-gray-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded transition-colors duration-300 ease-in-out mb-2"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
