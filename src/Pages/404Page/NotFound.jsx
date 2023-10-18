import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="text-center font-bold text-black flex flex-col justify-center items-center h-screen p-5">
            <h2 className="py-14 m-0 text-4xl">Page Not Found</h2>
            <p className="text-[160px]">404</p>
            <p className="mb-5 text-3xl">Oops! That page can’t be found.</p>
            <p className="text-sm text-black font-bold">Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.</p>
            <Link to="/">
                <button className="btn bg-[#000] w-40 h-6 text-white mt-5 text-sm font-semibold border-transparent hover:bg-[#4e7661] hover:border-transparent hover:bg-black hover:font-semibold">
                    Go to home page
                </button>
            </Link>
        </div>
    );
};

export default NotFound;