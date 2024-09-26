/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkMode";
import { IconButton } from "@material-tailwind/react";

const AuthLayout = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars

  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const { children, title, type } = props;
  return (
    <>
      <div className={`font-[sans-serif] ${isDarkMode && "bg-gray-900"}`}>
        <div className="absolute top-4 right-4">
          <IconButton
            onClick={() => setIsDarkMode(!isDarkMode)}
            color="blue"
            className="rounded  hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
          >
            <i
              className={`fa text-lg ${isDarkMode ? " fa-sun" : " fa-moon"}`}
            />
          </IconButton>
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-8 rounded-2xl bg-white shadow">
              <h2 className="text-gray-800 text-center text-2xl font-bold">
                {title}
              </h2>
              {children}
            </div>
            <Navigation type={type} />
          </div>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-gray-800 text-sm !mt-8 text-center">
        Don't have an account?
        <Link
          to="/register"
          className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
        >
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-gray-800 text-sm !mt-8 text-center">
        Already have an account?
        <Link
          to="/login"
          className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
        >
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
