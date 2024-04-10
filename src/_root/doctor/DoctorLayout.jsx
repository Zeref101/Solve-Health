import { useUserContext } from "../../context/AuthenticationProvider";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import DoctorSidebar from "../../doctor_components/DoctorSidebar";

const DoctorLayout = () => {
  const { isAuthenticated } = useUserContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex">
      <Outlet />
    </div>
  );
};

export default DoctorLayout;
