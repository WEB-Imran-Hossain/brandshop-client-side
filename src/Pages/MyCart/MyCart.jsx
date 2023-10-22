import { useLoaderData } from "react-router-dom";
import SingleCart from "./SingleCart";
import { useState } from "react";


const MyCart = () => {
    const product = useLoaderData();
    const [updateProduct, setUpdateProduct] = useState(product);
    console.log(product);

    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 my-20 w-[80vw] mx-auto">
            {
                updateProduct.map(product => <SingleCart key={product.id} product={product} updateProduct={updateProduct} setUpdateProduct={setUpdateProduct}></SingleCart>)
            }
        </div>
    );
};

export default MyCart;