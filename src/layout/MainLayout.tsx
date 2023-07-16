import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTokenStore } from "../hooks/useTokenStore";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser, setUserToken } from "../redux/slice/userSlice";
import { baseUrl } from "../utils/baseUrl";
import Footer from "./Footer";
import Header from "./Header";
const MainLayout = () => {
  const { getToken } = useTokenStore();
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.user);
  const handleUser = async (token: string) => {
    try {
      const response = await fetch(`${baseUrl}/users/my-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data?.success === true) {
        const { email, role, username } = data.data;
        dispatch(setUser({ email, role, username }));
      }
    } catch (error) {}
  };
  const handleToken = () => {
    const token = getToken();
    dispatch(setUserToken(token));
  };
  useEffect(() => {
    if (token && !user.email) {
      handleUser(token);
    }
  }, [token]);
  useEffect(() => {
    if (!token) {
      handleToken();
    }
  }, [token]);
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer theme="colored" />
    </>
  );
};

export default MainLayout;
