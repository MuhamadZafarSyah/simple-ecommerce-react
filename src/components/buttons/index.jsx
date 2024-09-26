const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, type = "button", onClick = () => {}, color } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white ${color} hover:bg-blue-700 focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default Button;
