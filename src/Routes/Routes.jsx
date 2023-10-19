import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../Pages/404Page/NotFound";
import Home from "../Pages/HomePage/Home";
import AddProduct from "../Pages/AddProductPage/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegisterPage/Registration";
import PrivateRoutes from "./PrivateRoutes";
import BrandCard from "../Pages/BrandCardPage/BrandCard";
import BrandProduct from "../Pages/BrandProductPage/BrandProduct";
import LorealBrand from "../Pages/LorealBrandPage/LorealBrand";
import EsteeLauderBrand from "../Pages/EsteeLauderBrandPage/EsteeLauderBrand";
import ChanelBrand from "../Pages/ChanelBrandPage/ChanelBrand";
import DiorBrand from "../Pages/DiorBrandPage/DiorBrand";
import RevlonBrand from "../Pages/RevlonBrandPage/RevlonBrand";
import AvonBrand from "../Pages/AvonBrandPage/AvonBrand";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("brand.json")
      },
      {
        path: "/addProduct",
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/:id",
        element: <PrivateRoutes><BrandProduct></BrandProduct></PrivateRoutes>,
      },
      {
        path: "/loreal",
        element: <LorealBrand></LorealBrand>,
        loader: () => fetch("brand.json")
      },
      {
        path: "/estee_lauder",
        element: <EsteeLauderBrand></EsteeLauderBrand>
      },
      {
        path: "/chanel",
        element: <ChanelBrand></ChanelBrand>
      },
      {
        path: "/revlon",
        element: <DiorBrand></DiorBrand>
      },
      {
        path: "/dior",
        element: <RevlonBrand></RevlonBrand>
      },
      {
        path: "/avon",
        element: <AvonBrand></AvonBrand>
      }
    ],
  },
]);

export default router;
