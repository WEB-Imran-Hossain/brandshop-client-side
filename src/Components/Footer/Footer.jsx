import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div>
                    <Link to="/"><img className="max-h-24" src="https://i.ibb.co/ftkTW4B/Beauty-Shop-Logo.png" alt="" /></Link>
                </div>
                <nav className="grid grid-flow-col gap-4 list-none">
                    <li className="mr-5 text-sm font-bold"><NavLink to="/">Home</NavLink></li>
                    <li className="mr-5 text-sm font-bold"><NavLink to="/addProduct"> Add Product</NavLink></li>
                    <li className="mr-5 text-sm font-bold"><NavLink to="/mycart">My Cart</NavLink></li>
                    <li className="mr-5 text-sm font-bold"><NavLink to="/login">Login</NavLink></li>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-black text-2xl">
                        <Link to="https://www.facebook.com/"> <span className="hover:text-[#4e7661]"><FaFacebookF></FaFacebookF></span></Link>
                        <Link to="https://youtube.com/"><span className="hover:text-[#4e7661]"><FaYoutube></FaYoutube></span></Link>
                        <Link to="https://twitter.com/"><span className="hover:text-[#4e7661]"><FaTwitter></FaTwitter></span></Link>
                    </div>
                </nav>
                <aside className="text-sm text-black font-bold">
                    <p>Copyright © 2023 - All right reserved by <Link className="text-[#4e7661] " to="/">Beauty Shop</Link> Ltd.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;