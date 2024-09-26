import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { SyncLoader } from "react-spinners";

export function CardDetailProduct(props) {
  // eslint-disable-next-line react/prop-types
  const { src, title, price, children, isLoading } = props;

  if (isLoading) {
    // Jika masih loading, tampilkan teks atau spinner
    return (
      <div className="w-96 h-96 flex justify-center items-center">
        <SyncLoader color="#36d7b7" />
      </div>
    );
  }

  // Jika data sudah siap, tampilkan konten card
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={src}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {children}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardDetailProduct;
