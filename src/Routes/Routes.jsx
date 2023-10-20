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
import About from "../Pages/AboutPage/About";
import Store from "../Pages/StorePage/Store";

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
        path: "/addproduct",
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
        path: "/loreal/:id",
        element: <LorealBrand></LorealBrand>
      },
      {
        path: "/estee_lauder/:id",
        element: <EsteeLauderBrand></EsteeLauderBrand>
      },
      {
        path: "/chanel/:id",
        element: <ChanelBrand></ChanelBrand>
      },
      {
        path: "/revlon/:id",
        element: <RevlonBrand></RevlonBrand>
      },
      {
        path: "/dior/:id",
        element: <DiorBrand></DiorBrand>
      },
      {
        path: "/avon/:id",
        element: <AvonBrand></AvonBrand>,
        loader:()=>fetch('http://localhost:5000/product')
      },
      {
        path: "/about",
        element: <PrivateRoutes><About></About></PrivateRoutes>
      },
      {
        path: "/store",
        element: <PrivateRoutes><Store></Store></PrivateRoutes>
      }
    ],
  },
]);

export default router;
