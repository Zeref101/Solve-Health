import { createContext, useState, useEffect, useContext } from "react";

export const AuthenticationContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthenticationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const jwtCookie = getCookie("jwt");

    if (jwtCookie) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const getCookie = (name) => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return null;
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(AuthenticationContext);
export default AuthenticationProvider;
