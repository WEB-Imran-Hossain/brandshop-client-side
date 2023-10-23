import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "../BrandCardPage/BrandCard";
import { useEffect, useState } from "react";
import About from "../AboutPage/About";
import Store from "../StorePage/Store";

const Home = () => {
    const brandCardData = useLoaderData();
    const [allBrandCardData, setAllBrandCardData] = useState(null);
    useEffect(() => {
        fetch("brand.json")
            .then(res => res.json())
            .then(data => setAllBrandCardData(data))
    }, [])
    console.log(brandCardData);
    return (
        <div className="text-white dark:bg-black">
            <Banner></Banner>
            <About></About>
            {/* brand section */}
            <div className="text-center w-4/5 mx-auto text-black mt-52">
                <h2 className="text-7xl font-bold uppercase text-center my-4 text-black mt-20 dark:text-white">
                    Our <span className="text-[#4E7661]">Brand</span>
                </h2>
                <p className="text-lg font-normal mb-20 dark:text-white">
                    Welcome to our <strong>Beauty Shop</strong>, your one-stop destination
                    for all your cosmetic needs. At <strong>Beauty Shop</strong>, we
                    understand that beauty is not just skin deep; it's about confidence
                    and self-expression. Our carefully curated selection of cosmetics and
                    skincare products will help you look and feel your best, every day.
                </p>
            </div>
            <div className="grid gap-6 grid-cols-1 max-w-[90vw] md:w-4/5 mx-auto mb-44 md:grid-cols-2 lg:grid-cols-3">
                {allBrandCardData?.map((e) => (
                    <BrandCard key={e.id} e={e}></BrandCard>
                ))}
            </div>
            {/* discover section */}
            <div className="hero bg-base-200 mb-20">
                <div className="hero-content md:flex flex-col text-center lg:flex-row lg:justify-between lg:text-left">
                    <div>
                        <p className="text-lg text-black font-medium mt-5 lg:mt-0">New Collection</p>
                        <h1 className="text-5xl text-black font-bold uppercase mt-5">
                            Discover Our
                            <br /> Autumn <br />
                            <span className="text-[#4E7661]">Skincare </span>
                        </h1>
                        <p className="mt-5 text-black text-lg font-normal">
                            Made using clean, non-toxic ingredients, our products are designed
                            for everyone.
                        </p>
                        <button className="btn mt-5 bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold rounded-sm">
                            Explore More
                        </button>
                    </div>
                    <div >
                        <img className="-mb-4" src="https://i.ibb.co/YZF2qJP/other-section.png" alt="" />
                    </div>
                </div>
            </div>

            <Store></Store>
        </div>
    );
};

export default Home;
