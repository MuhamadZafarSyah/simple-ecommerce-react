import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import Error404 from "./pages/404.jsx";
import ProductPage from "./pages/products.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import ProfilePage from "./pages/profile.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { DarkModeContextProvider } from "../src/context/DarkMode.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </ThemeProvider>
);
