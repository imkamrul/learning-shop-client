import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <body>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};

export default MainLayout;
