import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import StatsCards from "./StatsCards";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  function getData() {
    axios
      .get("https://69905695dcc9a4df204c6fb8.mockapi.io/react-crud")
      .then((res) => {
        setData(res.data);
      });
  }

    const confirmDelete = () => {
    axios
        .delete(`https://69905695dcc9a4df204c6fb8.mockapi.io/react-crud/${deleteId}`)
        .then(() => {
        toast.success("User Deleted Successfully 🗑️");
        getData();
        setShowModal(false);
        })
        .catch(() => {
        toast.error("Delete Failed ❌");
        });
    };

    function handleDelete(id) {
        axios
        .delete(`https://69905695dcc9a4df204c6fb8.mockapi.io/react-crud/${id}`)
        .then(() => {
            getData();
        });
    }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (

    <>

    <StatsCards totalUsers={data.length} />
    <div className="card shadow border-0 mt-4">
      <div className="card-body">
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((eachData, index) => (
            <tr key={`${eachData.id}-${index}`}>
              <td>{eachData.id}</td>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>

              <td>
                <Link to="/update">
                  <button
            className="btn btn-success"
            onClick={() =>
            setToLocalStorage(
                eachData.id,
                eachData.name,
                eachData.email
            )
            }
        >
            Edit
        </button>
                </Link>
              </td>

              <td>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                    setDeleteId(eachData.id);
                    setShowModal(true);
                    }}
                    >
                    Delete
                    </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    
{showModal && (
  <div className="modal show fade d-block" tabIndex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirm Delete</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>

        <div className="modal-body">
          <p>Are you sure you want to delete this user?</p>
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>

          <button className="btn btn-danger" onClick={confirmDelete}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Read;