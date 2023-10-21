import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCardPage/ProductCard";
import ProductNotFound from "../../Components/ProductNotFound/ProductNotFound";

const LorealBrand = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className="max-w-[80vw] mx-auto">
            <div className="carousel w-full h-screen mt-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Zm1yZmc/Loreal-slider-06.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/NNKDQfj/Loreal-slider-04.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/kJ6QNqS/Loreal-slider-05.jpg" className="w-full" />
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
                    <strong>Loréal</strong> is a well-known and globally recognized cosmetics and beauty company that offers a wide range of products in the beauty and personal care industry. L'Oréal's products are known for their quality, innovation, and diverse range to cater to various beauty needs. Here's a general description of L'Oréal cosmetics and its product categories.</p>
            </div>
            {
                product.length ? <div className="grid md:grid-cols-2 gap-4">
                    {
                        product.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div> : <ProductNotFound></ProductNotFound>
            }
        </div>
    );
};

export default LorealBrand;