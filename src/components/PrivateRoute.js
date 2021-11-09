/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

import Cookies from "js-cookie";
import axios from "axios";

const API = process.env.API_URL || "http://localhost:1337";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated, loading, setLoading, setUser } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    const tk = Cookies.get("token");

    if (!tk) {
      navigate("/login", { replace: true });
    } else if (!isAuthenticated) {
      axios
        .get(`${API}/users/me`, {
          headers: { Authorization: `Bearer ${tk}` },
        })
        .then((res) => res.data)
        .then((user) => {
          if (user) {
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
  }, []);

  if (loading) return <p>Loading.. </p>;

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
