import UserProfile from "../../components/dashboard/UserProfile";

const ProfilePage = () => {
  const sampleProfile = {
  name: "John Doe",
  username: "johndev",
  location: "San Francisco, CA",
  bio: "Full Stack Developer who loves building SaaS apps 🚀",
  skills: ["JavaScript", "React", "Node.js", "Django", "Python"],
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  portfolio: "https://johndoe.dev",
  profilePicture: "https://avatars.githubusercontent.com/u/1?v=4"
};
  return (
    <>
    <div className="flex mb-100 p-5">
        <UserProfile profile={sampleProfile}/></div>
    </>
  );
};

export default ProfilePage;
