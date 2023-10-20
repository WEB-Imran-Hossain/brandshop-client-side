import { useLoaderData } from "react-router-dom";


const Update = () => {
    const product = useLoaderData();
    const { _id, name, image, price, rating, description, brand, category} = product;
    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.url.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const updateProduct = {
            name,
            image,
            brand,
            category,
            price,
            rating,
            description,
        };
        fetch(`http://localhost:5000/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }







    return (
        <div className="hero min-h-screen mt-10 mb-40">
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 max-w-screen-xl shadow-2xl bg-[#F4F3F0]">
                    <form onSubmit={handleUpdateProduct} className="card-body p-28">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Add New Product</h1>
                            <p className="py-6">
                                We have a passion for bringing out the best in everyone and
                                providing a space where you can express yourself through the art
                                of cosmetics and skincare.
                            </p>
                        </div>
                        <div className="md:flex mb-5 gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    defaultValue={name}
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Image</span>
                                </label>
                                <input
                                    type="url"
                                    name="url"
                                    placeholder="Image url"
                                    className="input input-bordered"
                                    defaultValue={image}
                                    required
                                />
                            </div>
                        </div>



                        <div className="md:flex mb-5 gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    defaultValue={price}
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    placeholder="1 to 5"
                                    defaultValue={rating}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-24 "
                                placeholder="Short description"
                                name="description"
                                defaultValue={description}
                            />
                        </div>

                        <div className="flex justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <p className="label-text font-bold">Brand Name</p>
                                </label>

                                <label className="label">
                                    <input type="radio" name="brand" value="Loreal" />
                                    <p className="label-text font-bold ml-5">Loreal</p>
                                </label>

                                <label className="label">
                                    <input type="radio" name="brand" value="Estee Lauder" />
                                    <p className="label-text font-bold ml-5">Estee Lauder</p>
                                </label>

                                <label className="label">
                                    <input type="radio" name="brand" value="Chanel" />
                                    <p className="label-text font-bold ml-5">Chanel</p>
                                </label>

                                <label className="label">
                                    <input type="radio" name="brand" value="Revlon" />
                                    <p className="label-text font-bold ml-5">Revlon</p>
                                </label>

                                <label className="label">
                                    <input type="radio" name="brand" value="Dior" />
                                    <p className="label-text font-bold ml-5">Dior</p>
                                </label>

                                <label className="label">
                                    <input type="radio" name="brand" value="Avon" />
                                    <p className="label-text font-bold ml-5">Avon</p>
                                </label>
                            </div>

                            <div className="space-x-3">
                                <label className="label space-x-5">
                                    <p className="label-text font-bold">Type</p>
                                </label>
                                <label className="label space-x-5">
                                    <input type="radio" name="category" value="Mascara" />
                                    <p className="label-text font-bold">Mascara</p>
                                </label>

                                <label className="label space-x-5">
                                    <input type="radio" name="category" value="Lotion" />
                                    <p className="label-text font-bold">Lotion</p>
                                </label>

                                <label className="label space-x-5">
                                    <input type="radio" name="category" value="Makeup" />
                                    <p className="label-text font-bold">Makeup</p>
                                </label>

                                <label className="label space-x-5">
                                    <input type="radio" name="category" value="Hair Color" />
                                    <p className="label-text font-bold">Hair Color</p>
                                </label>

                                <label className="label space-x-5">
                                    <input type="radio" name="category" value="Perfume" />
                                    <p className="label-text font-bold">Perfume</p>
                                </label>

                                <label className="label space-x-5">
                                    <input type="radio" name="category" value="Lipstick" />
                                    <p className="label-text font-bold">Lipstick</p>
                                </label>

                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Update"
                                className="btn btn-primary text-white bg-[#4E7661] hover:bg-[#000] border-transparent hover:border-transparent"
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;