import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RelatedBooks from "../components/Common/RelatedBooks";
import Subscribe from "../components/Common/Subscribe";
import { LoadingIconGray } from "../components/SVG";
import BookDesRev from "../components/SingleBooks/BookDesRev";
import BookDetails from "../components/SingleBooks/BookDetails";
import { useSingleBookQuery } from "../redux/api/booksApiSlice";
import { useAppDispatch } from "../redux/hooks";
import { setSingleBook } from "../redux/slice/bookSlice";
const BookDetailsPage = () => {
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
    <>
      {isLoading ? (
        <LoadingIconGray className="w-[100px]" />
      ) : (
        <>
          <BookDetails />
          <BookDesRev />
        </>
      )}

      <RelatedBooks />
      <Subscribe />
    </>
  );
};

export default BookDetailsPage;
