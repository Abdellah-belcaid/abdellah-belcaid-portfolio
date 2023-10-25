"use client";
import CertificateCard from "@/components/CertificateCard";
import ImageModel from "@/components/UI/ImageModel";
import SearchBox from "@/components/UI/SearchBox";
import Tag from "@/components/UI/Tag";
import { certificationList } from "@/data/certificates";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Variants for animation
const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

// List of tags for filtering
const tagsList = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Version Control",
  "Security",
  "Devops",
];

function Certificates() {
  // State variables
  const [tag, setTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Ref for tracking element visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Event handler for tag change
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filtering certifications based on tag and search term
  const filteredCertifications = certificationList?.filter(
    (certificate) =>
      (certificate?.tag.includes(tag) || tag === "All") &&
      certificate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Event handler for search term change
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  // Event handler for clicking on certificate images
  const handleClickImage = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.imageURL);
  };

  // Event handler for rotating images left or right
  const handleRotation = (direction) => {
    const totalLength = filteredCertifications.length;
    let newIndex;

    // Calculate the new index based on the rotation direction
    if (direction === "right") {
      newIndex = currentIndex + 1 >= totalLength ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex - 1 < 0 ? totalLength - 1 : currentIndex - 1;
    }

    // Set the new image URL and index
    const newUrl = filteredCertifications[newIndex].imageURL;
    setClickedImg(newUrl);
    setCurrentIndex(newIndex);
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-4 ">
        My Certificates
      </h2>
      <SearchBox onSearchChange={handleSearchChange} />
      <div className="text-black dark:text-white flex flex-wrap  justify-center items-center gap-2 py-6 ">
        {tagsList.map((tagName) => (
          <Tag
            key={tagName}
            onClick={handleTagChange}
            tag={tagName}
            isSelected={tag === tagName}
          />
        ))}
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
            <CertificateCard
              certificate={certificate}
              handleClickImage={handleClickImage}
              index={index}
            />
          </motion.div>
        ))}
      </ul>
      {clickedImg && (
        <ImageModel
          clickedImg={clickedImg}
          setClickedImg={setClickedImg}
          handleRotation={handleRotation}
        />
      )}
    </section>
  );
}

export default Certificates;
