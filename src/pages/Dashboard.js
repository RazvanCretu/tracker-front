import { Outlet } from "react-router";

function DashboardPage() {
  return (
    <>
      <section>
        <h1>Dashboard</h1>
      </section>
      <Outlet />
    </>
  );
}

export default DashboardPage;
