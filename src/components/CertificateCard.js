import Image from "next/image";
import Link from "next/link";

function CertificateCard({ certificate }) {
  const { name, organization, date, imageURL, viewLink, skillsEarned } =
    certificate;

  return (
    <li className="col-span-1 h-full w-full p-2 border border-solid border-white rounded-2xl">
      <Link href={viewLink} className="w-full cursor-pointer  rounded-lg">
        <Image
          src={imageURL}
          alt={name}
          className="w-full h-auto rounded-t-2xl"
          height={200}
          width={200}
        />
      </Link>
      <div className="mt-2 p-2">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-gray-400">{organization}</p>
        <p className="text-gray-400">{date}</p>
        <div className="flex flex-wrap space-x-2 mt-2">
          {skillsEarned &&
            skillsEarned.map((skill, index) => (
              <span
                key={index}
                className="text-gray-100 bg-gray-700 dark:bg-white dark:text-gray-900 hover:bg-red-500 hover:text-gray-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded transition-colors duration-300 ease-in-out mb-2"
              >
                {skill}
              </span>
            ))}
        </div>
      </div>
    </li>
  );
}

export default CertificateCard;
