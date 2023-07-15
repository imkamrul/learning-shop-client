import { Search } from "../SVG";

const Searching = () => {
  return (
    <>
      <section className="bg-[#FFF1EE]">
        <div className="container py-20">
          <h1 className="text-[42px] font-semibold text-[#3F3F3F] text-center">
            Learn Something New
          </h1>
          <div className="flex w-9/12 mx-auto relative mt-[56px]">
            <span className="absolute top-[40%] left-[46px]">
              <Search />
            </span>
            <input
              type="text"
              placeholder="Search Online Course"
              className="bg-white w-full border-[1px] border-[#00000012] rounded-l-[8px] py-[25px] pl-[74px] focus:outline-[1px] focus:outline-[#00000012]  shadow-[0px_27.48235511779785px_34.35294723510742px_0px_rgba(162,162,162,0.10)] pr-[190px]"
            />
            <button className="bg-[#5EB9B3] rounded-[6px] px-[26px] text-white font-medium text-[22px] absolute right-2 top-2 bottom-2">
              Search Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Searching;
