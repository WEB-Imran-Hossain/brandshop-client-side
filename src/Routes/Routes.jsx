import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../Pages/404Page/NotFound";
import Home from "../Pages/HomePage/Home";
import AddProduct from "../Pages/AddProductPage/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegisterPage/Registration";
import PrivateRoutes from "./PrivateRoutes";
import LorealBrand from "../Pages/LorealBrandPage/LorealBrand";
import EsteeLauderBrand from "../Pages/EsteeLauderBrandPage/EsteeLauderBrand";
import ChanelBrand from "../Pages/ChanelBrandPage/ChanelBrand";
import DiorBrand from "../Pages/DiorBrandPage/DiorBrand";
import RevlonBrand from "../Pages/RevlonBrandPage/RevlonBrand";
import AvonBrand from "../Pages/AvonBrandPage/AvonBrand";
import About from "../Pages/AboutPage/About";
import Store from "../Pages/StorePage/Store";
import ProductDetails from "../Pages/ProductDetailsPage/ProductDetails";
import Update from "../Pages/UpdatePage/Update";

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
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        loader: () => fetch("https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/cart")
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
        path: "/product/:id",
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/product/${params.id}`)
      },
      {
        path: "/loreal/:id",
        element: <LorealBrand></LorealBrand>,
        loader: () => fetch('https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/product/loreal')
      },
      {
        path: "/estee_lauder/:id",
        element: <EsteeLauderBrand></EsteeLauderBrand>,
        loader: () => fetch('https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/product/estee_lauder')
      },
      {
        path: "/chanel/:id",
        element: <ChanelBrand></ChanelBrand>,
        loader: () => fetch('https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/product/chanel')
      },
      {
        path: "/revlon/:id",
        element: <RevlonBrand></RevlonBrand>,
        loader: () => fetch('https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/product/revlon')
      },
      {
        path: "/dior/:id",
        element: <DiorBrand></DiorBrand>,
        loader: () => fetch('https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/product/dior')
      },
      {
        path: "/avon/:id",
        element: <AvonBrand></AvonBrand>,
        loader: () => fetch('https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/product/avon')
      },
      {
        path: "/about",
        element: <PrivateRoutes><About></About></PrivateRoutes>
      },
      {
        path: "/store",
        element: <PrivateRoutes><Store></Store></PrivateRoutes>
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/product/${params.id}`)
      }
    ],
  },
]);

export default router;
