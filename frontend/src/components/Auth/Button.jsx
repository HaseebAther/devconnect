const Button = ({ text, onClick, type = "button" }) => {

  return (
    <>
     <button
      type={type}
      onClick={onClick}
      className="w-full bg-pink-600 text-white font-semibold py-2.5 
                 rounded-lg shadow-md hover:bg-pink-700 transition-colors"
    >
      {text}
    </button>
    </>
  );
};

export default Button;
