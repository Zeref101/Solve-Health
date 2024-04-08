import React, { useState } from "react";

export default function PrescriptionHistory() {
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
                  <h2 className="text-lg text-black font-bold">
                    {prescription.name}
                  </h2>
                </div>
                <div className="right flex flex-col justify-center items-center uppercase gap-1">
                  <p className="text-white font-bold">{prescription.disease}</p>
                  <p className="text-white">{prescription.date}</p>
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
  );
}
