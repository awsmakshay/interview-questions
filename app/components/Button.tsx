const Button = ({ children, className, onClick, ...restProps }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-cyan-500 hover:bg-cyan-700 text-white rounded-lg font-bold py-2 px-4 rounded`}
      {...restProps}
    >
      <div className="flex items-center justify-center  capitalize">
        {children}
      </div>
    </button>
  );
};

export default Button;
