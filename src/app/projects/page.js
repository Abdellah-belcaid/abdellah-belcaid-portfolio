"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "@/components/ProjectTag";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects";
import { getGithubRepositories } from "@/services/githubService";

function Projects() {
  //   const [repositories, setRepositories] = useState([]);

  //   useEffect(() => {
  //     getGithubRepositories()
  //       .then((repositories) => {
  //         setRepositories(repositories);
  //         console.log(repositories);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching repositories:", error);
  //       });
  //   }, []);

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        {["All", "Web", "Mobile"].map((tagName) => (
          <ProjectTag
            key={tagName}
            onClick={handleTagChange}
            tag={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            key={index}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
