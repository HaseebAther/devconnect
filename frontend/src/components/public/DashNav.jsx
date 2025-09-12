import { Link } from "react-router-dom";
const DashNav = () => {

  return (
    <>
    <div className="bg-white shadow-md ">
        <header className="flex  items-center justify-between rounded-t-md mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 ">
  <div className="flex items-center">
       <Link to="/">
        <span className="text-purple-700 text-xl">{"</>"}</span>
        <span className="font-bold text-lg text-pink-600">DevConnect</span>
      </Link>
      </div>
    <nav className="space-x-6">
      <Link to="/dashboard" className="text-gray-700 hover:text-pink-600">Dashboard</Link>
      <Link to="/dashboard/profile" className="text-gray-700 hover:text-pink-600">Profile</Link>
      <button className="text-pink-600 font-semibold">Logout</button>
    </nav>
  </header>
  </div>
    </>
  );
};

export default DashNav;