import Navbutton from "./Navbutton";
import {Link,NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
  <div className="">
    <nav className="flex  items-center justify-between rounded-t-md mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
      {/* Logo */}
     <Link 
     to="/">
      <div className="flex items-center space-x-2">
        <span className="text-purple-700 text-xl">{"</>"}</span>
        <span className="font-bold text-lg text-pink-600">DevConnect</span>
      </div>
      </Link>
      
      {/* Links */}
      <div className="hidden md:flex space-x-8 text-sm font-bold text-black">
       <NavLink 
       to={'/'}
       className={({isActive})=> `hover:text-purple-700 ${isActive? "text-purple-700": "text-black"} `}>
          Home
        </NavLink>
       <NavLink
       to={'/howitworks'}
       className={({isActive})=> `hover:text-purple-700 ${isActive? "text-purple-700": "text-black"} `}>
          How it Works
        </NavLink>
     
        <NavLink 
        to={'pricing'}
        className={({isActive})=> `hover:text-purple-700 ${isActive? "text-purple-700": "text-black"} `}>
          Pricing   
        </NavLink>
     
        
      </div>

      {/* Buttons */}
      <div  className="flex items-center space-x-4">
       <Navbutton to="auth/login" text="Sign In" classes="text-black hover:text-purple-700 hover:bg-white/50 p-2 rounded-sm " />

        <Navbutton to="auth/register" text="Get Started" classes="bg-pink-600 text-white px-4 py-2 rounded-md hover:opacity-90 hover:translate-x-px hover:scale-x-110 "/>
         

      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;