import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const jwtCookie = Cookies.get("jwt");

    if (jwtCookie) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/login");
    }
  }, [navigate]);

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, details, setDetails }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(AuthenticationContext);

export default AuthenticationProvider;
