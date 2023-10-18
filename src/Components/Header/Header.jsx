import { Link, NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {

    const navLink =
        <>
            <li className="mr-5 text-sm font-bold"><NavLink to="/">Home</NavLink></li>
            <li className="mr-5 text-sm font-bold"><NavLink to="/addProduct"> Add Product</NavLink></li>
            <li className="mr-5 text-sm font-bold"><NavLink to="/mycart">My Cart</NavLink></li>
            <li className="mr-5 text-sm font-bold"><NavLink to="/login">Login</NavLink></li>
        </>


    return (

        <div className="navbar bg-white sticky top-0 lg:px-40">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to="/"><img className="max-h-24 ml-10 md:ml-0" src="https://i.ibb.co/ftkTW4B/Beauty-Shop-Logo.png" alt="" /></Link>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end mr-5 md:mr-0">
                <div>
                    <button>
                        <BiUser className="h-8 w-8"></BiUser>
                    </button>
                </div>
                <div>
                    <button>
                        <AiOutlineShoppingCart className="h-8 w-8 ml-2"></AiOutlineShoppingCart>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Header;