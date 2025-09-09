const Button = ({text, classes}) => {

  return (
    <>
       <button className={` ${classes}`}>{text}</button>
    </>
  );
};

export default Button;