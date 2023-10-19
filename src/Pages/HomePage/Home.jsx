import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "../BrandCardPage/BrandCard";
import { useEffect, useState } from "react";

const Home = () => {
    const brandCardData = useLoaderData();
    const [allBrandCardData, setAllBrandCardData] = useState(null);
    useEffect(() => {
        fetch("brand.json")
            .then(res => res.json())
            .then(data =>setAllBrandCardData(data))
    }, [])
    console.log(brandCardData);
    return (
        <div>
            <Banner></Banner>
            {/* about section */}

            <div className="flex items-center justify-center gap-28 mt-52">
                <div>
                    <img className="" src="../../../public/image/Beauty Shop.jpg" alt="" />
                </div>
                <div className="w-[30rem]">
                    <h2 className="text-7xl font-bold uppercase">About<br /><span className="text-[#4E7661]">Beauty</span> Shop</h2>
                    <p>We believe that beauty is not just about makeup; it's about empowerment, self-care, and individuality. We have a passion for bringing out the best in everyone and providing a space where you can express yourself through the art of cosmetics and skincare.</p><br />
                    <p>Client satisfaction is our top priority. Our team is dedicated to making your beauty shopping experience exceptional, whether you're a makeup novice or an experienced beauty enthusiast.</p>
                    <div className="flex items-center">
                        <div>
                            <h4>Message</h4>
                            <div className="join">
                                <div>
                                    <div>
                                        <input className="input input-bordered join-item" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="indicator">
                                    <button className="btn join-item">Search</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4>Call Now</h4>
                            <p>1-814-251-9966</p>
                        </div>
                    </div>
                </div>
            </div>













            {/* brand section */}
            <div className="text-center w-4/5 mx-auto text-black mt-40">
                <h2 className="text-7xl font-bold uppercase text-center my-4 text-black mt-20">
                    Our <span className="text-[#4E7661]">Brand</span>
                </h2>
                <p className="text-lg font-normal mb-20">
                    Welcome to our <strong>Beauty Shop</strong>, your one-stop destination
                    for all your cosmetic needs. At <strong>Beauty Shop</strong>, we
                    understand that beauty is not just skin deep; it's about confidence
                    and self-expression. Our carefully curated selection of cosmetics and
                    skincare products will help you look and feel your best, every day.
                </p>
            </div>
            <div className="grid gap-6 grid-cols-1 w-4/5 mx-auto mb-44 md:grid-cols-2 lg:grid-cols-3">
                {allBrandCardData?.map((e) => (
                    <BrandCard key={e.id} e={e}></BrandCard>
                ))}
            </div>
            {/* discover section */}
            <div className="hero bg-base-200 py-20">
                <div className="hero-content md:flex flex-col text-center lg:flex-row lg:justify-between lg:text-left">
                    <div>
                        <p className="text-lg font-medium">New Collection</p>
                        <h1 className="text-5xl font-bold uppercase mt-5">
                            Discover Our
                            <br /> Autumn <br />
                            <span className="text-[#4E7661]">Skincare </span>
                        </h1>
                        <p className="mt-5 text-lg font-normal">
                            Made using clean, non-toxic ingredients, our products are designed
                            for everyone.
                        </p>
                        <button className="btn mt-5 bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold rounded-sm">
                            Explore More
                        </button>
                    </div>
                    <div>
                        <img src="../../../public/image/other-section.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
