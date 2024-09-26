const Label = (props) => {
  // eslint-disable-next-line react/prop-types
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="text-gray-800 text-sm mb-2 block">
      {children}
    </label>
  );
};

export default Label;
