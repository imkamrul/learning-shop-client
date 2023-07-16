import { useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useAddListMutation } from "../../redux/api/booksApiSlice";
import { useAppSelector } from "../../redux/hooks";
import notify from "../../utils/notify";
import { IBook } from "../Common/Interface";
import { LoadingIconGray } from "../SVG";
const SingleProduct = ({ content }: { content: IBook }) => {
  const [loading, setLoading] = useState(false);
  const [AddList] = useAddListMutation();
  const { user, token } = useAppSelector((state) => state.user);
  const handleAddList = async () => {
    setLoading(true);
    const result = await AddList({
      data: { book: content?._id, buyer: user?.id },
      token,
    });
    if ("data" in result && result.data?.success) {
      notify("success", "Book added to wish list");
      setLoading(false);
    } else {
      notify("error", "Failed to add book to wish list");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-4/12">
        <div className="p-3 rounded-[12px]">
          <div className="p-5 shadow-[10px_32px_72px_0px_#33333314]">
            <img
              src={content?.book_img}
              alt=""
              className="w-full object-cover"
            />
            <p className="text-right py-[18px]">
              <span className="text-[#F58634] text-xl font-extrabold pl-3">
                ${content?.price}
              </span>
            </p>
            <div className="flex justify-between">
              <p className="text-[#1B1D21] text-lg font-semibold pb-3">
                {content?.title?.length > 30
                  ? content?.title.substring(0, 30) + "..."
                  : content?.title}
              </p>
              <p className="text-[#1B1D21] text-base font-semibold pb-3">
                {content?.author}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#1B1D21] text-base font-semibold pb-3">
                {content?.genre}
              </p>
              <p className="text-[#1B1D21] text-base font-semibold pb-3">
                {content?.publishDate}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <StarRatings
                rating={content?.rating}
                starRatedColor="#F58634"
                numberOfStars={5}
                starDimension="15px"
                starSpacing="2px"
              />
              <Link
                to={`/books/${content?._id}`}
                className="rounded bg-[#F18434] text-white text-xl font-semibold py-[6px] px-6"
              >
                Details
              </Link>
            </div>
            {loading ? (
              <LoadingIconGray className="w-[50px]" />
            ) : (
              <button
                onClick={() => {
                  handleAddList();
                }}
                className="text-center w-full mt-4 py-2 rounded block bg-indigo-600 text-white"
              >
                Add To whish list
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
