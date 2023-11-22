import React, { useState } from "react";
import Modal from "react-modal";

function Display() {
  const properties = [
    // ... your properties
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(properties); // Updated state

  const handleSearch = async (event) => {
    console.log("test");
    console.log(searchTerm);
    const searchInput = searchTerm;
    const response = await fetch(
      `http://localhost:8080/api/property/${searchInput}`
    );

    const Details = await response.json();
    console.log(Details.strees);
    setFilteredProperties(Details);
    console.log(filteredProperties[0].strees);
  };

  const handlePropertyClick = (property) => {
    console.log("test`");
    console.log(searchTerm);
    setSelectedProperty(property);
    // code to open modal
  };

  return (
    <div>
      <h1>Property List</h1>
      <input
        type="text"
        placeholder="Search properties..."
        style={{ margin: "10px 0", padding: "5px" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>{" "}
      {/* Updated */}
      <ul>
        {filteredProperties.map(
          (
            property // Use filteredProperties state
          ) => (
            <li key={property.id} onClick={() => handlePropertyClick(property)}>
              <div key={property.property_ID}>
                <li>
                  <strong>Property ID : {property.property_ID}</strong>
                  <br />
                  Address: {property.strees}
                  <br />
                  city: {property.city}
                  <br />
                  country: {property.country}
                  <br />
                  Price: {property.price}
                  <br />
                  Owner: {property.current_owner}
                  <br />
                  Date built: {property.date_build}
                </li>
              </div>
            </li>
          )
        )}
      </ul>
      {selectedProperty && (
        <Modal
          isOpen={!!selectedProperty}
          onRequestClose={() => setSelectedProperty(null)}
        >
          <h2>{selectedProperty.property_ID}</h2>
          <p>Location: {selectedProperty.strees}</p>
          <p>City: {selectedProperty.city}</p>
          <p>Country: {selectedProperty.country}</p>
          <p>Owner: {selectedProperty.current_owner}</p>
          {/* More details here */}
        </Modal>
      )}
    </div>
  );
}

export default Display;
