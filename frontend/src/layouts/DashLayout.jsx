import { Outlet } from "react-router-dom";
import DashFooter from "../components/public/DashFooter";
import DashNav from "../components/public/DashNav";

const DashLayout = () => {

  return (
    <>
      <DashNav/>
      <Outlet/>
      <DashFooter/>
    </>
  );
};

export default DashLayout;