import { NavLink } from "react-router-dom";
import { dashboardInformation } from "../constant";
const DoctorSidebar = () => {
  return (
    <nav className=" bg-riverBed w-[450px] h-screen rounded-r-lg flex flex-col items-center justify-start pt-20 ">
      <div className="flex items-start justify-center flex-col">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/fb11/a9f5/77f63aabaac5cd02a9af6492c086a768?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2EYeUz~fRSTDHeaa73E8B4q~Y4S~fOdc1datMvxuWAPS~~Z9qtfTLHp32FY16ngSJhVOKrH2V2~5T3XvvTMsbPLrhYcNkGb68zR7keuTcjghcFtLIIKutP1BpSnqUfFW98xnHdef52mc-gXFG8ZqFNHTvRvUrg3a9bmUKHszRNJnHcthdgSPNVazigZJUZR0A2y-EKH8iRnoKRlX~GrP-MlMzPbdYHLMNQ1GWPWq0Hud~PZqWUpP1G-CgAGrk04LErYkd5e-5LeaKXraXx6LloiqR5Rk7vamKPf2ntKVjREJ6yUTUzZeALgn77y8bNWM~QveW7aPP9IVIaz9zq9gw__"
              alt="doctor"
              className=" object-fill w-[100px] h-[100px] border-riverBed rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1 justify-center items-center text-[19px]">
            <span className="text-offwhite font-bold">Dr.Om Aditya</span>
            <span className=" text-offwhite font-normal text-[14px]">
              Nothing Special
            </span>
          </div>
        </div>
        <img
          src="/src/assets/divider.png"
          alt="divider"
          className=" w-[80%] pl-8 pt-4"
        />
        <div className=" flex flex-col justify-center items-center gap-4 pt-4">
          {dashboardInformation.map((item) => {
            return (
              <NavLink
                to={item.route}
                className=" flex gap-2.5 items-center justify-start w-[15rem] p-4"
                key={item.label}
              >
                <img src={item.imgUrl} alt="image" className="w-[25px]" />
                <span className=" text-dashboardText text-[18px]">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
        <img
          src="/src/assets/divider.png"
          alt="divider"
          className=" w-[80%] pl-8 pt-32"
        />
        <div className=" flex gap-2.5 pt-[4rem] p-4">
          <img
            src="/src/assets/user-logout2.png"
            alt="logout"
            className="w-[25px]"
          />
          <span className=" text-dashboardText text-[18px]">Log Out</span>
        </div>
      </div>
    </nav>
  );
};

export default DoctorSidebar;
