import { useState } from "react";
import Input from "../../components/Auth/Input";
import Button from "../../components/Auth/Button"
const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    roles: "",
    tags: "",
    github: "",
    collaborators: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Submitted:", formData);
    // later => send to backend
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create a New Project
        </h2>

        <div className="space-y-5">
          <Input
            label="Project Title"
            name="title"
            placeholder="Enter your project title"
            value={formData.title}
            onChange={handleChange}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Briefly describe your project..."
              className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <Input
            label="Tech Stack"
            name="techStack"
            placeholder="React, Node.js, MongoDB..."
            value={formData.techStack}
            onChange={handleChange}
          />

          <Input
            label="Roles Needed"
            name="roles"
            placeholder="Frontend Dev, Backend Dev..."
            value={formData.roles}
            onChange={handleChange}
          />

          <Input
            label="Tags"
            name="tags"
            placeholder="AI, Web Dev, Open Source..."
            value={formData.tags}
            onChange={handleChange}
          />

          <Input
            label="GitHub Repository"
            name="github"
            placeholder="https://github.com/username/repo"
            value={formData.github}
            onChange={handleChange}
          />

          <Input
            label="Add Collaborators"
            name="collaborators"
            placeholder="Enter emails or usernames..."
            value={formData.collaborators}
            onChange={handleChange}
          />

          <Button  onClick={handleSubmit}  className="w-full bg-pink-600 text-white" text="Submit Project"/>
         
     
        </div>
      </div>
    </div>
    </>
  );
};

export default AddProject;