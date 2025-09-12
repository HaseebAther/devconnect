const Input = ({ label, type = "text", name, classes="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200  focus:ring-opacity-50 px-3 py-2", value, onChange, placeholder, required }) => {

  return (
    <>
       <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={classes}
      />
    </div>
    </>
  );
};

export default Input;