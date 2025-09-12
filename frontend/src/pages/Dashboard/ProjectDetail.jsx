import { useParams } from "react-router-dom";
import Button from "../../components/Auth/Button";
const ProjectDetail = () => {

    const id =useParams();

        const project = {
            id:id,
    title: "AI Code Review Assistant",
    description:
      "An AI-powered tool that reviews your code, suggests improvements, and checks for security vulnerabilities.",
    techStack: ["React", "Node.js", "Python", "OpenAI API"],
    roles: ["Frontend Developer", "Backend Developer"],
    tags: ["AI", "Web Dev", "Open Source"],
    github: "https://github.com/username/ai-code-review",
    collaborators: ["John Doe", "Jane Smith"],
  };



  return (
    <>
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {project.title}
        </h1>
        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Roles */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Roles Needed
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {project.roles.map((role, idx) => (
              <li key={idx}>{role}</li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Repository</h2>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            {project.github}
          </a>
        </div>

        {/* Collaborators */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Collaborators
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {project.collaborators.map((col, idx) => (
              <li key={idx}>{col}</li>
            ))}
          </ul>
        </div>

        {/* Collaborate Button */}
        <div className="text-center mt-8">
          <Button text="Collaborate"/>        
          </div>
      </div>
    </div>
    </>
  );
};

export default ProjectDetail;