import Swal from "sweetalert2";

const SingleCart = ({ product, updateProduct, setUpdateProduct }) => {

    const { _id, name, image, price, rating, description, brand, category } = product;

    const haldleButtonDelete = (_id) => {
        fetch(`https://beauty-shop-server-web-imran-hossain-webimran2021s-projects.vercel.app/cart/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // delete alert
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#4e7661',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it !'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                        )
                        const remaining = updateProduct?.filter(cartItem => cartItem._id !== _id);
                        setUpdateProduct(remaining);
                    }
                })
            })
    }

    return (
        <div className="card bg-base-100 h-[55rem] shadow-xl">
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

                <div className="text-center mt-5">
                    <button onClick={() => haldleButtonDelete(_id)} className="btn bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold rounded-sm">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;