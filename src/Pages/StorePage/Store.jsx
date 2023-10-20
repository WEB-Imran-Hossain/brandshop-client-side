import { Link } from "react-router-dom";


const Store = () => {
    return (
        // newyork store
        <div>
            <div className="flex flex-col text-center lg:text-left md:flex-col lg:flex-row items-center justify-center gap-28 mt-52 mb-52">
                <div>
                    <img className="w-[45rem] p-5" src="../../../public/image/USA Store.jpg" alt="" />
                </div>
                <div className="lg:w-[30rem] p-10 md:p-10 lg:p-0">
                    <h2 className="text-7xl font-bold uppercase">Find a <span className="text-[#4E7661]">Store</span></h2>
                    <p className="mt-10">Physical store or online, cosmetic brand product stores aim to provide customers with a wide selection of beauty and skincare products, a tailored shopping experience, and access to the latest trends and innovations in the <strong>beauty</strong> industry.</p>
                    <div className="mt-5">
                        <h2 className=" text-2xl font-bold">New York Store</h2>
                        <div className="flex justify-between mt-5">
                            <div className="">
                                <h4 className="font-bold">Address</h4>
                                <p>3245 Central Park West <br />PH Avenue, NY 124</p>
                            </div>
                            <div>
                                <h4 className="font-bold">Store Hours</h4>
                                <p>Mon - Fri:
                                    08:30 - 20:00</p>
                                <p>Sat & Sun:
                                    09:30 - 21:30</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row  items-center justify-between mt-10">
                        <div>
                            <h4 className="font-bold">Email</h4>
                            <Link className="link link-hover">info@beautyshop.com</Link>
                        </div>
                        <div className="mt-5 lg:mt-0">
                            <h4 className="font-bold">Call Now</h4>
                            <Link className="link link-hover">61-251-9966</Link>
                        </div>
                    </div>
                </div>
            </div>

{/* calfornia store */}
            <div className="flex flex-col text-center flex-col-reverse lg:flex-row-reverse lg:text-left md:flex-col lg:flex-row items-center justify-center gap-28 mt-52 mb-52">
                <div>
                    <img className="w-[45rem] p-5" src="../../../public/image/Calfornia store.jpg" alt="" />
                </div>
                <div className="lg:w-[30rem] p-10 md:p-10 lg:p-0">
                    <h2 className="text-7xl font-bold uppercase">Find a <span className="text-[#4E7661]">Store</span></h2>
                    <p className="mt-10">A cosmetic brand product store, whether it's a physical brick-and-mortar shop or an online e-commerce platform, is a retail destination that specializes in offering a wide range of <strong>beauty</strong> and skincare products from a particular brand or a selection of brands. </p>
                    <div className="mt-5">
                        <h2 className=" text-2xl font-bold">California Store</h2>
                        <div className="flex justify-between mt-5">
                            <div className="">
                                <h4 className="font-bold">Address</h4>
                                <p>3233 Madison Avenue <br />VH Square, CA 128</p>
                            </div>
                            <div>
                                <h4 className="font-bold">Store Hours</h4>
                                <p>Mon - Fri:
                                    08:30 - 20:00</p>
                                <p>Sat & Sun:
                                    09:30 - 21:30</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row  items-center justify-between mt-10">
                        <div>
                            <h4 className="font-bold">Email</h4>
                            <Link className="link link-hover">info@beautyshop.com</Link>
                        </div>
                        <div className="mt-5 lg:mt-0">
                            <h4 className="font-bold">Call Now</h4>
                            <Link className="link link-hover">61-251-9966</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Store;