import UserSideBar from "./UserSideBar";

const User = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container py-10">
          <div className="w-3/12 ">
            <UserSideBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
