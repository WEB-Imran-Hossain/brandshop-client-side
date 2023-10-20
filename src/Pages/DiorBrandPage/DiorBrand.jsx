import React from 'react';

const DiorBrand = () => {
    return (
        <div className="w-[80vw] mx-auto">
            <div className="carousel w-full h-screen mt-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/t8V3B4h/Dior-slider-16.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9NQHKjh/Dior-slider-17.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/GCcM5bx/Dior-slider-18.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* featured products */}
            <div>
                <h2 className="text-4xl font-bold uppercase text-center my-4 text-black mt-20">
                    Our Featured <span className="text-[#4E7661]">Products</span>
                </h2>
                <p className="text-lg font-normal mb-20 text-center">
                <strong>Dior</strong> commonly known as Dior, is a prestigious French luxury fashion and beauty brand that has been synonymous with sophistication, elegance, and innovation for over seven decades. Dior's cosmetic offerings are highly regarded for their quality, creativity, and luxurious presentation. Here's an overview of Dior's cosmetics and brand identity.
                </p>
            </div>

        </div>
    );
};

export default DiorBrand;