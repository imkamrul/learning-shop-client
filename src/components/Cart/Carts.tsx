import SingleCartItem from "./SingleCartItem";
import Summary from "./Summary";

const Carts = () => {
  return (
    <section className="bg-[#FFF8F8] ">
      <div className="container flex flex-wrap py-10">
        <div className="w-8/12 pr-5">
          <div className="bg-[white]  rounded flex justify-between py-[22px] px-[22px] shadow">
            <p className=" text-xl font-medium">Total Item {1}</p>
            <p className="text-lg font-medium">Delete All</p>
          </div>
          <div className="mt-4 bg-white rounded py-[26px] px-5 flex flex-col gap-y-6 shadow">
            <SingleCartItem />
            <SingleCartItem />
            <SingleCartItem />
            <SingleCartItem />
            <SingleCartItem />
          </div>
        </div>
        <div className="w-4/12">
          <Summary />
        </div>
      </div>
    </section>
  );
};

export default Carts;
