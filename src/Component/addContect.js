import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddContect = ({ addContactHandler }) => {
  const [Contact, setContact] = useState({ name: "", email: "" });
  const add = () => {
    if (Contact.name === "" || Contact.email === "") {
      alert("All Filds are needed");
    } else {
      addContactHandler(Contact);
      setContact({ name: "", email: "" });
    }
  };
  return (
    <>
      <form className="pt-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Enter the Name"
            value={Contact.name}
            onChange={(e) =>
              setContact((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter the Email"
            value={Contact.email}
            onChange={(e) =>
              setContact((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
        </div>
        <Link to="/">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={add}
          >
            Save
          </button>
        </Link>
      </form>
    </>
  );
};

export default AddContect;
