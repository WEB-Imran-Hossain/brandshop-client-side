import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { _id, name, image, price, rating, description, brand, category } = product;


    return (
        <div className="card bg-base-100 h-[55rem] shadow-xl max-w-[90vw] mx-auto">
            <figure><img src={image} /></figure>

            <div className="card-body">
                <div className="flex justify-between">
                    <div className="card-actions flex justify-left">
                        <div>
                            <small className="font-medium">Brand</small>
                            <div className="badge text-base font-semibold badge-outline ml-2 p-3">{brand}</div>
                        </div>
                    </div>
                    <div className="card-actions justify-right">
                        <div>
                            <small className="font-medium">Category</small>
                            <div className="badge ext-base font-semibold badge-outline ml-2 p-3">{category}</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div>
                        <p className="text-3xl font-bold">$ {price}</p>
                    </div>
                    <div className="rating rating-md">
                        <input type="radio" name="rating-9" className="rating-hidden" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                    </div>
                </div>
                <h2 className="card-title text-2xl mt-3">
                    {name}
                </h2>
                <p className="text-base font-normal text-justify">{description}</p>
                <div className="flex justify-center items-center gap-3">
                    <div>
                        <Link to={`/product/${_id}`}>
                            <button className="btn bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold rounded-sm">
                                View Details
                            </button></Link>
                    </div>

                    <div>
                        <Link to={`/update/${_id}`}>
                            <button className="btn bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold rounded-sm">
                                Update
                            </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;