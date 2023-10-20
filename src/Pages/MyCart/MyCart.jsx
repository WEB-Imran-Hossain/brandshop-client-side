import { useLoaderData } from "react-router-dom";
import SingleCart from "./SingleCart";

const MyCart = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {
                product.map(product => <SingleCart key={product.id} product={product}></SingleCart>)
            }
        </div>
    );
};

export default MyCart;