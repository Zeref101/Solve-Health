import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getFieldFromDetails } from "../../../util";
import yodaimage from "../../../assets/yoda.png";
import axios from "axios";
import { URL_ORIGIN } from "../../../constant";

export default function StudentDashboard() {
  const details = JSON.parse(localStorage.getItem("details"));
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_ORIGIN}/doctor/getalldocs`)
      .then((response) => {
        setDoctors(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div>
      <div className="py-4 min-h-screen bg-backgroundColor w-full text-white flex flex-col gap-4">
        <div className="flex justify-between items-center p-4">
          <div className="logo flex flex-col justify-center items-center">
            <h1 className=" self-start">Hello,</h1>
            <h1>{details ? details.name : ""}</h1>
          </div>
          <div className="icon">
            <div className="bg-black border-2 border-gray-300 rounded-full w-14 h-14 justify-center items-center"></div>
          </div>
        </div>
        <div className="quote h-40 bg-riverBed mx-6 rounded-2xl flex justify-center items-center">
          <div className="flex m-2 my-4 gap-2 w-full justify-center items-center">
            <img src={yodaimage} alt="yoda" className=" w-[150px]" />
            <div className="flex flex-col justify-center items-center">
              <div className="text-center text-[18px] font-bold textShadow">
                How do you feel?
              </div>
              <div className="text-center text-sm font-semibold">
                I am feeling great right now
              </div>
            </div>
          </div>
        </div>
        <div className="search  mx-6 shadow-custom rounded-3xl">
          <div className="search-bar">
            <div className="w-full h-14 bg-contain bg-no-repeat font-semibold flex justify-center items-center bg-right bg-dark border-2 bg-search border-dark rounded-3xl p-4 text-white">
              Current Queue <span className="mx-2">:</span>
              <div className="w-[35px] h-[35px] rounded-full font-bold text-aquaMarine border-4 flex justify-center items-center border-[#20E9C1]">
                15
              </div>
            </div>
          </div>
        </div>
        <div className="category flex flex-col mx-6 gap-4">
          <div className="header flex items-center justify-between">
            <h1 className="text-xl font-bold">Functionality</h1>
            <h1 className="">See All</h1>
          </div>
          <div className="list flex gap-2 justify-start overflow-x-scroll">
            <NavLink
              to={`/student/ambulance`}
              className="flex flex-col justify-center items-center"
            >
              <div className="h-16 bg-dark p-2 hover:bg-aquaMarine duration-150 shadow-custom rounded-2xl w-16">
                <img src="/src/assets/ambulance.png" alt="ambulance" />
              </div>
              <span className="text-sm font-semibold">Ambulance</span>
            </NavLink>
            <NavLink
              to={`/student/prescription-history`}
              className="flex flex-col justify-center items-center"
            >
              <div className="h-16 p-2 bg-dark hover:bg-aquaMarine shadow-custom rounded-2xl w-16">
                <img src="/src/assets/prescription101.png" alt="prescription" />
              </div>
              <span className="text-sm font-semibold">Prescription</span>
            </NavLink>
          </div>
        </div>
        <div className="doctor flex flex-col mx-6 gap-4">
          <div className="header flex items-center justify-between">
            <h1 className="text-xl font-bold">Doctors</h1>
            <h1 className="">See All</h1>
          </div>
          <div className="list py-4 px-2 flex gap-4 justify-between overflow-x-scroll">
            {Array.isArray(doctors) &&
              doctors.map((docs) => {
                if (!docs || !docs.name) {
                  return null; // Skip rendering if docs or docs.name is null
                }
                return (
                  <NavLink
                    to={`/student/doctor/${docs.id}`}
                    className="flex flex-col justify-center items-center p-2.5"
                    key={docs.name}
                  >
                    <div className="flex flex-col justify-center items-center h-36 bg-dark hover:scale-105 duration-150 ease-in-out rounded-2xl shadow-custom w-24">
                      <div className="h-20 w-20 rounded-full border-4 border-lightTurquoise">
                        <img src="/src/assets/doctor-male-2.png" alt="doctor" />
                      </div>
                      <div className="relative -top-2 overflow-hidden w-16 px-2 flex justify-center h-4 object-contain bg-lightTurquoise rounded-3xl">
                        <img
                          className="w-4 h-4"
                          src="/src/assets/doctor-male-2.png"
                          alt="doctorImage"
                        />
                        <span className="text-black font-bold text-sm">
                          {docs.reviews}
                        </span>
                      </div>
                      <div className="pt-2 line-clamp-1">{docs.name}</div>
                    </div>
                  </NavLink>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
