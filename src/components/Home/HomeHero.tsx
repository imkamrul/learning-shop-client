import { Search } from "../SVG";

const HomeHero = () => {
  return (
    <>
      <section className="bg-[#FFF6F4]">
        <div className="container flex flex-wrap items-center">
          <div className="w-1/2">
            <h1 className="text-[50px] font-extrabold text-[#12141D]">
              An Interactive Platform For Learning And Celebrating
            </h1>
            <p className="text-lg leading-[34px] text-[#6B6B6B] py-[26px]">
              Great software that allows you to chat from any place at any time
              without any interruption.chat from any place at any time without
              any interruption. at any time without
            </p>
            <div className="flex w-full relative">
              <span className="absolute top-[40%] left-[7%]">
                <Search />
              </span>
              <input
                type="text"
                placeholder="Search Online Course"
                className="bg-white w-full border-[1px] border-[#00000012] rounded-l-[8px] py-[25px] pl-[74px] focus:outline-[1px] focus:outline-[#00000012]  shadow-[0px_30px_64px_0px_rgba(0,0,0,0.06)] pr-[190px]"
              />
              <button className="bg-[#F47122] rounded-[6px] px-[26px] text-white text-base absolute right-2 top-2 bottom-2">
                Search Course
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-end pl-[50px]">
            <img
              src="https://res.cloudinary.com/dnlnzptzc/image/upload/v1689523386/HomeHero.png"
              alt=""
              className="h-[550px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
