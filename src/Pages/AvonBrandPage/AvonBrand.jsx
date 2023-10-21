import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCardPage/ProductCard";
import ProductNotFound from "../../Components/ProductNotFound/ProductNotFound";


const AvonBrand = () => {
    const product = useLoaderData();
    console.log(product);

    return (
        <div className="w-[80vw] mx-auto">
            <div className="carousel w-full h-screen mt-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/fNGQSjX/Avon-slider-13.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/p1x2Nv4/Avon-slider-14.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/CnK7kjz/Avon-slider-15.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* featured products */}
            <div>
                <h2 className="text-7xl font-bold uppercase text-center my-4 text-black mt-20">
                    Our Featured <span className="text-[#4E7661]">Products</span>
                </h2>
                <p className="text-lg font-normal mb-20 text-center">
                    <strong>Avon</strong> is an internationally recognized beauty and cosmetics brand that has been in operation for over a century. Founded in 1886 by David H. McConnell, Avon is known for its extensive line of cosmetics, skincare, fragrances, and personal care products. Here is an overview of Avon's cosmetics and brand identity.
                </p>

                {
                    product.length ? <div className="grid md:grid-cols-2 gap-4">
                        {
                            product.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                    </div> : <ProductNotFound></ProductNotFound>
                }

            </div>

        </div>
    );
};

export default AvonBrand;