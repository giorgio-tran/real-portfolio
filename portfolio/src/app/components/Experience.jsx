import Pill from "./Pill";

const Experience = ({ job }) => {
  return (
    <div className="w-full">
      <div className="font-semibold flex justify-between">
        <div>{job.company}</div>
        <h1 className="flex justify-end">{job.date}</h1>
      </div>
      <div className="mb-1">{job.position}</div>
      {job.description && (
        <div className="mb-3 text-sm leading-normal">{job.description}</div>
      )}
      <div className="flex flex-wrap gap-1">
        {job.technologies.map((tech, index) => (
          <Pill key={index}>{tech}</Pill>
        ))}
      </div>
    </div>
  );
};

export default Experience;
