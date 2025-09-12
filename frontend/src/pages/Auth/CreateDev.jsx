import { useState } from "react";
import Input from "../../components/Auth/Input";
import Button from "../../components/Auth/Button";
const CreateDev = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    location: "",
    bio: "",
    skills: "",
    github: "",
    linkedin: "",
    portfolio: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile data:", form);
    // later: send to backend
  };
  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">Create Your Dev Profile</h1>
          <p className="text-sm text-gray-600 mt-2">
            Tell us about yourself and showcase your skills 🚀
          </p>
        </div>

        {/* Form */}
        <div  className="space-y-5">
          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Username" name="username" value={form.username} onChange={handleChange} />
          <Input label="Location" name="location" value={form.location} onChange={handleChange} />

          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="What do you love to build?"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 px-3 py-2"
              rows="3"
            />
          </div>

          <Input
            label="Skills & Tools"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="e.g. JavaScript, Python, React"
          />

          <Input
            label="GitHub"
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="https://github.com/username"
          />
          <Input
            label="LinkedIn"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
          />
          <Input
            label="Portfolio"
            name="portfolio"
            value={form.portfolio}
            onChange={handleChange}
            placeholder="https://yourwebsite.com"
          />

          <Input
            label="Profile Picture URL"
            name="profilePic"
            value={form.profilePic}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />

          <Button onClick={handleSubmit} text="Save Profile" classes="w-full bg-pink-600 hover:bg-pink-700" />
        </div>
      </div>
    </div>
    </>
  );
};

export default CreateDev;