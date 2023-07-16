import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setAuthor,
  setFilterBook,
  setGenre,
} from "../../redux/slice/bookSlice";
import { bookAuthors, bookGenres } from "../../utils/emailCheck";
import { IBook } from "../Common/Interface";
import SingleProduct from "../Home/SingleProduct";
import { LoadingIconGray } from "../SVG";
const AllBook = () => {
  const { genre, author, filteredBook, bookName, allBooks } = useAppSelector(
    (state) => state.books
  );
  const handleFilter = () => {
    let filteredBooks: IBook[] | null = null;
    if (bookName === "All" && genre === "All" && author === "All") {
      dispatch(setFilterBook(allBooks));
    } else {
      filteredBooks = allBooks;
      console.log("filteredBooks :", filteredBooks);

      if (bookName !== "All" && filteredBooks?.length) {
        filteredBooks = filteredBooks?.filter((book) =>
          book?.title.toLowerCase().includes(bookName.toLowerCase())
        );
      }
      console.log("filteredBooks :", filteredBooks);
      if (genre !== "All" && filteredBooks?.length) {
        filteredBooks = filteredBooks?.filter(
          (book) => book?.genre?.toLowerCase() === genre?.toLowerCase()
        );
      }

      if (author !== "All" && filteredBooks?.length) {
        filteredBooks = filteredBooks?.filter(
          (book) => book?.author?.toLowerCase() === author?.toLowerCase()
        );
      }

      dispatch(setFilterBook(filteredBooks));
    }
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    handleFilter();
  }, [bookName, genre, author]);
  return (
    <>
      <div className=" w-11/12 mx-auto py-[100px] flex justify-between ">
        <div className="w-2/12 pr-2">
          <p className="text-xl rounded font-semibold bg-[#5EB9B3] p-2 my-2 text-white">
            Genre
          </p>
          <ul>
            <li>
              <p
                onClick={() => dispatch(setGenre("All"))}
                className={`p-2 my-1.5  cursor-pointer rounded  ${
                  genre === "All" ? "bg-[#F18434] text-white" : "text-black"
                }`}
              >
                All
              </p>
            </li>
            {bookGenres.map((item, index) => {
              return (
                <li key={index}>
                  <p
                    onClick={() => dispatch(setGenre(item))}
                    className={`p-2 my-1.5  cursor-pointer rounded  ${
                      genre === item ? "bg-[#F18434] text-white" : "text-black"
                    }`}
                  >
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
          <p className="text-xl rounded font-semibold bg-[#5EB9B3] p-2 my-2 text-white">
            Author
          </p>
          <ul>
            <li>
              <p
                onClick={() => dispatch(setAuthor("All"))}
                className={`p-2 my-1.5  cursor-pointer rounded  ${
                  author === "All" ? "bg-[#F18434] text-white" : "text-black"
                }`}
              >
                All
              </p>
            </li>
            {bookAuthors.map((item, index) => {
              return (
                <li key={index}>
                  <p
                    onClick={() => dispatch(setAuthor(item))}
                    className={`p-2 my-1.5  cursor-pointer rounded  ${
                      author === item ? "bg-[#F18434] text-white" : "text-black"
                    }`}
                  >
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-10/12 pl-6">
          <div className="flex justify-between items-center">
            <p className="text-[#1B1D21] text-[40px] font-extrabold">
              All Course
            </p>
          </div>
          <div className="flex flex-wrap">
            {!filteredBook?.length && <LoadingIconGray className="w-[100px]" />}
            {filteredBook?.map((item: IBook, index: number) => {
              return <SingleProduct key={index} content={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBook;
