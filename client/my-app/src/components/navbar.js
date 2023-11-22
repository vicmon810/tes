import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({}) => {
  const navigate = useNavigate(); // Get the history object

  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option1");
  const handleSave = (event) => {
    try {
      const updateUrl = `http://localhost:8080/api/save`;
      fetch(updateUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success", data);
        });
    } catch (error) {
      console.log("Failed on:", error);
    }
  };
  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setSelectedValue(selected);
    // Use history.push() to navigate to different pages based on the selected value
    if (selected === "Property List") {
      navigate("/lists");
    } else if (selected === "Search Property") {
      navigate("/search");
    } else if (selected === "About US") {
      navigate("/page3");
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open Sans"
          rel="stylesheet"
        />
      </head>
      <a className="navbar-brand font-weight-bolder" href="/lists">
        <span className="">Property management</span>
      </a>
      <div>
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="Property List">Property List</option>
          <option value="Search Property">Search Property</option>
          <option value="About US">About US</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div id="navbarToggleExternalContent">
        <form>
          <button
            className="btn btn-outline-light" // Re-add your Bootstrap classes if needed
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label>
          {isChecked ? "Checkbox is checked" : "Checkbox is unchecked"}
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
