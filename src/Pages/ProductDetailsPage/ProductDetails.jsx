import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data, 'console.log(productDetails)');
    const { _id, name, image, price, rating, description, brand, category } = data;
    const cartData = { name, image, price, rating, description, brand, category }
    const handleCartButton = () => {
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(cartData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button onClick={handleCartButton} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;