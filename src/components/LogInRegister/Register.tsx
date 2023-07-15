import { Link } from "react-router-dom";
import InputFieldWithError from "../Common/InputFieldWithError";
import { FacebookIcon, GoogleIcon } from "../SVG";

const Register = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container">
          <div className="w-8/12 bg-[#FFF8F8] rounded mx-auto shadow p-[50px]">
            <h4 className="text-center text-2xl font-medium">
              Welcome to Walcart! Please Sign Un
            </h4>
            <div className="py-12 flex flex-wrap justify-between">
              <div className="w-6/12 pr-3">
                <InputFieldWithError
                  labelValue={"Full Name"}
                  htmlFor="name"
                  showError={true}
                  errorMessage="Name is required"
                  placeholder="Enter your name"
                  required={true}
                  type="text"
                />
                <InputFieldWithError
                  labelValue={"Email"}
                  htmlFor="email"
                  showError={true}
                  errorMessage="Email Field is required"
                  placeholder="Enter your email"
                  required={true}
                  type="email"
                />

                <InputFieldWithError
                  labelValue={"Password"}
                  htmlFor="password"
                  showError={true}
                  errorMessage="Password Field is required"
                  placeholder="Enter your password"
                  required={true}
                  type="password"
                />
              </div>
              <div className="w-5/12 pt-4">
                <button className="w-full bg-[#F47122] text-white text-lg font-medium py-3 rounded mt-5">
                  Register
                </button>
                <p className="text-lg font-medium pt-6">Sign up with social</p>
                <button className="flex items-center bg-[#DB3325] rounded w-full justify-evenly my-3 py-3 text-white gap-x-3 text-lg">
                  <GoogleIcon /> <span>Sign up with Gmail</span>
                </button>
                <button className="flex items-center bg-[#214497] rounded w-full justify-evenly my-3 py-3 text-white gap-x-3 text-lg">
                  <FacebookIcon /> <span>Sign up with Facebook</span>
                </button>
              </div>
            </div>
            <p className="text-center text-lg ">
              Have an Walcart account?{" "}
              <Link
                to={"/register"}
                className="text-[#214497] font-bold hover:underline"
              >
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
