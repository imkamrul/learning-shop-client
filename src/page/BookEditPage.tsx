import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookEdit from "../components/BookEdit/BookEdit";
import { LoadingIconGray } from "../components/SVG";
import { useSingleBookQuery } from "../redux/api/booksApiSlice";
import { useAppDispatch } from "../redux/hooks";
import { setSingleBook } from "../redux/slice/bookSlice";
const BookEditPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleBookQuery(id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setSingleBook(data?.data));
    } else if (!isLoading) {
      navigate("/");
    }
  }, [data]);
  return (
    <>{isLoading ? <LoadingIconGray className="w-[100px]" /> : <BookEdit />}</>
  );
};

export default BookEditPage;
