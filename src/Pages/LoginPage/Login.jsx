import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/FirebaseConfig";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const userLocation = useLocation();
  const userNavigate = useNavigate();
  const emailRef = useRef(null);

  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset error
    setRegisterError("");

    // reset sucess
    setSuccessMessage("");

    e.target.reset();

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          setSuccessMessage("User login Successfully!!");
          toast("User Login Successfully!!", { position: "top-center" });
          userNavigate(userLocation.state ? userLocation.state : "/");
        } else {
          toast("Please verify your email address", { position: "top-center" });
        }
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please provide an email", emailRef.current.value);
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("Please write a valid email");
      return;
    }
    // send validation email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Please check your email", { position: "top-center" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col mt-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold">My Account</h1>
          </div>
          <div className="card flex-shrink-0 max-w-[400px] shadow-2xl bg-base-100 mt-5">
            <div className="card-body">
              <form onSubmit={handlelogin}>
                <div className="form-control">
                  <p className="text-2xl text-center font-bold">Log In</p>
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    ref={emailRef}
                    name="email"
                    required
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a
                      onClick={handleForgetPassword}
                      href="#"
                      className="label-text font-bold link link-hover"
                    >
                      Forgot your password?
                    </a>
                  </label>
                </div>
                <div className="form-control p-0">
                  <button className="btn btn-outline text-white bg-[#4E7661] hover:bg-[#000] hover:border-transparent">
                    Submit
                  </button>
                </div>
              </form>
              {registerError && <p className="text-red-600">{registerError}</p>}
              {successMessage && (
                <p className="text-green-600">{successMessage}</p>
              )}
              {/* page toggle */}
              <div className="flex justify-between">
                <div className="flex">
                  <input type="checkbox" required name="terms" id="terms" />
                  <label className="ml-2" htmlFor="terms">
                    <a className="label-text font-bold" href="">
                      Keep me signed in
                    </a>
                  </label>
                </div>
                <div>
                  <Link
                    to="/registration"
                    className="label-text-alt text-sm link link-hover label-text font-bold"
                  >
                    {" "}
                    Register
                  </Link>
                </div>
              </div>
              <SocialLogin />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
