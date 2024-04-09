import React, { useState } from "react";
import DoctorSidebar from "../../doctor_components/DoctorSidebar";
import ReactSlider from "react-slider";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/Slider/styles/index.css";
import "rsuite/RangeSlider/styles/index.css";

export default function AddPrescription() {
  const [medicines, setMedicines] = useState([
    {
      medicineName: "",
      dosage: "",
      unit: "",
      remarks: "",
    },
  ]);
  const [prescription, setPrescription] = useState({
    name: "",
    age: "",
    block: "",
    room: "",
    disease: "",
    date: "",
    severity: 50,
    medicines: medicines,
  });
  function handleSubmit(e) {
    e.preventDefault();
    prescription;
    setPrescription({
      name: "",
      age: "",
      block: "",
      room: "",
      disease: "",
      date: "",
      severity: 50,
      medicines: medicines,
    });
  }
  return (
    <div className="min-h-screen bg-backgroundColor w-full text-white flex gap-10">
      <DoctorSidebar></DoctorSidebar>
      <div className="dashboard w-full h-full flex flex-col mr-10 gap-6">
        <div className="header my-6 flex justify-between items-center">
          <div className="font-extrabold text-2xl">Prescription Collection</div>
          <div className="relative text-2xl font-extrabold shadow-button">
            <button
              onClick={handleSubmit}
              className="relative active:top-1 w-full h-full border-4 uppercase border-aquaMarine p-1 px-3 active:left-1"
            >
              Save
            </button>
          </div>
        </div>
        <div className="body bg-dark p-4 rounded-3xl flex flex-col justify-center items-center">
          <div className="top gap-4 w-full flex flex-col justify-center items-center">
            <div className="header w-full h-full text-2xl font-extrabold text-center">
              New Prescription
            </div>
            <div className="main w-full flex gap-10 justify-between">
              <div className="left basis-1/2 w-full min-w-96 flex flex-col gap-4 text-xl font-bold">
                <div className="flex">
                  <div className="basis-1/2 w-full">Patients's name : </div>
                  <input
                    value={prescription.name}
                    onChange={(e) => {
                      setPrescription({
                        ...prescription,
                        name: e.target.value,
                      });
                      prescription;
                    }}
                    className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2"
                    type="text"
                  ></input>
                </div>
                <div className="flex">
                  <div className="basis-1/2 w-full">Hostel Block : </div>
                  <input
                    value={prescription.block}
                    onChange={(e) => {
                      setPrescription({
                        ...prescription,
                        block: e.target.value,
                      });
                      prescription;
                    }}
                    className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2"
                    type="text"
                  ></input>
                </div>
                <div className="flex">
                  <div className="basis-1/2 w-full">Room Number : </div>
                  <input
                    value={prescription.room}
                    onChange={(e) => {
                      setPrescription({
                        ...prescription,
                        room: e.target.value,
                      });
                      prescription;
                    }}
                    className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2"
                    type="text"
                  ></input>
                </div>
                <div className="flex">
                  <div className="basis-1/2 w-full">Disease : </div>
                  <input
                    value={prescription.disease}
                    onChange={(e) => {
                      setPrescription({
                        ...prescription,
                        disease: e.target.value,
                      });
                      prescription;
                    }}
                    className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2"
                    type="text"
                  ></input>
                </div>
                <div className="flex">
                  <div className="basis-1/2 w-full">Date : </div>
                  <input
                    value={prescription.date}
                    onChange={(e) => {
                      setPrescription({
                        ...prescription,
                        date: e.target.value,
                      });
                      prescription;
                    }}
                    className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2"
                    type="date"
                  ></input>
                </div>
                <div className="flex">
                  <div className="basis-1/2 w-full">Severity : </div>
                  <div className="w-full self-center h-full basis-1/2">
                    <Slider
                      progress
                      defaultValue={prescription.severity}
                      onChange={(value) => {
                        setPrescription({
                          ...prescription,
                          severity: value,
                        });
                        prescription;
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="right rounded-3xl flex flex-col gap-4 justify-center items-center basis-1/2 w-full bg-riverBed">
                <div className="header rounded-3xl w-52 p-2 shadow-custom text-black text-2xl font-extrabold text-center bg-aquaMarine">
                  Hospitalization
                </div>
                <div className="choices w-72 flex flex-col text-xl font-bold gap-2">
                  <div className="flex gap-4 w-full justify-center">
                    <input
                      name="hospitalization"
                      value="yes"
                      id="yes"
                      type="radio"
                      className="bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 w-8 h-6 rounded-none appearance-none"
                    />
                    <label htmlFor="yes">
                      Yes, the student requires hospitalization
                    </label>
                  </div>
                  <div className="flex gap-4 w-full justify-center">
                    <input
                      name="hospitalization"
                      value="no"
                      id="no"
                      type="radio"
                      className="bg-red-600 w-8 h-6 rounded-none appearance-none border-2 border-"
                    />
                    <label htmlFor="no">
                      No, there is no need for hospitalization
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom flex flex-col justify-center items-center">
            <div className="header w-full h-full text-2xl font-extrabold text-center">
              Medicine Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
