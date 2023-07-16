import { useGetBooksQuery } from "../../redux/api/booksApiSlice";
import SingleProduct from "../Home/SingleProduct";
import { IBook } from "./Interface";
const RelatedBooks = () => {
  const { data } = useGetBooksQuery(undefined);
  return (
    <>
      <section>
        <div className="container pt-20 pb-[100px]">
          <p className="text-[#3F3F3F] text-[26px] pb-8 font-bold">
            You May Also Like
          </p>
          <div className="flex flex-wrap">
            {data?.data?.slice(0, 3).map((item: IBook, index: number) => {
              return <SingleProduct key={index} content={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedBooks;
