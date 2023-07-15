import RelatedBooks from "../components/Common/RelatedBooks";
import Subscribe from "../components/Common/Subscribe";
import BookDesRev from "../components/SingleBooks/BookDesRev";
import BookDetails from "../components/SingleBooks/BookDetails";

const SingleBook = () => {
  return (
    <>
      <BookDetails />
      <BookDesRev />
      <RelatedBooks />
      <Subscribe />
    </>
  );
};

export default SingleBook;
