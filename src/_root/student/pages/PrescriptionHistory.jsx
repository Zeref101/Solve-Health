import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function PrescriptionHistory() {
  const [prescriptions, setPrescriptions] = useState([
    {
      img: "/src/assets/doctor-male-2.png",
      name: "Dr. Om Aditya",
      date: "22/3/2024",
      disease: "Fever",
      prescriptionId: "1234",
    },
    {
      img: "/src/assets/doctor-male-2.png",
      name: "Dr. Saumya Gupta",
      date: "02/4/2024",
      disease: "Dengue",
      prescriptionId: "5678",
    },
    {
      img: "/src/assets/doctor-male-2.png",
      name: "Dr. Satyaprakash",
      date: "22/4/2024",
      disease: "Cold",
      prescriptionId: "9876",
    },
    {
      img: "/src/assets/doctor-male-2.png",
      name: "Dr. Om Aditya",
      date: "22/3/2024",
      disease: "Headache",
      prescriptionId: "5432",
    },
  ]);
  return (
    <div>
      <div className="py-4 min-h-screen bg-backgroundColor w-full text-white flex flex-col gap-4">
        <div className="header flex justify-between items-center p-4 pb-10 rounded-3xl overflow-hidden shadow-custom">
          <div className="logo flex flex-col justify-center items-center">
            <h1 className="self-start text-2xl font-bold">
              Prescription History
            </h1>
          </div>
          <div className="icon ">
            <div className="bg-black border-2 border-[#D9D9D9] rounded-full w-14 h-14"></div>
          </div>
        </div>
        <div className="list flex flex-col w-full h-full px-6 gap-10">
          {prescriptions.map((prescription, index) => {
            return (
              <div
                key={index}
                className="prescription-card flex items-center p-4 justify-between rounded-lg bg-riverBed shadow-custom"
              >
                <div className="left flex flex-col">
                  <img
                    src={prescription.img}
                    alt="Doctor"
                    className="w-16 h-16 rounded-full border-2 border-gray-300 self-center shadow-custom"
                  />
                  <h2 className="text-lg text-white font-bold">
                    {prescription.name}
                  </h2>
                </div>
                <div className="right flex flex-col justify-center items-center uppercase gap-1">
                  <p className="text-white font-bold">{prescription.disease}</p>
                  <p className="text-white">{prescription.date}</p>
                  <div>
                    <NavLink
                      to={`/student/${prescription.prescriptionId}`}
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
  );
}
