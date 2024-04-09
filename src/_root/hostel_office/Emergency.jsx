import React, { useState } from "react";
import WardenSidebar from "../../hostel_components/WardenSideBar";
export default function Emergency() {
    const diseases = [
        "Tuberculosis",
        "Chickenpox",
        "Measles",
        "Mumps",
        "Rubella",
        "Conjuctivitis",
        "Dengue",
        "Ebola virus disease ",
        "COVID-19",
        "Influenza"
      ];
      const care = [
        "Typhoid",
        "Chickenpox",
        "Measles",
        "Mumps",
        "Rubella",
        "Malaria",
        "Dengue",
        "Fever",
        "COVID-19",
        "Influenza"
      ];
  const [selected, setSelected] = useState("A block");
  const [patients, setPatients] = useState([
    {
      name: "John Doe",
      room: "A-101",
      isolation: "Yes",
      disease: "Dengue",
      food: "No",
      phone: "1234567890",
      pres: "",
    },
    {
      name: "John Doe",
      room: "A-101",
      isolation: "Yes",
      disease: "Fever",
      food: "No",
      phone: "1234567890",
      pres: "",
    },
    {
      name: "John Doe",
      room: "A-101",
      isolation: "Yes",
      disease: "Fever",
      food: "No",
      phone: "1234567890",
      pres: "",
    },
  ]);
  console.log(patients);
  return (
    <div className="min-h-screen bg-backgroundColor w-full text-white flex gap-10">
      <WardenSidebar></WardenSidebar>
      <div className="dashboard w-full h-full flex flex-col mr-10 gap-6">
        <div className="header my-6 flex justify-between items-center">
          <div className="font-extrabold text-2xl">Discover Today</div>
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
        <div className="body h-full w-full flex flex-col gap-10 p-10 rounded-3xl bg-dark">
          <div className="table border-4 w-full border-aquaMarineB">
            <div className="h-full w-full">
              <div className="flex text-white drop-shadow-custom w-full font-source-code-pro font-bold uppercase drop-shadow-black md:text-lg lg:text-2xl">
                <div className="custom-scrollbar w-1/5 basis-1/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  S.No.
                </div>
                <div className="custom-scrollbar w-3/5 basis-3/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Name
                </div>
                <div className="custom-scrollbar w-1/5 basis-1/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Room
                </div>
                <div className="custom-scrollbar w-1/5 basis-1/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Disease
                </div>
                <div className="custom-scrollbar w-1/5 basis-2/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Isolation
                </div>
                <div className="custom-scrollbar w-1/5 basis-1/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Food
                </div>
                <div className="custom-scrollbar w-1/5 basis-2/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Phone
                </div>
                <div className="custom-scrollbar w-1/5 basis-2/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Prescription
                </div>
              </div>
              <div className="tab h-full">
                {patients &&
                  patients.map((patient, index) => {
                    return (
                      <div
                        className="flex w-full font-bold text-xl"
                        key={index}
                      >
                        <div className="custom-scrollbar w-1/5 flex items-center justify-center basis-1/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          {index + 1}
                        </div>
                        <div className="custom-scrollbar w-3/5 flex items-center justify-center basis-3/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          {patient.name}
                        </div>
                        <div className="custom-scrollbar w-3/5 flex items-center justify-center basis-1/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          {patient.room}
                        </div>
                        <div className="custom-scrollbar w-3/5 flex items-center justify-center basis-1/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          {patient.disease}
                        </div>
                        <div
                          className={`custom-scrollbar w-3/5 flex items-center justify-center basis-2/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center ${
                            diseases.includes(patient.disease) === true
                              ? "text-red-700"
                              : "text-green-700"
                          }`}
                        >
                          {(diseases.includes(patient.disease) === true)?"Yes":"No"}
                        </div>
                        <div
                          className={`custom-scrollbar w-3/5 flex items-center justify-center basis-1/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center ${
                            care.includes(patient.disease) === true
                              ? "text-red-700"
                              : "text-green-700"
                          }`}
                        >
                          {(care.includes(patient.disease) === true)?"Yes":"No"}
                        </div>
                        <div className="custom-scrollbar w-3/5 flex items-center justify-center basis-2/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          {patient.phone}
                        </div>
                        <div className="custom-scrollbar flex justify-center items-center w-3/5 basis-2/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          <div className="relative text-2xl font-extrabold w-32 shadow-button">
                            <button className="relative active:top-1 w-full h-full border-4 uppercase border-aquaMarine p-1 px-3 active:left-1">
                              PDF
                            </button>
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
    </div>
  );
}
