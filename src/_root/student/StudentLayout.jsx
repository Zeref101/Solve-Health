import { useUserContext } from "../../context/AuthenticationProvider";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import StudentAppbar from "../../student_components/StudentAppbar";
import "react-toastify/dist/ReactToastify.css";

const StudentLayout = () => {
  const { isAuthenticated } = useUserContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
      <StudentAppbar />
    </>
  );
};

export default StudentLayout;
