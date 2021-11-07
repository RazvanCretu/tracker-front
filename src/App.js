import "./App.css";
import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import LogInPage from "./pages/LogIn";
import DashboardPage from "./pages/Dashboard";
import ReportsPage from "./pages/Reports";

import PrivateRoute from "./pages/components/PrivateRoute";

function PageNotFound() {
  return (
    <main style={{ padding: "1rem" }}>
      <p>404</p>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route path="/login" element={<LogInPage />} />
      <Route
        path="/dashboard"
        element={<PrivateRoute children={<DashboardPage />} />}
      />
      <Route
        path="/reports"
        element={<PrivateRoute children={<ReportsPage />} />}
      />
    </Routes>
  );
}

export default App;
