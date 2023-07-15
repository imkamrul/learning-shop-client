import RelatedBooks from "../components/Common/RelatedBooks";
import Subscribe from "../components/Common/Subscribe";
import BookDesRev from "../components/SingleBooks/BookDesRev";
import BookDetails from "../components/SingleBooks/BookDetails";
const BookDetailsPage = () => {
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
