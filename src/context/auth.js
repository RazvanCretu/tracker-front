import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const API = process.env.API_URL || "http://localhost:1337";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();

    Cookies.remove("token");
    setUser(null);
    navigate("/login", { replace: true });
  };

  const login = async (e) => {
    e.preventDefault();

    const {
      data: { jwt, user },
    } = await axios.post(`${API}/auth/local`, {
      identifier: "test@testmail.com",
      password: "1234test",
    });

    if (jwt) {
      Cookies.set("token", jwt);
      setUser(user);
      navigate("/dashboard", { replace: true });
    }
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
