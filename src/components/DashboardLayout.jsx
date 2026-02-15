import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ darkMode }) => {
  return (
    <div className="d-flex">
      <Sidebar darkMode={darkMode} />

      <div className="flex-grow-1 p-4">
        <Outlet />   {/* ❗ YE MUST HAI */}
      </div>
    </div>
  );
};

export default DashboardLayout;