import { useRef, useState } from "react";
import StarRatings from "react-star-ratings";
import { usePostReviewMutation } from "../../redux/api/booksApiSlice";
import { useAppSelector } from "../../redux/hooks";
import notify from "../../utils/notify";
import { IReview } from "../Common/Interface";
const BookDesRev = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [reviewData, setReviewData] = useState<IReview>({
    title: "",
    name: "",
    rating: 0,
    message: "",
    user: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value }: { name: string; value: string | number } = e.target;
    if (name === "rating" || name === "price") {
      value = parseInt(value, 10);
    }
    const newData: IReview = { ...reviewData, [name]: value };

    setReviewData(newData);
  };
  const { singleBook } = useAppSelector((state) => state.books);

  const { token, user } = useAppSelector((state) => state.user);
  const [postReview] = usePostReviewMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (singleBook !== null) {
      reviewData.user = user.id;
      const result = await postReview({
        token,
        data: reviewData,
        id: singleBook._id,
      });

      if ("data" in result && result.data?.success) {
        notify("success", "Review added successfully");
        if (formRef.current !== null) {
          formRef.current.reset();
        }
      } else {
        notify("error", "Try again");
      }
    } else {
      notify("error", "Try again");
    }
  };

  return (
    <>
      <section className="bg-[#FFF1EE] pb-20">
        <div className="container">
          <div className="border-b-[1px] border-[#e5e5e5] flex justify-start gap-x-[20px]">
            <p className="text-lg font-medium pb-2">Reviews</p>
          </div>

          <div className="reviews pt-3">
            {singleBook?.reviews?.map((review, index) => {
              return (
                <div className="" key={index}>
                  <div className="shadow py-2 px-5 my-5">
                    <StarRatings
                      rating={review?.rating || 0}
                      starRatedColor="#F58634"
                      numberOfStars={5}
                      starDimension="15px"
                      starSpacing="2px"
                    />
                    <p className="text-lg py-2">{review?.name}</p>
                    <p className="text-base font-medium">{review.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <form
              id="review"
              ref={formRef}
              className="flex flex-wrap mt-10"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="w-full flex  gap-x-10">
                <input
                  type="text"
                  placeholder="Enter name"
                  className=" py-[20px] placeholder:text-black pl-5 placeholder:text-sm rounded shadow-sm focus:outline-none my-3 w-1/2"
                  required
                  name="name"
                  onChange={(e) => handleInputChange(e)}
                />
                <input
                  type="number"
                  placeholder="Enter Rating"
                  className=" py-[20px] placeholder:text-black pl-5 placeholder:text-sm rounded 
                  shadow-sm focus:outline-none my-3 w-1/2"
                  required
                  name="rating"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <textarea
                required
                name="message"
                placeholder="Enter message"
                className=" py-[20px] placeholder:text-black pl-5 placeholder:text-sm rounded shadow-sm focus:outline-none my-3 w-full"
                onChange={(e) => handleInputChange(e)}
              />
              <button
                type="submit"
                className="bg-[#F18434] text-white w-3/12 py-[10px]  rounded text-lg mr-5 mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDesRev;
