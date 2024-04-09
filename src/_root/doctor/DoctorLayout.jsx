import { useUserContext } from "../../context/AuthenticationProvider";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const DoctorLayout = () => {
  const { isAuthenticated } = useUserContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default DoctorLayout;
