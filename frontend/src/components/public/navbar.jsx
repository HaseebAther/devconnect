import Button from "./button";
import {Link,NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>

    <nav className="bg-gradient-to-r from-purple-300 to-purple-400 p-4 flex items-center justify-between rounded-t-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-purple-700 text-xl">{"</>"}</span>
        <span className="font-bold text-lg text-pink-600">DevConnect</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-black">
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
      <div className="flex items-center space-x-4">
       <Button text="Sign In" classes="text-black hover:text-purple-700 hover:bg-white/50 p-2 rounded-sm " />

        <Button text="Get Started" classes="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:opacity-90 hover:translate-x-px hover:scale-x-110 "/>
         

      </div>
    </nav>
    </>
  );
};

export default Navbar;