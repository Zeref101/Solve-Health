import { NavLink } from "react-router-dom";
import { appbarInformation } from "../constant";

const StudentAppbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full p-4 bg-backgroundColor">
      <div className="w-full flex gap-4 px-4 justify-between items-center">
        {appbarInformation.map((item) => {
          return (
            <NavLink to={item.navigateTo} key={item.imgUrl}>
              <img src={item.imgUrl} alt="img" className=" w-[25px]" />
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default StudentAppbar;
