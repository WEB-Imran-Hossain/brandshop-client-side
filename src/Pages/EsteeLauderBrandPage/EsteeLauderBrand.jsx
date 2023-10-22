import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCardPage/ProductCard";
import ProductNotFound from "../../Components/ProductNotFound/ProductNotFound";

const EsteeLauderBrand = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className="md:w-[80vw] md:mx-auto">
            <div className="carousel w-full h-screen mt-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/QfRLwkR/Estee-Lauder-slider-10.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/hLg6Gzv/Estee-Lauder-slider-11.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/47YZzjk/Estee-Lauder-slider-12.jpg" className="w-full" />
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
                    <strong>Estée Lauder</strong> is a renowned American multinational cosmetics and skincare company with a rich history dating back to 1946. The company is named after its founder, Estée Lauder, and has established itself as a global leader in the beauty and cosmetics industry. Here's an overview of Estée Lauder and its product offerings.
                </p>
            </div>
            {
                product.length ? <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        product.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div> : <ProductNotFound></ProductNotFound>
            }

        </div>
    );
};

export default EsteeLauderBrand;