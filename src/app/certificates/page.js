"use client";
import CertificateCard from "@/components/CertificateCard";
import SearchBox from "@/components/UI/SearchBox";
import Tag from "@/components/UI/Tag";
import { certificationList } from "@/data/certificates";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

function Certificates() {
  const [tag, setTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredCertifications = certificationList?.filter(
    (certificate) =>
      (certificate?.tag.includes(tag) || tag === "All") &&
      certificate.name.toLowerCase().includes(searchTerm.toLowerCase()) // Include search term
  );

  // function to handle search term changes
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-4 ">
        My Certificates
      </h2>
      <SearchBox onSearchChange={handleSearchChange} />
      <div className="text-black dark:text-white flex flex-wrap  justify-center items-center gap-2 py-6 ">
        {["All", "Frontend", "Backend", "Database", "Security"].map(
          (tagName) => (
            <Tag
              key={tagName}
              onClick={handleTagChange}
              tag={tagName}
              isSelected={tag === tagName}
            />
          )
        )}
      </div>

      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-2 lg:mx-4"
      >
        {filteredCertifications?.map((certificate, index) => (
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            key={index}
          >
            <CertificateCard certificate={certificate} />
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
