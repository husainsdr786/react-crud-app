import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!name || !name.trim()) {
      newErrors.name = "Name is required";
      toast.error("Name is required");
    }

    if (!email || !email.trim()) {
      newErrors.email = "Email is required";
      toast.error("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      toast.error("Invalid email format");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;   // extra safety

    if (validate()) {
      setLoading(true);

      axios
        .post("https://69905695dcc9a4df204c6fb8.mockapi.io/react-crud", {
          name,
          email,
        })
        .then(() => {
          toast.success("User Created Successfully 🎉");
          setTimeout(() => navigate("/read"), 2000);
        })
        .catch(() => {
          toast.error("Something went wrong ❌");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="card shadow p-4" style={{ maxWidth: "1200px" }}>
          <h3 className="mb-4">Create User</h3>
    

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Saving...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
          </form>
        </div>
  );
};

export default Create;