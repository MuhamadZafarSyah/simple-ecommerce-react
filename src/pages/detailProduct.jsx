import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import CardDetailProduct from "../components/Fragments/CardDetailProduct";
import { Button } from "@material-tailwind/react";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Set loading sebelum memulai request
    getDetailProduct((data) => {
      setProduct(data);
      setIsLoading(false); // Selesai loading setelah data diterima
    }, id);
  }, [id]);

  return (
    <>
      <Link className="text-center w-full block mt-4" to={"/products"}>
        <Button color="blue">Back</Button>
      </Link>

      <div className="w-full h-screen flex justify-center items-center">
        <CardDetailProduct
          isLoading={isLoading} // Pass loading state to the card
          src={product.image}
          title={product.title}
          price={product.price}
        >
          {product.description}
        </CardDetailProduct>
      </div>
    </>
  );
};

export default DetailProductPage;
