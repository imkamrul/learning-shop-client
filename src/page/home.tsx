import Subscribe from "../components/Common/Subscribe";
import HomeHero from "../components/Home/HomeHero";
import Products from "../components/Home/Products";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log("user :", user);
  return (
    <>
      <HomeHero />
      <Products />
      <Subscribe />
    </>
  );
};

export default Home;
