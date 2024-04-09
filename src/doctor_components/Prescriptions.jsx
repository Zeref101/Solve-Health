import React, { useState } from "react";
import DoctorSidebar from "./DoctorSidebar";
import add from "../assets/add.png";
export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([
    {
      img: "https://s3-alpha-sig.figma.com/img/fb11/a9f5/77f63aabaac5cd02a9af6492c086a768?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2EYeUz~fRSTDHeaa73E8B4q~Y4S~fOdc1datMvxuWAPS~~Z9qtfTLHp32FY16ngSJhVOKrH2V2~5T3XvvTMsbPLrhYcNkGb68zR7keuTcjghcFtLIIKutP1BpSnqUfFW98xnHdef52mc-gXFG8ZqFNHTvRvUrg3a9bmUKHszRNJnHcthdgSPNVazigZJUZR0A2y-EKH8iRnoKRlX~GrP-MlMzPbdYHLMNQ1GWPWq0Hud~PZqWUpP1G-CgAGrk04LErYkd5e-5LeaKXraXx6LloiqR5Rk7vamKPf2ntKVjREJ6yUTUzZeALgn77y8bNWM~QveW7aPP9IVIaz9zq9gw__",
      name: "Dr. Om Aditya",
      date: "22/3/2024",
      disease: "Fever",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fb11/a9f5/77f63aabaac5cd02a9af6492c086a768?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2EYeUz~fRSTDHeaa73E8B4q~Y4S~fOdc1datMvxuWAPS~~Z9qtfTLHp32FY16ngSJhVOKrH2V2~5T3XvvTMsbPLrhYcNkGb68zR7keuTcjghcFtLIIKutP1BpSnqUfFW98xnHdef52mc-gXFG8ZqFNHTvRvUrg3a9bmUKHszRNJnHcthdgSPNVazigZJUZR0A2y-EKH8iRnoKRlX~GrP-MlMzPbdYHLMNQ1GWPWq0Hud~PZqWUpP1G-CgAGrk04LErYkd5e-5LeaKXraXx6LloiqR5Rk7vamKPf2ntKVjREJ6yUTUzZeALgn77y8bNWM~QveW7aPP9IVIaz9zq9gw__",
      name: "Dr. Om Aditya",
      date: "22/3/2024",
      disease: "Fever",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fb11/a9f5/77f63aabaac5cd02a9af6492c086a768?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2EYeUz~fRSTDHeaa73E8B4q~Y4S~fOdc1datMvxuWAPS~~Z9qtfTLHp32FY16ngSJhVOKrH2V2~5T3XvvTMsbPLrhYcNkGb68zR7keuTcjghcFtLIIKutP1BpSnqUfFW98xnHdef52mc-gXFG8ZqFNHTvRvUrg3a9bmUKHszRNJnHcthdgSPNVazigZJUZR0A2y-EKH8iRnoKRlX~GrP-MlMzPbdYHLMNQ1GWPWq0Hud~PZqWUpP1G-CgAGrk04LErYkd5e-5LeaKXraXx6LloiqR5Rk7vamKPf2ntKVjREJ6yUTUzZeALgn77y8bNWM~QveW7aPP9IVIaz9zq9gw__",
      name: "Dr. Om Aditya",
      date: "22/3/2024",
      disease: "Fever",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fb11/a9f5/77f63aabaac5cd02a9af6492c086a768?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2EYeUz~fRSTDHeaa73E8B4q~Y4S~fOdc1datMvxuWAPS~~Z9qtfTLHp32FY16ngSJhVOKrH2V2~5T3XvvTMsbPLrhYcNkGb68zR7keuTcjghcFtLIIKutP1BpSnqUfFW98xnHdef52mc-gXFG8ZqFNHTvRvUrg3a9bmUKHszRNJnHcthdgSPNVazigZJUZR0A2y-EKH8iRnoKRlX~GrP-MlMzPbdYHLMNQ1GWPWq0Hud~PZqWUpP1G-CgAGrk04LErYkd5e-5LeaKXraXx6LloiqR5Rk7vamKPf2ntKVjREJ6yUTUzZeALgn77y8bNWM~QveW7aPP9IVIaz9zq9gw__",
      name: "Dr. Om Aditya",
      date: "22/3/2024",
      disease: "Fever",
    },
  ]);

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
              {prescriptions.map((prescription) => {
                return (
                  <div className="bg-dark h-full w-full text-center border-purple-500 border-4 rounded-3xl p-4">
                    <div className="w-full h-full bg-riverBed rounded-3xl flex flex-col p-2 gap-2 drop-shadow-custom">
                      <span className="text-2xl font-bold drop-shadow-custom">{prescription.name}</span>
                      <div className="text-2xl font-bold drop-shadow-custom">{prescription.disease}</div>
                      <div className="text-2xl font-bold drop-shadow-custom">{prescription.date}</div>
                      <div>
                        <button className="h-full w-full bg-aquaMarine rounded-xl text-black p-1 px-2 text-sm font-bold shadow-custom">
                          View Details
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
  );
}
