import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { BsArrowRight, BsCodeSlash } from "react-icons/bs";

function ProjectCard({ project }) {
  const {
    id,
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
    <div className="h-full relative  overflow-hidden flex items-center justify-center group">
      <div className="flex h-[200px] w-[400px] items-center justify-center relative  overflow-hidden  ">
        {/* image */}
        <Image
          src={imageURL}
          width={400}
          height={300}
          alt=""
          objectFit="cover"
          className="object-cover"
        />
        {/* overlay gradient */}
        <div className="absolute inset-0  bg-gradient-to-l  from-transparent  via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80  transition-all duration-700 " />
        {/* title */}
        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
          <div className="flex flex-col items-center justify-center ">
            <div className="text-[11px] tracking-[0.2em] ">{title}</div>
            <Link
              href={`/projects/${id}`}
              className="flex items-center hover:text-black gap-x-2 text-[13px] tracking-[0.2em]"
            >
              {/* title part 1 */}
              <div className="delay-100 ">VIEW</div>
              {/* title part 2 */}
              <div className="translate-y-[500%] group-hover:translate-y-0  transition-all duration-300 delay-150">
                PROJECT
              </div>
              {/* icon */}
              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                <BsArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

// <div class="animate-border flex flex-col h-full rounded-xl bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-0.5">
//   <div className="bg-[#131424] h-full rounded-2xl">
//     <div
//       className="h-72 rounded-t-xl relative group p-2"
//       style={{ background: `url(${imageURL})`, backgroundSize: "cover" }}
//     >
//       <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden  group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
//         <Link
//           href={devURL}
//           className="h-14 w-14 mr-2 border-2 relative rounded-full text-[#ADB7BE] hover:border-white   group/link "
//         >
//           <BsCodeSlash className="h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer  group-hover/link:text-white" />
//         </Link>
//         <Link
//           href={prodURL}
//           className="h-14 w-14 border-2 relative rounded-full text-[#ADB7BE] hover:border-white   group/link "
//         >
//           <AiOutlineEye className="h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer  group-hover/link:text-white" />
//         </Link>
//       </div>
//     </div>
//     <div className="text-white rounded-b-xl h-auto py-4 px-4 ">
//       <h5 className="text-lg font-semibold mb-2">{title}</h5>
//       <p className="text-[#ADB7BE] mb-2">{description}</p>
//       <p className="text-blue-300 mb-2">{duration}</p>
//       <div className="flex flex-wrap space-x-2 ">
//         {technologies &&
//           technologies.map((tech, index) => (
//             <span
//               key={index}
//               className="text-gray-100 bg-gray-700 dark:bg-white dark:text-gray-900 hover:bg-red-500 hover:text-gray-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded transition-colors duration-300 ease-in-out mb-2"
//             >
//               {tech}
//             </span>
//           ))}
//       </div>
//     </div>
//   </div>
// </div>
