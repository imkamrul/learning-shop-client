import data from "../../data/books.json";
import SingleProduct from "../Home/SingleProduct";
const RelatedBooks = () => {
  return (
    <>
      <section>
        <div className="container pt-20 pb-[100px]">
          <p className="text-[#3F3F3F] text-[26px] pb-8 font-bold">
            You May Also Like
          </p>
          <div className="flex flex-wrap">
            {data.slice(0, 3).map((item, index) => {
              return <SingleProduct key={index} content={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedBooks;
