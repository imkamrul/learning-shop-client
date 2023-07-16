import { YellowCircle } from "../SVG";

const Subscribe = () => {
  return (
    <>
      <section className="bg-[#5EB9B3] relative">
        <span className="absolute left-0 top-0 translate-y-[-50%]">
          <YellowCircle />
        </span>
        <div className="container py-16 flex flex-wrap justify-between">
          <div className="w-6/12">
            <p className="text-[34px] text-white font-bold">
              Join Us Now And Subscribe
            </p>
            <p className="text-[13px] leading-6 text-white py-3">
              Get notification about tips, new product and exclusive promo news
              just for you. Get notification about tips, new product and
              exclusive promo news just for you.exclusive promo news just for
              you. Get notification about tips, new product and exclusive promo
            </p>
            <div className="flex w-full relative mt-3">
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-white w-full border-[1px] border-[#00000012] rounded-l-[8px] py-[24px] pl-[40px] focus:outline-[1px] focus:outline-[#00000012]  shadow-[0px_30px_64px_0px_rgba(0,0,0,0.06)] pr-[190px]"
              />
              <button className="bg-[#F5AA40] rounded-[9px] px-[26px] text-white text-[13px] font-medium absolute right-2 top-2 bottom-2">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-5/12 relative">
            <img
              src="https://res.cloudinary.com/dnlnzptzc/image/upload/v1689523386/subscribe.png"
              alt=""
              className="w-full object-cover absolute right-0 top-0 translate-y-[-30%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
