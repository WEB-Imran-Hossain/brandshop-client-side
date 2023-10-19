import { Link } from "react-router-dom";
import SocialLogin from "../LoginPage/SocialLogin";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { auth } from "../../Firebase/FirebaseConfig";

const Registration = () => {
  const [registerError, setRegisterError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    // reset error
    setRegisterError("");

    // reset sucess
    setSuccessMessage("");

    // password validation
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{7,}$/.test(password)
    ) {
      setRegisterError(
        "Your password should have at least one uppercase character and special character "
      );
      return;
    }

    e.target.reset();

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("User Created Successfully!!");
        toast("User Created Successfully!!");
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => console.log("profile updated"))
          .catch();

        // send varification email
        sendEmailVerification(result.user)
          .then(() => {
            toast("Please check your email and verfy your account!!");
          })
          .catch();
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col mt-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100 mt-5">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Photo</span>
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="Photo url"
                    name="image"
                    className="input input-bordered"
                  />
                </div>
                <div className="relative">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Password</span>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Password"
                      name="password"
                      className="input input-bordered"
                    />
                    <span
                      className="absolute top-14 right-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <MdRemoveRedEye></MdRemoveRedEye>
                      ) : (
                        <AiFillEyeInvisible></AiFillEyeInvisible>
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6 p-0">
                  <button className="btn btn-outline text-white bg-[#4E7661] hover:bg-[#000] hover:border-transparent">
                    Sign Up
                  </button>
                </div>

                <br />
                <div>
                  <input type="checkbox" required name="terms" id="terms" />
                  <label className="ml-2 label-text font-bold" htmlFor="terms">
                    Yes, I agree with <a href=""><Link className="link link-hover" href="#">Terms of Use</Link></a>
                  </label>
                </div>
                <br />
              </form>

              {registerError && <p className="text-red-600">{registerError}</p>}
              {successMessage && (
                <p className="text-green-600">{successMessage}</p>
              )}
             <div>
               {/* page toggle */}
               <label className="label-text font-bold">
                Have an account?{" "}
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-sm ml-32"
                >
                  Please Login
                </Link>
              </label>
             </div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
