import { Link } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="admin-header">
      <div className="header-left">
        <h5 className="logo">🚀 React Admin</h5>
      </div>

      <div className="header-right">
        <Link to="/read" className="header-link">
          Users
        </Link>

        <div className="form-check form-switch ms-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <button
          className="btn btn-sm btn-light ms-3"
          onClick={() => {
            localStorage.removeItem("isAuth");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
        
      </div>
    </header>
  );
};

export default Header;