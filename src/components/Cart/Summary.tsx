const Summary = () => {
  return (
    <>
      <div className="bg-white rounded shadow">
        <p className="py-[22px] pl-[22px] text-xl font-medium">Order Summery</p>
      </div>
      <div className="mt-4 bg-white rounded p-6 flex flex-col gap-y-[18px] shadow">
        <p className="flex justify-between text-base font-medium">
          <span>Subtotal</span>
          <span>$ 120</span>
        </p>
        <p className="flex justify-between text-base font-medium">
          <span>Shipping</span>
          <span>$ 120</span>
        </p>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Enter Voucher Code"
            className="bg-white w-9/12 border-[1px] border-[#00000012] rounded-l-[8px] py-[12px] pl-3 focus:outline-[1px] focus:outline-[#00000012]  "
          />
          <button className="bg-[#F5AA40] rounded-r-[8px] w-3/12 text-white text-base">
            Apply
          </button>
        </div>
        <p className="flex justify-between text-base font-medium">
          <span>Discount</span>
          <span>$ 120</span>
        </p>
        <p className="flex justify-between text-xl font-medium">
          <span>Total</span>
          <span>$ 120</span>
        </p>
        <button className="bg-[#CD2027] text-white rounded py-3 mt-2 text-lg font-medium">
          {" "}
          Process To Checkout
        </button>
      </div>
    </>
  );
};

export default Summary;
