import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./_root/student/pages/StudentDashboard.jsx";
import PrescriptionHistory from "./_root/student/pages/PrescriptionHistory";
import DoctorDetails from "./_root/student/pages/DoctorDetails";
import Ambulance from "./_root/student/pages/Ambulance";
import DoctorLayout from "./_root/doctor/DoctorLayout";
import StudentLayout from "./_root/student/StudentLayout";
import HostelOfficeLayout from "./_root/hostel_office/HostelOfficeLayout";
import Login from "./_auth/Login.jsx";
import DoctorDashboard from "./_root/doctor/DoctorDashboard.jsx";
import AddPrescription from "./_root/doctor/AddPrescription.jsx";
import PrescriptionDetailsPage from "./_root/student/pages/PrescriptionDetailsPage.jsx";
import ViewPrescription from "./_root/doctor/ViewPrescription.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<DoctorLayout />}>
        <Route path="/doctor/dashbard" element={<DoctorDashboard />} />
        <Route path="/doctor/add-prescription" element={<AddPrescription />} />
      </Route>
      <Route element={<StudentLayout />}>
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/ambulance" element={<Ambulance />} />
        <Route
          path="/student/prescription-history"
          element={<PrescriptionHistory />}
        />
        <Route
          path="/student/:prescriptionId"
          element={<PrescriptionDetailsPage />}
        />
        <Route path="/student/Doctor-details" element={<DoctorDetails />} />
      </Route>
      <Route element={<HostelOfficeLayout />}>
        <Route path="/hostel" />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/add-prescription" element={<AddPrescription />} />
      <Route path="/view-prescription" element={<ViewPrescription />} />
    </Routes>

  );
}
