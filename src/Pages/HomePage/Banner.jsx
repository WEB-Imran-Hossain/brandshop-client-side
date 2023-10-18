

const Banner = () => {
    return (
        <div className="swiper-container">
            <div className="hero min-h-screen"
                style={{ backgroundImage: "url(https://i.ibb.co/zW3j1JF/Bannar-02.jpg" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="w-full lg:px-40">
                    <div className="text-white mt-20 ">
                        <p className="text-lg font-medium text-center">New Collection</p>
                        <h1 className="text-7xl font-bold uppercase text-center my-4">Be the <br /><span className="text-black">Beauty</span> you Are!</h1>
                        <p className="text-lg font-medium text-center">We believe that beauty knows no boundaries and that every shade,texture, and finish should be celebrated. </p>
                        <div className="text-center mx-auto my-5">
                            <button className="btn bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;