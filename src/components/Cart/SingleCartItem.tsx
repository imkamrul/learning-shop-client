import { DeleteIcon, HeartIcon } from "../SVG";

const SingleCartItem = () => {
  return (
    <>
      <div className="bg-[#FFF8F8] rounded p-4 shadow">
        <p className="pb-4 text-lg font-medium border-b-[1px]">
          Walton Laptop Karonda
        </p>
        <div className="pt-4 flex items-center justify-between">
          <div className="">
            <img src="../../../public/book.png" alt="" className="w-[90px]" />
          </div>
          <div className="flex items-center gap-x-[16px]">
            <span className="text-lg">Qty</span>{" "}
            <span className="bg-[#FFFFFF] px-2 py-1 text-3xl font-extrabold rounded">
              -
            </span>{" "}
            <span className="text-lg">1</span>{" "}
            <span className="bg-[#FFFFFF] px-2 py-1 text-3xl font-extrabold rounded ">
              +
            </span>
          </div>
          <div className="">
            <p className="text-lg">
              BDT - <span className="font-semibold">19200</span>
            </p>
          </div>
          <div className="flex items-center gap-x-[25px]">
            <span>
              <DeleteIcon />
            </span>
            <span>
              <HeartIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCartItem;
