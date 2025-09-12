import { Link } from "react-router-dom";

const Navbutton = ({icon ,text, classes,to='#'}) => {

  return (
    <>
      <Link to={to}>
       <button className={` ${classes}`} >{text} {icon}</button>
       </Link>

    </>
  );
};

export default Navbutton;