import { Button, IconButton } from "@material-tailwind/react";
import useLogin from "../../hooks/useLogin";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";
export default function Navbar(params) {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const username = useLogin();

  const [totalCart, setTotalCart] = useState(0);

  const { total } = useTotalPrice();

  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogut = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <div className="text-lg flex gap-5 items-center bg-blue-600 text-white p-4 w-full justify-end">
      <h1>{username}</h1>
      <Button color="red" type="submit" onClick={handleLogut}>
        Logout
      </Button>

      <Button>
        Cart : {totalCart} | Price : ${total.toLocaleString("us-US")}
      </Button>

      <IconButton
        onClick={() => setIsDarkMode(!isDarkMode)}
        color="blue"
        className="rounded  hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
      >
        <i className={`fa text-lg ${isDarkMode ? " fa-sun" : " fa-moon"}`} />
      </IconButton>
    </div>
  );
}
