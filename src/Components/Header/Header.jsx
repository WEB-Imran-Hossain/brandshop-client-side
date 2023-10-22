import { Link, NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { MdNightlight, MdLightMode } from "react-icons/md";

const Header = () => {
  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => console.log("logout successfully"))
      .catch((error) => console.error(error));
  };

  const navLink = (
    <>
      <li className="xl:mr-5 text-sm font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="xl:mr-5 text-sm font-bold">
        <NavLink to="/addproduct"> Add Product</NavLink>
      </li>
      <li className="xl:mr-5 text-sm font-bold">
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
      <li className="xl:mr-5 text-sm font-bold">
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      {/* dark mode */}
      <span className="mt-4"><button className="text-sm font-bold xl:ml-5" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <MdLightMode className="text-2xl"></MdLightMode> : <MdNightlight className="text-2xl"></MdNightlight>}</button></span>
    </>
  );

  return (
    <div className="navbar bg-white sticky top-0 lg:px-40 z-50 shadow-2xl dark:bg-slate-950 dark:text-white">
      <div className="navbar">
        <div className="dropdown dark:text-white">
          <label tabIndex={0} className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 w-52 bg-white dark:text-white dark:bg-black rounded-lg"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/">
          <img
            className="max-h-24 ml-10 md:ml-0"
            src="https://i.ibb.co/ftkTW4B/Beauty-Shop-Logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar hidden xl:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end mr-5 md:mr-0">
        <div>
          {user ? (
            <>
              <div>
                <div className="flex mr-3 items-center">
                  <div>
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 mr-5 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                      <p className="md:w-[10rem] hidden lg:block text-sm font-bold">{user.displayName}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button onClick={handleLogOut} >
                      <BiLogOut className="h-8 w-8"></BiLogOut>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="md:ml-44 mt-2 pr-2 lg:pr-5">
              <Link to="/login">
                <button>
                  <BiUser className="h-8 w-8"></BiUser>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
