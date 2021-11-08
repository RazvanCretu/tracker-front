import "./App.css";
import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./context/auth";

import LogInPage from "./pages/LogIn";
import DashboardPage from "./pages/Dashboard";
import ReportsPage from "./pages/Reports";
import PageNotFound from "./pages/NotFound";

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <>
      <nav>
        <ul>
          <li>
            {isAuthenticated ? (
              <button onClick={logout}>LogOut</button>
            ) : (
              <button onClick={login}>LogIn</button>
            )}
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/login" element={<LogInPage />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<DashboardPage />} />}
        />
        <Route
          path="/reports"
          element={<PrivateRoute element={<ReportsPage />} />}
        />
      </Routes>
    </>
  );
}

export default App;
