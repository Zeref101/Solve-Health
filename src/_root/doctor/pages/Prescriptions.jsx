import { useState } from "react";
import DoctorSidebar from "../../../doctor_components/DoctorSidebar";
import add from "../../../assets/add.png";
import { useEffect } from "react";
import { URL_ORIGIN } from "../../../constant";
import { NavLink } from "react-router-dom";

export default function Prescriptions() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(`${URL_ORIGIN}/health_center/getPatients`)
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="min-h-screen bg-backgroundColor w-full text-white flex gap-10">
      <DoctorSidebar></DoctorSidebar>
      <div className="dashboard w-full h-full flex flex-col mr-10 gap-6">
        <div className="header my-6 flex justify-between items-center">
          <div className="font-extrabold text-2xl">Prescription Collection</div>
          <div className="search w-1/3 shadow-custom rounded-3xl">
            <div className="search-bar">
              <input
                type="text"
                className="w-full h-14 bg-contain bg-no-repeat bg-right bg-dark border-2 bg-search border-dark placeholder:text-white placeholder:font-bold rounded-3xl p-4 text-white"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="top w-full h-44 flex flex-col justify-center items-center gap-6 rounded-3xl shadow-custom bg-dark">
          <div>
            <img className="h-20 w-20" src={add} alt="" />
          </div>
          <div className="font-bold text-gray-500 text-2xl">
            Add a new prescription entry
          </div>
        </div>
        <div className="bottom w-full h-full flex flex-col justify-center items-center gap-6 rounded-3xl shadow-custom bg-dark p-6">
          <div className="header text-2xl font-extrabold">History</div>
          <div className="list w-full h-full">
            <div className="grid w-full h-full grid-cols-3 gap-10 justify-between">
              {patients.map((patient) => {
                return (
                  <div
                    className="bg-dark h-full w-full text-center border-purple-500 border-4 rounded-3xl p-4"
                    key={patient.date}
                  >
                    <div className="w-full h-full bg-riverBed rounded-3xl flex flex-col p-2 gap-2 drop-shadow-custom">
                      <span className="text-2xl font-bold drop-shadow-custom">
                        {patient.name}
                      </span>
                      <div className="text-2xl font-bold drop-shadow-custom">
                        {patient.disease}
                      </div>
                      <div className="text-2xl font-bold drop-shadow-custom">
                        {patient.date}
                      </div>
                      <div>
                        <NavLink
                          to={`/doctor/prescription`}
                          className="h-full w-full bg-aquaMarine rounded-xl text-black p-1 px-2 text-sm font-bold shadow-custom"
                        >
                          View Details
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
