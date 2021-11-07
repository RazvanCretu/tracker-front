import Cookies from "js-cookie";
import axios from "axios";

import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const API = process.env.API_URL || "http://localhost:1337";

function PrivateRoute({ children }) {
  const { setLoading, setUser, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const tk = Cookies.get("token");
    if (!tk) {
      console.log("helloooo!");
      navigate("/login", { replace: true });
    } else {
      axios
        .get(`${API}/users/me`, {
          headers: { Authorization: `Bearer ${tk}` },
        })
        .then((res) => res.data)
        .then((user) => {
          if (user) {
            console.log(user);
            setUser(user);
            setLoading(false);
          } else {
            Cookies.remove("token");
            navigate("/login", { replace: true });
            setLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated]);

  console.log(isAuthenticated);

  return isAuthenticated && !loading ? (
    children
  ) : (
    <Navigate replace to="/login" />
  );
}

export default PrivateRoute;
