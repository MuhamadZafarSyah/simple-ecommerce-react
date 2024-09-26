import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-7xl text-red-800 font-bold">Opps!</h1>
      <p className="text-3xl">{error.statusText || error.message}</p>
    </div>
  );
};

export default Error404;
