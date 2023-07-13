import { useAppSelector } from "../redux/hooks";

const Home = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log("user :", user);
  return <div>this is a home page</div>;
};

export default Home;
