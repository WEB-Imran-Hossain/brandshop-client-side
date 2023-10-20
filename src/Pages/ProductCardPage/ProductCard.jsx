

const ProductCard = ({ product }) => {
    const { name, image, price, rating, description, brand, category } = product;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
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

            </div>
        </div>
    );
};

export default ProductCard;