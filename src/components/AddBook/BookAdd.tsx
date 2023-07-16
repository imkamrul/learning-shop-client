import { LoadingIconGray } from "../SVG";

const BookAdd = () => {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="bg-[#FFF6F4] w-10/12 mx-auto p-5 rounded shadow">
            <p className="text-center text-[22px] font-medium">book title</p>
            <div className="w-full mx-auto mt-5 flex flex-wrap">
              <div className="w-full pb-3">
                <label
                  htmlFor="bookTitle"
                  className="text-base font-medium pb-3 block"
                >
                  Title
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book title"
                  className="w-8/12 py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="bookTitle"
                />
                <p className={` text-xs text-[red] pt-[3px]  opacity-100`}>
                  Book title is required
                </p>
              </div>
              <div className="w-1/2 pr-3">
                <label
                  htmlFor="bookImg"
                  className="text-base font-medium pb-3 block"
                >
                  Book Image
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book image url"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="bookImg"
                />
                <p className={` text-xs text-[red] pt-[3px] pb-3 opacity-100`}>
                  Book img is required
                </p>
                <label
                  htmlFor="author"
                  className="text-base font-medium pb-3 block pt-3"
                >
                  Book Author
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book author"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="author"
                />
                <p className={` text-xs text-[red] pt-[3px] pb-3 opacity-100`}>
                  Book author is required
                </p>
                <label
                  htmlFor="publishDate"
                  className="text-base font-medium pb-3 block pt-3"
                >
                  Book publish Date
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book publish date"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="publishDate"
                />
                <p className={` text-xs text-[red] pt-[3px] pb-3 opacity-100`}>
                  Book publish date is required
                </p>
              </div>
              <div className="w-1/2 pl-3">
                <label
                  htmlFor="genre"
                  className="text-base font-medium pb-3 block"
                >
                  Genre
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book genre"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="genre"
                />
                <p className={` text-xs text-[red] pt-[3px] pb-3 opacity-100`}>
                  Book Genre is required
                </p>
                <label
                  htmlFor="rating"
                  className="text-base font-medium pb-3 block pt-3"
                >
                  Book Rating
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter book rating"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="rating"
                />
                <p className={` text-xs text-[red] pt-[3px] pb-3 opacity-100`}>
                  Book img is required
                </p>
                <label
                  htmlFor="price"
                  className="text-base font-medium pb-3 block pt-3"
                >
                  Book Price
                  <span className={`text-[red]  inline"`}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter book author"
                  className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
                  id="price"
                />
                <p className={` text-xs text-[red] pt-[3px] pb-3 opacity-100`}>
                  Book price is required
                </p>
              </div>
              <div className=" w-full text-center">
                <button className="bg-[#F47122] text-white w-5/12 py-2 rounded font-bold mt-5">
                  Save Book
                </button>
                <LoadingIconGray />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookAdd;
