import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useDeleteBookMutation } from "../../redux/api/booksApiSlice";
import { useAppSelector } from "../../redux/hooks";
import notify from "../../utils/notify";
import Modal from "../Common/Modal";
const BookDetails = () => {
  const { singleBook } = useAppSelector((state) => state.books);
  const { token } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [deleteBook] = useDeleteBookMutation();
  const handleConfirmSubmit = async () => {
    const result = await deleteBook({ id: singleBook?._id, token });
    if ("data" in result && result.data?.success) {
      notify("success", "Book deleted successfully");
      setShowModal(false);
      navigate(`/`);
    } else {
      notify("error", "Failed to delete book");
      setShowModal(false);
    }
  };
  return (
    <>
      <section className="bg-[#FFF1EE]">
        <div className="container flex flex-wrap py-20">
          <div className="w-5/12">
            <img
              src="../../../public/book.png"
              alt=""
              className="w-[370px] object-cover"
            />
          </div>
          <div className="w-7/12">
            <p className="text-[32px] pb-4">{singleBook?.title}</p>
            <p className="text-base">
              Author:{" "}
              <span className="font-bold text-[17px]">
                {singleBook?.author}
              </span>
            </p>
            <p className="text-base">
              Genre:{" "}
              <span className="font-bold text-[17px]">{singleBook?.genre}</span>
            </p>
            <p className="text-base">
              Publish:{" "}
              <span className="font-bold text-[17px]">
                {singleBook?.publishDate}
              </span>
            </p>
            <p className="text-base">
              Sold:{" "}
              <span className="font-bold text-[17px]">
                {singleBook?.totalDownload}
              </span>
            </p>

            <p className="py-2">
              <span className="text-[#F58634] text-2xl font-extrabold pr-3">
                ${singleBook?.price}
              </span>
              {/* <span className="text-[#000] text-sm opacity-50 line-through">
                ${singleBook?.price! + Math.floor(Math.random() * 20) + 1}
              </span> */}
            </p>
            <div className="flex  items-center">
              <StarRatings
                rating={singleBook?.rating || 0}
                starRatedColor="#F58634"
                numberOfStars={5}
                starDimension="25px"
                starSpacing="2px"
              />
              <p>
                {" "}
                ({singleBook?.reviews?.length ?? 0}
                reviews){" "}
                <a
                  href="#review"
                  className="hover:underline text-[#ff7919] text-lg font-bold"
                >
                  Write a review
                </a>
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              voluptas aut neque repudiandae. Ducimus, voluptates illo! Aliquid
              aliquam voluptatibus vel.
            </p>
            <div className="flex">
              <p>Qty 1 </p>
              <button>+ Add tho Cart</button>
            </div>
            <p>Add to Whish List</p>

            <div className="mt-3">
              <Link
                to={`/books/edit/${singleBook?._id}`}
                className="bg-[#F18434] text-white px-8 py-[10px]  rounded text-lg mr-5"
              >
                Edit this book
              </Link>
              <button
                onClick={() => setShowModal(true)}
                className="bg-indigo-600 text-white px-8 py-2  rounded text-lg ml-5"
              >
                Delete
              </button>
              <Modal
                showModal={showModal}
                closeModal={() => setShowModal(false)}
                modalText={"Are you sure you want to delete this?"}
                handleYes={() => handleConfirmSubmit()}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
