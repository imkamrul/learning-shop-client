import { Link } from "react-router-dom";
import data from "../../data/books.json";
import SingleProduct from "./SingleProduct";
const Products = () => {
  return (
    <>
      <section>
        <div className="container py-[100px]">
          <div className="flex justify-between items-center">
            <p className="text-[#1B1D21] text-[40px] font-extrabold">
              Trending Course
            </p>
            <Link
              to="/"
              className="border-[1px] rounded border-[#F58634] text-[#F18434] text-lg font-semibold px-11 py-1"
            >
              View All
            </Link>
          </div>
          <div className="flex flex-wrap">
            {data.slice(0, 6).map((item, index) => {
              return <SingleProduct key={index} content={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
