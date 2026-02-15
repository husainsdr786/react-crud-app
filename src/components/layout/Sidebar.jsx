import { NavLink } from "react-router-dom";
import { FaUserPlus, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h6 className="sidebar-title">MENU</h6>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" end className="sidebar-link">
            <FaUserPlus className="sidebar-icon" />
            <span> Create User</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/read" className="sidebar-link">
            <FaUsers className="sidebar-icon" />
            <span> User List</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;