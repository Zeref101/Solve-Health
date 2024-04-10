import React, { useState, useEffect } from "react";
import WardenSidebar from "../../../hostel_components/WardenSideBar";
import axios from "axios";
import { URL_ORIGIN } from "../../../constant";
export default function HostelDashboard() {
  const [selected, setSelected] = useState("A block");
  const [patients, setPatients] = useState([
  ]);
  useEffect(()=>{
    function fetchData(){
      axios.get(`${URL_ORIGIN}/health_center/getByBlock/?block=A`).then((res)=>{
        setPatients(res.data);
      })
    }
    fetchData();
  },[])

  function fetchByBlock(block){
    axios.get(`${URL_ORIGIN}/health_center/getByBlock/?block=${block}`).then((res)=>{
      setPatients(res.data);
    })
  }
  function fetchByStatus(){
    axios.get(`${URL_ORIGIN}/health_center/getByStatus/?status=yes`).then((res)=>{
      setPatients(res.data);
    })
  }
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
          <div className="header w-full flex justify-center">
            <div
              className={`choices font-extrabold uppercase text-2xl rounded-3xl overflow-hidden drop-shadow-custom bg-riverBed w-[600px] flex justify-center items-center `}
            >
              <label
                htmlFor=""
                onClick={() => {
                  setSelected("A block");
                  fetchByBlock("A")
                  console.log("hi");
                }}
                className={`w-full border-2 border-gray-700 text-center ${
                  selected === "A block"
                    ? " border-t-blue-500 border-b-blue-500"
                    : ""
                }`}
              >
                <span className="w-full drop-shadow-custom">A block</span>
              </label>
              <label
                htmlFor=""
                onClick={() => {
                  setSelected("B block");
                  fetchByBlock("B")
                  console.log("hi");
                }}
                className={`w-full border-2 border-gray-700 text-center ${
                  selected === "B block"
                    ? " border-t-blue-500 border-b-blue-500 "
                    : ""
                }`}
              >
                <span className="w-full drop-shadow-custom">B block</span>
              </label>
              <label
                htmlFor=""
                onClick={() => {
                  setSelected("C block");
                  fetchByBlock("C")
                  console.log("hi");
                }}
                className={`w-full border-2 border-gray-700 text-center ${
                  selected === "C block"
                    ? " border-t-blue-500 border-b-blue-500 "
                    : ""
                }`}
              >
                <span className="w-full drop-shadow-custom">C block</span>
              </label>
              <label
                htmlFor=""
                onClick={() => {
                  setSelected("D block");
                  fetchByBlock("D")
                  console.log("hi");
                }}
                className={`w-full border-2 border-gray-700 text-center ${
                  selected === "D block"
                    ? " border-t-blue-500 border-b-blue-500"
                    : ""
                }`}
              >
                <span className="w-full drop-shadow-custom">D block</span>
              </label>
            </div>
          </div>
          <div className="flex w-full text-center justify-center text-gray-400">
            Filter By
          </div>
          <div className="flex justify-between mx-48 gap-10 text-aquaMarine font-bold">
            <div onClick={fetchByStatus} className="w-full h-full bg-blackish text-center p-2 rounded-tl-full rounded-br-full shadow-custom drop-shadow-custom">
              Hospitalised
            </div>
            <div className="w-full h-full bg-blackish text-center p-2 rounded-tl-full rounded-br-full shadow-custom drop-shadow-custom">
              Date
            </div>
            <div className="w-full h-full bg-blackish text-center p-2 rounded-tl-full rounded-br-full shadow-custom drop-shadow-custom">
              Severity
            </div>
          </div>
          <div className="table border-4 w-full border-aquaMarineB">
            <div className="h-full w-full">
              <div className="flex text-white drop-shadow-custom w-full font-source-code-pro font-bold uppercase drop-shadow-black md:text-lg lg:text-2xl">
                <div className="custom-scrollbar w-1/5 basis-1/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  S.No.
                </div>
                <div className="custom-scrollbar w-3/5 basis-4/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Name
                </div>
                <div className="custom-scrollbar w-1/5 basis-3/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Room No.
                </div>
                <div className="custom-scrollbar w-1/5 basis-3/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Status
                </div>
                <div className="custom-scrollbar w-1/5 basis-3/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                  Prescription
                </div>
              </div>
              <div className="tab h-full">
                {patients &&
                  patients.map((patient, index) => {
                    return (
                      <div className="flex w-full font-bold text-xl" key={index}>
                        <div className="custom-scrollbar w-1/5 flex items-center justify-center basis-1/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          {index + 1}
                        </div>
                        <div className="custom-scrollbar w-3/5 flex items-center justify-center basis-4/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          {patient.name}
                        </div>
                        <div className="custom-scrollbar w-3/5 flex items-center justify-center basis-3/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          {patient.room}
                        </div>
                        <div className={`custom-scrollbar w-3/5 flex items-center justify-center basis-3/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center ${(patient.status==="yes")?"text-red-700":"text-green-700"}`}>
                          {patient.status}
                        </div>
                        <div className="custom-scrollbar flex justify-center items-center w-3/5 basis-3/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                          <div className="relative text-2xl font-extrabold w-32 shadow-button">
                            <button
                              className="relative active:top-1 w-full h-full border-4 uppercase border-aquaMarine p-1 px-3 active:left-1"
                            >
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
