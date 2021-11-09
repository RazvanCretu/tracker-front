import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/PrivateRoute";

import LogInPage from "./pages/LogIn";
import DashboardPage from "./pages/Dashboard";
import ReportsPage from "./pages/Reports";
import PageNotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
