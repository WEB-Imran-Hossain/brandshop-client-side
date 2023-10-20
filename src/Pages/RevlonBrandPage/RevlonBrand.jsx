const RevlonBrand = () => {
    return (
        <div className="w-[80vw] mx-auto">
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/j4LkK3s/Revlon-slider-01.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/xGr943Y/Revlon-slider-02.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/5LLrLyg/Revlon-slider-03.jpg" className="w-full" />
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
                <strong>Revlon</strong> is a globally renowned brand in the beauty and cosmetics industry, known for its commitment to innovation, quality, and a broad range of products that empower individuals to express their unique beauty. Here's a feature description of Revlon:
                </p>
            </div>

        </div>
    );
};

export default RevlonBrand;