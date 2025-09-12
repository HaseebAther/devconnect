import { Link } from "react-router-dom";
const Authnav = () => {

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 py-8 bg-white shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <span className="text-purple-700 text-xl">{"</>"}</span>
         <span className="font-bold text-lg text-pink-600">DevConnect</span>
      </Link>

      {/* Optional link (Home, Pricing, etc.) */}
      <Link
        to="/"
        className="text-sm font-medium text-pink-600 hover:underline"
      >
        Back to Home
      </Link>
    </nav>
    </>
  );
};

export default Authnav;