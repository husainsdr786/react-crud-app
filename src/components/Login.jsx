import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (loading) return;

    // Validation
    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!password) {
      toast.error("Password is required");
      return;
    }

    if (email !== "admin@gmail.com" || password !== "123456") {
      toast.error("Invalid credentials ❌");
      return;
    }

    // Start Loader
    setLoading(true);
    toast.success("Login Successful 🎉");

    localStorage.setItem("isAuth", "true");

    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
        <h3 className="mb-4">Admin Login</h3>

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;