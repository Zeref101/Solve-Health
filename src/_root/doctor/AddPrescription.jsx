import React, { useState } from "react";
import DoctorSidebar from "../../doctor_components/DoctorSidebar";
import ReactSlider from "react-slider";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/Slider/styles/index.css";
import "rsuite/RangeSlider/styles/index.css";

export default function AddPrescription() {
  const [hospitalization, setHospitalization] = useState(false);
  const [medicines, setMedicines] = useState([
    {
      medicineName: "",
      dosage: "",
      unit: "",
      remarks: "",
    },
    {
      medicineName: "",
      dosage: "",
      unit: "",
      remarks: "",
    },
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
    setPrescription({
      ...prescription,
      medicines: medicines,
    });
    e.preventDefault();
    console.log(prescription, medicines);

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
        <div className="body bg-dark p-4 rounded-3xl flex flex-col justify-center items-center gap-10">
          <div className="top gap-10 w-full flex flex-col justify-center items-center">
            <div className="header w-full h-full text-2xl font-extrabold text-center">
              New Prescription
            </div>
            <div className="main w-full flex gap-10 justify-between">
              <div className="left basis-2/3 w-full min-w-96 flex flex-col gap-4 text-xl font-bold">
                <div className="flex">
                  <div className="basis-1/2 w-full text-center">
                    Patients's name :{" "}
                  </div>
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
                  <div className="basis-1/2 w-full text-center">
                    Hostel Block :{" "}
                  </div>
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
                  <div className="basis-1/2 w-full text-center">
                    Room Number :{" "}
                  </div>
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
                  <div className="basis-1/2 w-full text-center">Disease : </div>
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
                  <div className="basis-1/2 w-full text-center">Date : </div>
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
                  <div className="basis-1/2 w-full text-center">
                    Severity :{" "}
                  </div>
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
              <div className="right rounded-3xl flex flex-col gap-4 justify-center items-center basis-1/3 w-full bg-riverBed">
                <div className="header rounded-3xl w-52 p-2 shadow-custom text-black text-2xl font-extrabold text-center bg-aquaMarine">
                  Hospitalization
                </div>
                <div className="choices w-72 flex flex-col text-xl font-bold gap-2">
                  <div className="flex gap-4 w-full justify-center">
                    <input
                      name="hospitalization"
                      value={true}
                      onChange={(e) => {
                        setHospitalization(e.target.value);
                      }}
                      id="yes"
                      type="radio"
                      className="checked:bg-gradient-to-b after:content-[''] checked:after:content-['✔️'] after:w-full after:flex after:justify-center after:items-center checked:from-blue-700 checked:via-blue-500 border-2 border-blue-500 checked:to-blue-400 w-14 h-10 rounded-xl appearance-none"
                    />
                    <label htmlFor="yes">
                      Yes, the student requires hospitalization
                    </label>
                  </div>
                  <div className="flex gap-4 w-full justify-center">
                    <input
                      name="hospitalization"
                      value={false}
                      onChange={(e) => {
                        setHospitalization(e.target.value);
                      }}
                      id="no"
                      type="radio"
                      className="after:content-[''] checked:after:content-['✔️'] after:w-full after:flex after:justify-center after:items-center checked:bg-gradient-to-b checked:from-blue-700 checked:via-blue-500 border-2 border-blue-500 checked:to-blue-400 w-14 h-10 rounded-xl appearance-none"
                    />
                    <label htmlFor="no">
                      No, there is no need for hospitalization
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom flex flex-col w-full gap-10 justify-center items-center">
            <div className="header w-full h-full text-2xl font-extrabold text-center">
              Medicine Details
            </div>
            <div className="table border-4 w-full border-aquaMarineB">
              <div className="h-full w-full">
                <div className="flex text-white drop-shadow-custom w-full font-source-code-pro font-bold uppercase drop-shadow-black md:text-lg lg:text-2xl">
                  <div className="custom-scrollbar w-1/5 basis-1/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                    S.No.
                  </div>
                  <div className="custom-scrollbar w-3/5 basis-4/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                    Medicine
                  </div>
                  <div className="custom-scrollbar w-1/5 basis-3/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                    Dosage
                  </div>
                  <div className="custom-scrollbar w-1/5 basis-6/12 border-2 border-l-0 overflow-hidden border-aquaMarineB whitespace-nowrap py-4 text-center">
                    Remarks
                  </div>
                </div>
                <div className="tab">
                  {medicines.map((medicine, index) => (
                    <div className="flex w-full" key={index}>
                      <div className="custom-scrollbar w-1/5 basis-1/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center">
                        {index + 1}
                      </div>
                      <input
                        value={medicine.medicineName}
                        onChange={(e) => {
                          setMedicines(
                            medicines.map((med, i) => {
                              if (i === index) {
                                return {
                                  ...med,
                                  medicineName: e.target.value,
                                };
                              }
                              return med;
                            })
                          );
                          setPrescription({
                            ...prescription,
                            medicines: medicines,
                          });
                          medicines;
                        }}
                        className="custom-scrollbar w-3/5 basis-4/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center"
                        type="text"
                      ></input>
                      <input
                        value={medicine.dosage}
                        onChange={(e) => {
                          setMedicines(
                            medicines.map((med, i) => {
                              if (i === index) {
                                return {
                                  ...med,
                                  dosage: e.target.value,
                                };
                              }
                              return med;
                            })
                          );
                          setPrescription({
                            ...prescription,
                            medicines: medicines,
                          });
                          medicines;
                        }}
                        className="custom-scrollbar w-1/5 basis-3/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center"
                        type="text"
                      ></input>
                      <input
                        value={medicine.remarks}
                        onChange={(e) => {
                          setMedicines(
                            medicines.map((med, i) => {
                              if (i === index) {
                                return {
                                  ...med,
                                  remarks: e.target.value,
                                };
                              }
                              return med;
                            })
                          );
                          setPrescription({
                            ...prescription,
                            medicines: medicines,
                          });
                          medicines;
                        }}
                        className="custom-scrollbar w-1/5 basis-6/12 border-2 border-l-0 overflow-hidden bg-backgroundColor border-aquaMarineB whitespace-nowrap py-4 text-center"
                        type="text"
                      ></input>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="remarks flex justify-between w-full items-center gap-4">
              <div className="whitespace-nowrap text-2xl font-extrabold">Additional Remarks :</div>
              <textarea className="bg-backgroundColor rounded-3xl p-2 w-full" name="" id="" cols="30" rows="2"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
