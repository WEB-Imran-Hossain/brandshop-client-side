
const SingleCart = ({ product }) => {
    const { _id, name, image, price, rating, description, brand, category } = product;
    const haldleButtonDelete = (_id) => {
        fetch(`http://localhost:5000/cart/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

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

                <button onClick={() => haldleButtonDelete(_id)} className="btn bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold rounded-sm">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default SingleCart;