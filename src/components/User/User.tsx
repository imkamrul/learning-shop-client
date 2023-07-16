import { useGetListQuery } from "../../redux/api/booksApiSlice";
import { useAppSelector } from "../../redux/hooks";
import { LoadingIconGray } from "../SVG";
import UserSideBar from "./UserSideBar";

const User = () => {
  const { user, token } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetListQuery({ id: user?.id, token });
  console.log("isLoading :", isLoading);
  console.log("data :", data?.data[0].book?.title);
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
                  {data.data.map((item: any, index: number) => {
                    return (
                      <li key={index}>
                        <p>{item?.title}</p>
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
