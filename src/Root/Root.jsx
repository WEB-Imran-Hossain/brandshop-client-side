import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Root = () => {
    const { darkMode, setDarkMode } = useContext(AuthContext)
    console.log(setDarkMode);
    return (
        <div className={`${darkMode ?"dark" : ""}`}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;