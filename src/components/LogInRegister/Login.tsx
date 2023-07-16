import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTokenStore } from "../../hooks/useTokenStore";
import { useLoginMutation } from "../../redux/api/authApiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { setUserToken } from "../../redux/slice/userSlice";
import { isValidEmail } from "../../utils/emailCheck";
import notify from "../../utils/notify";
import InputFieldWithError from "../Common/InputFieldWithError";
import { RegisterData } from "../Common/Interface";
import { FacebookIcon, GoogleIcon } from "../SVG";
const Login = () => {
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const handleRegister = async () => {
    const isValidForm = validateData(registerData);
    if (isValidForm) {
      const result = await login(registerData);
      if ("data" in result && result.data?.success) {
        notify("success", "Login successfully");
        const { setToken } = useTokenStore();
        setToken(result.data?.data?.accessToken);
        dispatch(setUserToken(result.data?.data?.accessToken));
        navigate(`/`);
      } else {
        notify("error", "Login failed failed");
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
              Welcome to Walcart! Please Sign In
            </h4>
            <div className="py-12 flex flex-wrap justify-between">
              <div className="w-6/12 pr-3">
                <InputFieldWithError
                  labelValue={"Phone Number or Email"}
                  htmlFor="emailPhone"
                  showError={showEmailError}
                  errorMessage="Email Field is required"
                  placeholder="Enter your mobile number"
                  required={true}
                  type="text"
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

                <Link
                  to={"/password-reset"}
                  className="text-[#214497] mt-2 block font-bold hover:underline"
                >
                  Forget Password?
                </Link>
              </div>
              <div className="w-5/12 pt-4">
                <button
                  onClick={() => handleRegister()}
                  className="w-full bg-[#F47122] text-white text-lg font-medium py-3 rounded mt-5"
                >
                  Login
                </button>
                <p className="text-lg font-medium pt-6">Login with social</p>
                <button
                  className="flex items-center bg-[#DB3325] rounded w-full justify-evenly my-3 py-3 text-white gap-x-3 text-lg"
                  onClick={() => notify("info", "This features coming soon.")}
                >
                  <GoogleIcon /> <span>Login with Gmail</span>
                </button>
                <button
                  className="flex items-center bg-[#214497] rounded w-full justify-evenly my-3 py-3 text-white gap-x-3 text-lg"
                  onClick={() => notify("info", "This features coming soon.")}
                >
                  <FacebookIcon /> <span>Login with Facebook</span>
                </button>
              </div>
            </div>
            <p className="text-center text-lg ">
              Don't Have an Walcart account?{" "}
              <Link
                to={"/register"}
                className="text-[#214497] font-bold hover:underline"
              >
                Please Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
