import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "../BrandCardPage/BrandCard";



const Home = () => {
    const brandCardData=useLoaderData();
    console.log(brandCardData);
    return (
        <div>
            <Banner></Banner>

            <div className="text-center w-4/5 mx-auto text-black">
                <h2 className="text-7xl font-bold uppercase text-center my-4 text-black mt-20">Our <span className="text-[#4E7661]">Brand</span></h2>
                <p className="text-lg font-normal mb-20">Welcome to our <strong>Beauty Shop</strong>, your one-stop destination for all your cosmetic needs. At <strong>Beauty Shop</strong>, we understand that beauty is not just skin deep; it's about confidence and self-expression. Our carefully curated selection of cosmetics and skincare products will help you look and feel your best, every day.</p>
            </div>
            <div className="grid gap-6 grid-cols-1 w-4/5 mx-auto mb-44 md:grid-cols-2 lg:grid-cols-3">
                {
                    brandCardData?.map((e) => <BrandCard key={e.id} e={e}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Home;