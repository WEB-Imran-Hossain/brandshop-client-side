import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCardPage/ProductCard';
import ProductNotFound from '../../Components/ProductNotFound/ProductNotFound';

const ChanelBrand = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className="md:max-w-[80vw] md:mx-auto">
            <div className="carousel w-full h-screen mt-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/WyxvFhX/Chanel-slider-07.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6Ft5ZJX/Chanel-slider-08.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ZXJkDT2/Chanel-slider-09.jpg" className="w-full" />
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
                    <strong>Chanel </strong> is a world-renowned French luxury fashion and beauty brand with a rich history dating back to the early 20th century. It has become synonymous with elegance, sophistication, and timeless beauty. Here is an overview of Chanel's cosmetic offerings and its brand identity.
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

export default ChanelBrand;