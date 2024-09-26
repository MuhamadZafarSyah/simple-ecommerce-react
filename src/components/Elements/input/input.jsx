/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder, name } = props;
  return (
    <div className="relative flex w-full items-center">
      <input
        ref={ref}
        id={name}
        name={name}
        required
        type={type}
        placeholder={placeholder}
        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
      />
    </div>
  );
});

export default Input;
