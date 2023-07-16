import { useEffect } from "react";
import AllBook from "../components/Books/AllBook";
import Searching from "../components/Books/Searching";
import Subscribe from "../components/Common/Subscribe";
import { useGetBooksQuery } from "../redux/api/booksApiSlice";
import { useAppDispatch } from "../redux/hooks";
import { setAlleBook } from "../redux/slice/bookSlice";
const BookPage = () => {
  const { data } = useGetBooksQuery(undefined);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data?.data.length) {
      dispatch(setAlleBook(data?.data));
    }
  }, [data]);

  return (
    <>
      <Searching />
      <AllBook />
      <Subscribe />
    </>
  );
};

export default BookPage;
