import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Header from "./Header";
const MainLayout = () => {
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
