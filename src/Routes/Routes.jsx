import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../Pages/404Page/NotFound";
import Home from "../Pages/HomePage/Home";
import AddProduct from "../Pages/AddProductPage/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/mycart",
                element: <MyCart></MyCart> 
            },
            {
                path: "/login",
                element: <MyCart></MyCart>  
            }
        ]
    },
]);

export default router;