import React from "react";
import DoctorSidebar from "./DoctorSidebar";

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-backgroundColor w-full text-white flex gap-10">
      <DoctorSidebar></DoctorSidebar>
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
        <div className="top flex gap-10 w-full h-56">
            <div className="bg-dark w-full p-6">
                <div className="header flex justify-between items-center">
                    <div className="text-xl font-bold">Prescriptions</div>
                    <div>...</div>
                </div>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
}
