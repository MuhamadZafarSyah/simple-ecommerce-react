/* eslint-disable react/display-name */
import Label from "./label";
import Input from "./input";
import { forwardRef } from "react";

// GUNAKAN FORWARDREF UNTUK MANIPULASI DOM PADA COMPONENT
const InputForm = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder, name, htmlFor, children } = props;
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <Label htmlFor={htmlFor}>{children}</Label>
        <div className="relative flex items-center">
          <Input ref={ref} type={type} placeholder={placeholder} name={name} />
        </div>
      </div>
    </div>
  );
});

export default InputForm;
