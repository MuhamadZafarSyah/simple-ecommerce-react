import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";
const TableCartProduct = (props) => {
  const { products } = props;

  const cart = useSelector((state) => state.cart.data);

  // const [totalPrice, setTotalPrice] = useState(0);

  const { total } = useTotalPrice();

  const dispatch = useTotalPriceDispatch();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: { total: sum },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // PENGGUNAAN USEREF UNTUK MEMANIPULASI TABLE ROW
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`w-full ${isDarkMode ? "text-white" : "text-black"}`}>
      <h1 className="text-3xl font-bold">Cart</h1>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            cart.map((item) => {
              // eslint-disable-next-line react/prop-types
              const product = products.find((p) => p.id === item.id);
              return (
                <tr key={item.id}>
                  <td>{product.title.substring(0, 30)}...</td>
                  <td>
                    {product.price.toLocaleString("us-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    {(product.price * item.quantity).toLocaleString("us-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              );
            })}
          <tr ref={totalPriceRef} className="font-bold">
            <td colSpan={2}>Total Harga</td>
            <td colSpan={3}>
              {total.toLocaleString("us-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCartProduct;
