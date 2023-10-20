import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
              <div className="flex flex-col text-center lg:text-left md:flex-col lg:flex-row items-center justify-center gap-28 mt-52 mb-52">
                <div>
                    <img className="w-[45rem] p-5" src="../../../public/image/about.jpg" alt="" />
                </div>
                <div className="lg:w-[30rem] p-10 md:p-10 lg:p-0">
                    <h2 className="text-7xl font-bold uppercase">About<br /><span className="text-[#4E7661]">Beauty</span> Shop</h2>
                    <p className="mt-10">We believe that beauty is not just about makeup; it's about empowerment, self-care, and individuality. We have a passion for bringing out the best in everyone and providing a space where you can express yourself through the art of cosmetics and skincare.<br /><br />
                        Client satisfaction is our top priority. Our team is dedicated to making your beauty shopping experience exceptional, whether you're a makeup novice or an experienced beauty enthusiast.</p>
                    <div className="flex flex-col lg:flex-row  items-center justify-between mt-10">
                        <div>
                            <h4 className="font-bold">Email</h4>
                            <Link className="link link-hover">info@beautyshop.com</Link>
                        </div>
                        <div className="mt-5 lg:mt-0">
                            <h4 className="font-bold">Call Now</h4>
                            <Link className="link link-hover">61-251-9966</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;