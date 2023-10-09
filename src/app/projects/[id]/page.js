"use client";
import { projectsData } from "@/data/projects";
import Image from "next/image";

import { RiComputerLine, RiGithubFill } from "react-icons/ri";

function Project({ params }) {
  const projectId = parseInt(params.id, 10);

  // Find the project with the matching id
  const project = projectsData.find((p) => p.id === projectId);

  //Handle the case when the project is not found
  if (!project) {
    throw Error(`Project with the id ${projectId} not found`);
  }
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
    <div className=" mx-2 md:mx-8">
      <div className="w-full ml-4 mr-4 rounded-xl relative border ">
        {/* <Image
          className="w-full h-full object-cover absolute mix-blend-overlay rounded-xl "
          src={imageURL}
          width={1260}
          height={750}
          alt="image is not available"
          // placeholder="blur"
          // blurDataURL="/spinner.svg"
        /> */}
        <div className="text-black dark:text-white p-6 md:pt-8 flex flex-col md:flex-row items-center content-center  mx-auto md:space-x-6  rounded-xl">
          <Image
            src={imageURL}
            width={400}
            height={650}
            alt="image is not available"
            className="rounded-lg min-h-full cursor-pointer z-10"
            // placeholder="blur"
            // blurDataURL="/spinner.svg"
          />
          <div className="p-2 z-10">
            <h2 className="text-4xl mb-3 font-extrabold">{title}</h2>
            {prodURL && (
              <div className="flex items-center mb-2">
                <a
                  href={prodURL}
                  target="_blank"
                  className="z-30 text-lg text-white flex items-center mr-4 cursor-pointer transition duration-300 transform hover:text-blue-500"
                >
                  <RiComputerLine className="mr-2" />
                  Live Site
                </a>
                {devURL && (
                  <a
                    href={devURL}
                    target="_blank"
                    className="z-30 text-lg text-white flex items-center cursor-pointer transition duration-300 transform hover:text-blue-500"
                  >
                    <RiGithubFill className="mr-2" />
                    GitHub Source
                  </a>
                )}
              </div>
            )}
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">description : </span>
              {description}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">duration :</span>
              {duration}
            </p>
            <p className="mb-3 flex">
              <span className="font-semibold mr-1">role :</span> {role}
            </p>
            <div className="flex space-x-2 ">
              {technologies &&
                technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-gray-100 bg-gray-700 dark:bg-white dark:text-gray-900 hover:bg-accent dark:hover:bg-accent text-sm font-medium mr-2 px-2.5 py-0.5 rounded transition-colors duration-300 ease-in-out mb-2"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
