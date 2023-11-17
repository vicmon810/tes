import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({}) => {
  const navigate = useNavigate(); // Get the history object

  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setSelectedValue(selected);
    // Use history.push() to navigate to different pages based on the selected value
    if (selected === "list") {
      navigate("/lists");
    } else if (selected === "display") {
      navigate("/display");
    } else if (selected === "option3") {
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
          <option value="list">Option 1</option>
          <option value="display">Option 2</option>
          <option value="option3">Option 3</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div id="navbarToggleExternalContent">
        <form className="d-flex">
          <button className="btn btn-outline-light" type="submit">
            Save
          </button>
          <button className="btn btn-outline-light" type="submit">
            Quit
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
