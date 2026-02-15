import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const AdminLayout = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`admin-wrapper ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="admin-main">
        <Sidebar />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminLayout;