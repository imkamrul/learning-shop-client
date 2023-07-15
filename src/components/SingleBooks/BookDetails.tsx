import StarRatings from "react-star-ratings";

const BookDetails = () => {
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
            <p className="text-[32px] pb-4">
              Beats EP Wired On-Ear Headphone-Black
            </p>
            <p className="text-base">
              Brands: <span className="font-bold text-[17px]">ok</span>
            </p>
            <p>Product Code: ok</p>
            <p>Available :ok</p>
            <p>Category: ok</p>
            <p>Sold: ok</p>
            <p className="">
              <span className="text-[#F58634] text-xl font-extrabold pr-3">
                ${10}
              </span>
              <span className="text-[#000] text-sm opacity-50 line-through">
                ${10 + Math.floor(Math.random() * 20) + 1}
              </span>
            </p>
            <div className="flex  items-center">
              <StarRatings
                rating={3}
                starRatedColor="#F58634"
                numberOfStars={5}
                starDimension="25px"
                starSpacing="2px"
              />
              <p> (2 reviews) Write a review</p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
