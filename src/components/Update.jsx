import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Load data from localStorage
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  // Validation
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

  // Update API
  const handleUpdate = (e) => {
    e.preventDefault();

    if (validate()) {
        setLoading(true);

        axios
        .put(`https://69905695dcc9a4df204c6fb8.mockapi.io/react-crud/${id}`, {
            name,
            email,
        })
        .then(() => {
            toast.success("User Updated Successfully 🎉");
            setTimeout(() => navigate("/read"), 2000);
        })
        .catch(() => {
            toast.error("Update Failed ❌");
        })
        .finally(() => {
            setLoading(false);
        });
    }
    };

  return (
   <div className="card shadow p-4" style={{ maxWidth: "1200px" }}>
    <h3 className="mb-4">Update User</h3>

        <form onSubmit={handleUpdate}>
            {/* Name */}
            <div className="mb-3">
            <label className="form-label">Name</label>
            <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={name || ""}
                onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" });
                }}
            />
            {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
            )}
            </div>

            {/* Email */}
            <div className="mb-3">
            <label className="form-label">Email</label>
            <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={email || ""}
                onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
                }}
            />
            {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
            )}
            </div>

            <button
            type="submit"
            className="btn btn-primary mx-2"
            disabled={loading}
            >
            {loading ? (
                <>
                <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                ></span>
                Updating...
                </>
            ) : (
                "Update"
            )}
            </button>

            <Link to="/read">
            <button type="button" className="btn btn-secondary mx-2">
                Back
            </button>
            </Link>
        </form>
        </div>
    
  );
};

export default Update;