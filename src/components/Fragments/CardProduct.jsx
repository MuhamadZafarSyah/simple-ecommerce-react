/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const CardProduct = ({ children }) => {
  return (
    <div className="mx-auto mt-11  w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      {children}
    </div>
  );
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img
        className="h-48 w-full object-cover object-center"
        src={image}
        alt="Product Image"
      />
    </Link>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="px-2 flex flex-col justify-between">
      <h2 className="mb-2 text-lg font-medium h-full dark:text-white text-gray-900">
        {title}
      </h2>
      <p className="mb-2 text-base dark:text-gray-300 text-black">
        {children.substring(0, 100)}...
      </p>
    </div>
  );
};
const Footer = ({ price, id }) => {
  const dispact = useDispatch();

  return (
    <div className="flex items-center justify-between mt-2 p-4">
      <div className="flex items-center">
        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
          {price.toLocaleString("us-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>

      <Button
        onClick={() => dispact(addToCart({ id, quantity: 1 }))}
        color="black"
      >
        Add To Cart
      </Button>
    </div>
  );
};

Footer.propTypes = {
  price: PropTypes.number.isRequired,
};

Body.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.propTypes = {
  image: PropTypes.string.isRequired,
};

CardProduct.propTypes = {
  children: PropTypes.node,
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
