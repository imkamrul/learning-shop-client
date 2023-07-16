import { useAppSelector } from "../../redux/hooks";

const UserSideBar = () => {
  const { user } = useAppSelector((state) => state.user);
  const userProfileMenuList = [
    "Manage My Account",
    "My Order",
    "My Wishlist",
    // "My Address",
    // "My Reviews",
    // "My Profile",
    // "My Coupons",
    // "My Referrals",
    // "Logout",
  ];
  return (
    <>
      <div className="bg-[#FFF8F8] py-[20px] shadow">
        <div className="flex flex-col justify-center items-center  gap-y-[10px]">
          <img src="../../../public/user.png" alt="" />
          <p className="text-xl font-medium ">Kamrul Hasan</p>
          <p className="text-lg font-medium">{user?.email}</p>
          <p className="text-lg font-medium capitalize">{user?.role}</p>
        </div>
        <ul className="flex flex-col gap-y-2 px-[15px] pt-[45px]">
          {userProfileMenuList.map((item, index) => (
            <li
              key={index}
              className="text-[#214497] bg-[#ffffff] border-l-[5px] border-[black] py-3 pl-[23px] rounded-r cursor-pointer font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserSideBar;
