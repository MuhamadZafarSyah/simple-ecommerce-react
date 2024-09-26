import { useContext, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import useLogin from "../hooks/useLogin";
import { Button } from "@material-tailwind/react";
import TableCartProduct from "../components/Fragments/TableCartProduct";
import Navbar from "../components/Layouts/Navbar";
import { DarkModeContext } from "../context/DarkMode";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.quantity;
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products]);

  // const handleAddToCart = (id) => {
  //   if (cart.some((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, quantity: 1 }]);
  //   }
  // };

  // Menggunakan useRef

  // const cartRef = useRef([
  //   {
  //     id: 1,
  //     quantity: 10,
  //   },
  // ]);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, quantity: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // PENGGUNAAN USEREF UNTUK MEMANIPULASI TABLE ROW
  // const totalPriceRef = useRef();

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <Navbar />
      <div className={`w-full flex gap-2 ${isDarkMode && "bg-gray-900"}`}>
        <div className="flex w-3/5 flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-2/5 mt-4 text-black">
          {/* <table className="w-full text-">
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
                        {(product.price * item.quantity).toLocaleString(
                          "us-US",
                          {
                            style: "currency",
                            currency: "USD",
                          }
                        )}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef} className="font-bold">
                <td colSpan={2}>Total Harga</td>
                <td colSpan={3}>
                  {totalPrice.toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table> */}

          <TableCartProduct products={products}></TableCartProduct>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
