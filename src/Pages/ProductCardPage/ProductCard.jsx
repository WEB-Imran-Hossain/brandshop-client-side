import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { _id, name, image, price, rating, description, brand, category } = product;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>

            <div className="card-body">
                <div className="flex justify-between">
                    <div className="card-actions justify-left">
                        <div className="badge badge-outline">{brand}</div>
                    </div>
                    <div className="card-actions justify-right">
                        <div className="badge badge-outline">{category}</div>
                    </div>
                </div>
                <h2 className="card-title">
                    {name}
                </h2>
                <p>{description}</p>
                <p>{rating}</p>
                <p>$ {price}</p>
                <Link to={`/product/${_id}`}>
                    <button className="btn bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold rounded-sm">
                        View Details
                    </button></Link>

                <Link to={`/update/${_id}`}>
                    <button className="btn bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold rounded-sm">
                        Update
                    </button></Link>
            </div>
        </div>
    );
};

export default ProductCard;