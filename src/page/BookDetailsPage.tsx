import { useParams } from "react-router-dom";
import RelatedBooks from "../components/Common/RelatedBooks";
import Subscribe from "../components/Common/Subscribe";
import BookDesRev from "../components/SingleBooks/BookDesRev";
import BookDetails from "../components/SingleBooks/BookDetails";
import { useSingleBookQuery } from "../redux/api/booksApiSlice";
const BookDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleBookQuery(id);
  console.log("data :", isLoading, data);
  return (
    <>
      <BookDetails />
      <BookDesRev />
      <RelatedBooks />
      <Subscribe />
    </>
  );
};

export default BookDetailsPage;
