import React, { useState } from "react";
import DoctorSidebar from "../../../doctor_components/DoctorSidebar";

export default function ViewPrescription() {
  const [medicines, setMedicines] = useState([
    {
      medicineName: "Augmentin",
      dosage: "2",
      unit: "tabs",
      remarks: "",
    },
    {
      medicineName: "Augmentin",
      dosage: "2",
      unit: "tabs",
      remarks: "",
    },
    {
      medicineName: "Augmentin",
      dosage: "2",
      unit: "tabs",
      remarks: "",
    },
  ]);
  const [prescription, setPrescription] = useState({
    name: "Emir",
    age: "20",
    block: "A",
    room: "113",
    disease: "Fever",
    date: "10-04-2024",
    severity: 50,
    medicines: medicines,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Prescription Saved");
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
              className="relative active:top-1 w-full h-full border-4 uppercase border-aquaMarine p-1 px-6 active:left-1"
            >
              PDF
            </button>
          </div>
        </div>
        <div className="main w-full flex gap-10 justify-between bg-dark p-10">
          <div className="left w-full min-w-96 flex flex-col gap-4 text-xl font-bold">
            <div className="flex">
              <div className="basis-1/2 w-full text-center">
                Patients's name :{" "}
              </div>
              <div className="w-full basis-1/2 bg-backgroundColor text-center rounded-3xl p-2">
                {prescription.name}
              </div>
              {/* <input
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
              ></input> */}
            </div>
            <div className="flex">
              <div className="basis-1/2 w-full text-center">
                Hostel Block :{" "}
              </div>
              <div className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2 text-center">
                {prescription.block}
              </div>
              {/* <input
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
              ></input> */}
            </div>
            <div className="flex">
              <div className="basis-1/2 w-full text-center">Room Number : </div>
              <div className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2 text-center ">
                {prescription.room}
              </div>
              {/* <input">{prescription.room}</div>
              {/* <input
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
              ></input> */}
            </div>
            <div className="flex">
              <div className="basis-1/2 w-full text-center">Disease : </div>
              <div className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2 text-center ">
                {prescription.disease}
              </div>
              {/* <input">{prescription.disease}</div>
              {/* <input
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
              ></input> */}
            </div>
            <div className="flex">
              <div className="basis-1/2 w-full text-center">Date : </div>
              <div className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2 text-center ">
                {prescription.date}
              </div>
              {/* <input">{prescription.date}</div>
              {/* <input
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
              ></input> */}
            </div>
            <div className="flex">
              <div className="basis-1/2 w-full text-center">Severity : </div>
              <div className="w-full basis-1/2 bg-backgroundColor rounded-3xl p-2 text-center">
                {prescription.severity}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom bg-dark flex flex-col p-4 gap-4">
          <div className="font-extrabold text-center text-2xl">Medicines</div>
          <div className="body w-full h-full flex">
            <div className="left basis-1/2 w-full flex flex-col gap-4">
              {medicines.map((medicine, index) => (
                <div key={index} className="flex gap-10">
                  <div className="w-1/3 text-center">
                    {medicine.medicineName}
                  </div>
                  <div className="w-1/3 text-center">{medicine.dosage}</div>
                  <div className="w-1/3 text-center">{medicine.unit}</div>
                </div>
              ))}
            </div>
            <div className="right basis-1/2 rounded-3xl w-full">
              <div className="w-full h-full rounded-3xl p-2 bg-backgroundColor">
                <div className="font-extrabold text-center text-2xl">
                  Remarks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
