const AddProduct = () => {
  return (
    <div className="hero min-h-screen mt-10 mb-40">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 max-w-screen-xl shadow-2xl bg-[#F4F3F0]">
          <form className="card-body p-28">
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
                  placeholder="Image"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="md:flex mb-5 gap-2">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Brand Name</span>
                </label>
                <select class="input input-bordered">
                  <option disabled selected>
                    Brand name
                  </option>
                  <option>L'Oréal</option>
                  <option>Estée Lauder</option>
                  <option>Chanel</option>
                  <option>Revlon</option>
                  <option>Dior</option>
                  <option>Avon</option>
                </select>
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Type</span>
                </label>
                <select className="input input-bordered">
                  <option disabled selected>
                    Category Name
                  </option>
                  <option>Mascara</option>
                  <option>Lotion</option>
                  <option>Makeup</option>
                  <option>Hair Color</option>
                  <option>Perfume</option>
                  <option>Lipstick</option>
                </select>
              </div>
            </div>

            <div className="md:flex mb-5 gap-2">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="Price"
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
                  name="number"
                  placeholder="1 to 5"
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
                class="textarea textarea-bordered h-24 "
                placeholder="Short description"
              />
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Add button"
                className="btn btn-primary text-white bg-[#4E7661] hover:bg-[#000] border-transparent hover:border-transparent"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
