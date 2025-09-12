import { Outlet } from "react-router-dom";
import Authnav from "../components/public/Authnav";
const Authlayout = () => {

  return (
    <>
            
<Authnav 
  title="Create an account" 
  subtitle="Join us and get started today" 
/>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full bg-white rounded-2xl shadow-md ">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Authlayout;