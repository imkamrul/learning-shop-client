import { useEffect, useState } from "react";
import { useUpdateBookMutation } from "../../redux/api/booksApiSlice";
import { useAppSelector } from "../../redux/hooks";
import notify from "../../utils/notify";
import { IBook } from "../Common/Interface";
import { LoadingIconGray } from "../SVG";
const BookEdit = () => {
  const { singleBook } = useAppSelector((state) => state.books);
  const { token, user } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [showTitleError, setShowTitleError] = useState(false);
  const [showBookImgError, setShowBookImgError] = useState(false);
  const [showAuthorError, setShowAuthorError] = useState(false);
  const [showPublishDateError, setShowPublishDateError] = useState(false);
  const [showGenreError, setShowGenreError] = useState(false);
  const [showRatingError, setShowRatingError] = useState(false);
  const [showPriceError, setShowPriceError] = useState(false);

  const [bookData, setBookData] = useState<IBook>({
    title: singleBook?.title || "",
    book_img: singleBook?.book_img || "",
    rating: singleBook?.rating || 0,
    author: singleBook?.author || "",
    genre: singleBook?.genre || "",
    publishDate: singleBook?.publishDate || "",
    totalDownload: singleBook?.totalDownload || 0,
    price: singleBook?.price || 0,
    seller: singleBook?.seller || "",
  });
  useEffect(() => {
    setBookData({
      title: singleBook?.title || "",
      book_img: singleBook?.book_img || "",
      rating: singleBook?.rating || 0,
      author: singleBook?.author || "",
      genre: singleBook?.genre || "",
      publishDate: singleBook?.publishDate || "",
      totalDownload: singleBook?.totalDownload || 0,
      price: singleBook?.price || 0,
      seller: singleBook?.seller || "",
    });
  }, [singleBook]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value }: { name: string; value: string | number } = e.target;
    if (name === "rating" || name === "price") {
      value = parseInt(value, 10);
    }
    const newData: IBook = { ...bookData, [name]: value };
    if (name === "title") setShowTitleError(false);
    if (name === "book_img") setShowBookImgError(false);
    if (name === "author") setShowAuthorError(false);
    if (name === "publishDate") setShowPublishDateError(false);
    if (name === "genre") setShowGenreError(false);
    if (name === "rating") setShowRatingError(false);
    if (name === "price") setShowPriceError(false);

    setBookData(newData);
  };
  const validateData = (data: IBook) => {
    const { title, book_img, author, publishDate, genre, rating, price } = data;
    if (title.length < 1) {
      setShowTitleError(true);
      return false;
    }
    if (book_img.length < 1) {
      setShowBookImgError(true);
      return false;
    }
    if (author.length < 1) {
      setShowAuthorError(true);
      return false;
    }
    if (publishDate.length < 1) {
      setShowPublishDateError(true);
      return false;
    }
    if (genre.length < 1) {
      setShowGenreError(true);
      return false;
    }
    if (rating < 0) {
      setShowRatingError(true);
      return false;
    }
    if (price < 1) {
      setShowPriceError(true);
      return false;
    }

    return true;
  };

  const [updateBook] = useUpdateBookMutation();
  const handleBookSubmit = async () => {
    setLoading(true);
    const isValidForm = validateData(bookData);
    bookData.seller = user?.id;

    if (isValidForm) {
      const result = await updateBook({
        data: bookData,
        token,
        id: singleBook?._id,
      });

      if ("data" in result && result.data?.success) {
        notify("success", "Book data updated successfully");
      } else {
        notify("error", "Failed to update book");
      }
      setLoading(false);
    } else {
      notify("error", "Please fill the form correctly");
      setLoading(false);
    }
  };
  return (
    <>
      <section className="py-10 relative z-[999]">
        <div className="container">
          <div className="bg-[#FFF6F4] w-10/12 mx-auto p-5 rounded shadow">
            <p className="text-center text-[22px] font-medium">
              Add a new book
            </p>
            <div className="w-full mx-auto mt-5 flex flex-wrap">
              <div className="w-full pb-3"></div>
              <div className="w-1/2 pr-3">
                <label
                  htmlFor="title"
                  className="text-base font-medium pt-0 pb-3 block"
                >
                  Title
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book title"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="title"
                  name="title"
                  defaultValue={singleBook?.title}
                  onChange={(e) => handleInputChange(e)}
                />
                <p
                  className={` text-xs text-[red] pt-[3px] pb-3 ${
                    showTitleError ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Book title is required
                </p>
                <label
                  htmlFor="book_img"
                  className="text-base font-medium pt-3 pb-3 block"
                >
                  Book Image
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book image url"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="book_img"
                  defaultValue={singleBook?.book_img}
                  name="book_img"
                  onChange={(e) => handleInputChange(e)}
                />
                <p
                  className={` text-xs text-[red] pt-[3px] pb-3 ${
                    showBookImgError ? "opacity-100 " : "opacity-0"
                  }`}
                >
                  Book img is required
                </p>
                <label
                  htmlFor="author"
                  className="text-base font-medium pb-3 block pt-3"
                >
                  Book Author
                  <span className={`text-[red]  inline `}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book author"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="author"
                  defaultValue={singleBook?.author}
                  name="author"
                  onChange={(e) => handleInputChange(e)}
                />
                <p
                  className={` text-xs text-[red] pt-[3px] pb-3 ${
                    showAuthorError ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Book author is required
                </p>
                <label
                  htmlFor="publishDate"
                  className="text-base font-medium pb-3 block pt-3"
                >
                  Book publish Date
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book publish date"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="publishDate"
                  defaultValue={singleBook?.publishDate}
                  name="publishDate"
                  onChange={(e) => handleInputChange(e)}
                />
                <p
                  className={` text-xs text-[red] pt-[3px] pb-3 ${
                    showPublishDateError ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Book publish date is required
                </p>
              </div>
              <div className="w-1/2 pl-3">
                <label
                  htmlFor="genre"
                  className="text-base font-medium pb-3 block"
                >
                  Genre
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book genre"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="genre"
                  defaultValue={singleBook?.genre}
                  onChange={(e) => handleInputChange(e)}
                  name="genre"
                />
                <p
                  className={` text-xs text-[red] pt-[3px] pb-3 ${
                    showGenreError ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Book Genre is required
                </p>
                <label
                  htmlFor="rating"
                  className="text-base font-medium pb-3 block pt-3"
                >
                  Book Rating
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter book rating"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="rating"
                  name="rating"
                  defaultValue={singleBook?.rating}
                  onChange={(e) => handleInputChange(e)}
                />
                <p
                  className={` text-xs text-[red] pt-[3px] pb-3 ${
                    showRatingError ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Book rating is required
                </p>
                <label
                  htmlFor="price"
                  className="text-base font-medium pb-3 block pt-3"
                >
                  Book Price
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter book author"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="price"
                  defaultValue={singleBook?.price}
                  name="price"
                  onChange={(e) => handleInputChange(e)}
                />
                <p
                  className={` text-xs text-[red] pt-[3px] pb-3 ${
                    showPriceError ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Book price is required
                </p>
                <div className="w-full text-center pt-7">
                  {loading ? (
                    <LoadingIconGray className="w-[50px]" />
                  ) : (
                    <button
                      onClick={() => handleBookSubmit()}
                      className="bg-[#F47122] text-white w-8/12 py-2 rounded font-bold mt-5"
                    >
                      Save Book
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookEdit;
