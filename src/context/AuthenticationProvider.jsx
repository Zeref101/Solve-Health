import { createContext, useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [details, setDetails] = useState(null);
  const [prescription1, setPrescription1] = useState(null);

  useEffect(() => {
    const storedDetails = localStorage.getItem("details");
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  }, [details]);

  useEffect(() => {
    const jwtCookie = Cookies.get("jwt");

    if (jwtCookie && details) {
      setIsAuthenticated(true);
      if (isFirstRender.current) {
        if (details.specialist) {
          navigate("/doctor/dashboard");
        } else if (details.registration_number) {
          navigate("/student/dashboard");
        }
      }
    } else {
      setIsAuthenticated(false);
      navigate("/login");
    }

    isFirstRender.current = false;
  }, [navigate, details]);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        details,
        setDetails,
        setPrescription1,
        prescription1,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useUserContext = () => useContext(AuthenticationContext);

export default AuthenticationProvider;
