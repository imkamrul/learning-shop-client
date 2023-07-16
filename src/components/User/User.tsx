import { useState } from "react";
import {
  useGetListQuery,
  useUpdateStatusMutation,
} from "../../redux/api/booksApiSlice";
import { useAppSelector } from "../../redux/hooks";
import notify from "../../utils/notify";
import Modal from "../Common/Modal";
import { LoadingIconGray } from "../SVG";
import UserSideBar from "./UserSideBar";
const User = () => {
  const { user, token } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetListQuery({ id: user?.id, token });
  interface UpdateData {
    id: string;
    value: string;
  }

  const [updateData, setUpdateData] = useState<UpdateData>({
    id: "",
    value: "",
  });
  const [showModal, setShowModal] = useState(false);
  const handleInputChange = (id: string, value: string) => {
    setUpdateData({ value, id });

    setShowModal(true);
  };
  const [updateStatus] = useUpdateStatusMutation();
  const handleConfirmSubmit = async () => {
    const result = await updateStatus({
      id: updateData.id,
      data: { currentStatus: updateData?.value },
      token,
    });
    if ("data" in result && result.data?.success) {
      notify("success", "Book deleted successfully");
      setShowModal(false);
    } else {
      notify("error", "Failed to delete book");
      setShowModal(false);
    }
  };

  return (
    <>
      <section className="bg-white">
        <div className="container py-10 flex flex-wrap justify-between">
          <div className="w-3/12 ">
            <UserSideBar />
          </div>
          <div className="w-8/12 ">
            {isLoading ? (
              <LoadingIconGray />
            ) : (
              <>
                <ul>
                  <li className="flex  justify-between bg-[#FFF8F8] p-3 rounded my-5 shadow gap-x-5  font-bold">
                    <p className="text-lg">Title</p>

                    <p className="text-lg">Current Status</p>
                    <p className="text-lg">Genre</p>
                    <p className="text-lg">Publish Year</p>
                    <div className="">
                      <p>Change Current Status</p>
                    </div>
                  </li>
                  {data.data.map((item: any, index: number) => {
                    console.log(item);
                    return (
                      <li
                        key={index}
                        className="flex bg-[#FFF8F8] p-3 rounded my-5 shadow gap-x-5 justify-between"
                      >
                        <p className="text-lg">{item?.book?.title}</p>

                        <p className="text-lg">{item?.currentStatus}</p>
                        <p className="text-lg">{item?.book?.genre}</p>
                        <p className="text-lg">{item?.book?.publishDate}</p>
                        <div className="">
                          <select
                            onChange={(e) =>
                              handleInputChange(item._id, e.target.value)
                            }
                            id="countries"
                            className=" border  text-gray-900 text-sm rounded-lg ring-blue-500  block w-full p-2.5 bg-indigo-600 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          >
                            <option selected>Choose a status</option>
                            <option value="Not Started">Not Started</option>
                            <option value="Running">Running</option>
                            <option value="Finished">Finished</option>
                          </select>
                        </div>
                        <Modal
                          showModal={showModal}
                          closeModal={() => setShowModal(false)}
                          modalText={"Are you sure you want to update this?"}
                          handleYes={() => handleConfirmSubmit()}
                        />
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
