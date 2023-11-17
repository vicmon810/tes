import React, { useState } from "react";
import Modal from "react-modal";

function Display() {
  const properties = [
    // ... your properties
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePropertyClick = (property) => {
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
      <ul>
        {filteredProperties.map((property) => (
          <li key={property.id} onClick={() => handlePropertyClick(property)}>
            {property.name} - Located in {property.location}
          </li>
        ))}
      </ul>
      {selectedProperty && (
        <Modal
          isOpen={!!selectedProperty}
          onRequestClose={() => setSelectedProperty(null)}
        >
          <h2>{selectedProperty.name}</h2>
          <p>Location: {selectedProperty.location}</p>
          {/* More details here */}
        </Modal>
      )}
    </div>
  );
}

export default Display;
