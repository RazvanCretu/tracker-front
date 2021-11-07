import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const API = process.env.API_URL || "http://localhost:1337";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  const login = () => {
    axios
      .post(`${API}/auth/local`, {
        identifier: "test@testmail.com",
        password: "1234test",
      })
      .then((response) => response.data)
      .then((data) => {
        const { jwt, user } = data;
        if (jwt) {
          Cookies.set("token", jwt);
          setUser(user);
          navigate("/dashboard", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        logout,
        login,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
