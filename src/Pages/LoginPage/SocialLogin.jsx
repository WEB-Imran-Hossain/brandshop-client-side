import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  console.log(googleLogin);
  const userLocation = useLocation();
  const userNavigate = useNavigate();
  // button handle
  const handleSocialLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        toast("User Created/Login Successfully!!", { position: "top-center" });
        userNavigate(userLocation.state ? userLocation.state : "/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex gap-4 justify-center mt-5">
        <div className="">
         <div className="">
         <button
            onClick={handleSocialLogin}
            className="border border-[#4E7661] rounded-lg label-text font-bold p-3 flex items-center"
          >
            <FcGoogle className="mr-2"></FcGoogle>Continue with Google
          </button>
         </div>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
