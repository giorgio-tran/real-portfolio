import Link from "next/link";
import Pill from "./Pill";
import Image from "next/image";

const Project = ({ project }) => {
  return (
    <div className="w-full">
      <div className="flex md:w-3/4 md:pr-4 justify-between items-baseline">
        <div className="font-bold">{project.name}</div>
        <div className="text-sm flex gap-3">
          {project.links &&
            project.links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                className="flex gap-1 items-center hover:text-blue-400"
              >
                {link.name}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                </svg>
              </Link>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:gap-3 md:flex-row">
        <div className="md:w-3/4">
          <div className="text-sm py-1 leading-normal">
            {project.description}
          </div>
          <div className="flex flex-wrap gap-x-1.5 gap-y-1 py-1 lg:py-2">
            {project.technologies.map((tech, index) => (
              <Pill key={index}>{tech}</Pill>
            ))}
          </div>
        </div>
        <div className="lg:w-1/4">
          <Image
            src={project.image}
            width={200}
            height={200}
            className="border-gray-500 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
