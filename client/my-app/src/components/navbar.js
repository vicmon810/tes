import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ setSearchResult }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [selectedValue, setSelectedValue] = useState("option1");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
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
          <option value="option1">Option 1</option>
          <option value="display">Option 2</option>
          <option value="option3">Option 3</option>
          {/* Add more options as needed */}
        </select>
        {selectedValue === "/display" && <link to="/display">page 1</link>}
      </div>
      <div id="navbarToggleExternalContent">
        <form className="d-flex">
          <button className="btn btn-outline-light" type="submit">
            Save
          </button>
          <button className="btn btn-outline-light" type="submit">
            quite
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

//See: https://johnotu.medium.com/how-to-toggle-bootstrap-navbar-collapse-button-in-react-without-jquery-1d5c2fb0751c
