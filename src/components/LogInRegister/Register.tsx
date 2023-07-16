import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/api/authApiSlice";
import { isValidEmail } from "../../utils/emailCheck";
import notify from "../../utils/notify";
import InputFieldWithError from "../Common/InputFieldWithError";
import { RegisterData } from "../Common/Interface";
import { FacebookIcon, GoogleIcon } from "../SVG";

const Register = () => {
  const navigate = useNavigate();
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [registerData, setRegisterData] = useState<RegisterData>({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData: RegisterData = { ...registerData, [name]: value };
    if (name === "email") setShowEmailError(false);
    if (name === "password") setShowPasswordError(false);
    setRegisterData(newData);
  };
  const validateData = (data: RegisterData) => {
    const { email, password } = data;
    const emailCheck = isValidEmail(email);
    if (!emailCheck) {
      setShowEmailError(true);
      return false;
    }
    if (password.length < 6) {
      setShowPasswordError(true);
      return false;
    }

    return true;
  };
  const [register] = useRegisterMutation();

  const handleRegister = async () => {
    const isValidForm = validateData(registerData);
    if (isValidForm) {
      const result = await register(registerData);
      if ("data" in result && result.data?.success) {
        notify("success", "Register successfully");
        navigate(`/login`);
        // navigate(`/login?email=${result.data?.data?.email}`);
      } else {
        notify("error", "Register failed");
      }
    } else {
      notify("error", "Please fill the form correctly");
    }
  };

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
                  labelValue={"Email"}
                  htmlFor="email"
                  showError={showEmailError}
                  errorMessage="Email Field is required"
                  placeholder="Enter your email"
                  required={true}
                  type="email"
                  name="email"
                  handleInputChange={handleInputChange}
                />

                <InputFieldWithError
                  labelValue={"Password"}
                  htmlFor="password"
                  showError={showPasswordError}
                  errorMessage="Password Field is required"
                  placeholder="Enter your password"
                  required={true}
                  type="password"
                  name="password"
                  handleInputChange={handleInputChange}
                />
                <button
                  onClick={() => handleRegister()}
                  className="w-full bg-[#F47122] text-white text-lg font-medium py-3 rounded mt-5"
                >
                  Register
                </button>
              </div>
              <div className="w-5/12 ">
                <p className="text-lg font-medium ">Sign up with social</p>
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
                to={"/login"}
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
