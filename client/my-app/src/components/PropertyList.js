import React, { useEffect, useState } from "react";
import Modal from "react-modal";

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [error, setError] = useState(null);
  const [currentOwner, setCurrentOwner] = useState("");

  // Create state variables for editable fields and labels
  const [addressLabel, setAddressLabel] = useState("Address:");
  const [priceLabel, setPriceLabel] = useState("Price:");
  const [ownerLabel, setOwnerLabel] = useState("Owner:");

  useEffect(() => {
    // Fetch properties from your Express API
    console.log("test");
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setError(error);
      });
  }, []);

  const openEditModal = (property) => {
    setSelectedProperty(property);
    setCurrentOwner(property.current_owner);
  };

  const closeEditModal = () => {
    setSelectedProperty(null);
  };

  const handleCurrentOwnerChange = (e) => {
    setCurrentOwner(e.target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Property List</h1>
      <ul>
        {properties.map((property) => (
          <div key={property.property_ID}>
            <li>
              <strong>Property ID : {property.property_ID}</strong>
              <br />
              {addressLabel} {property.strees}
              <br />
              {priceLabel} {property.price}
              <br />
              {ownerLabel} {property.current_owner}
              <br />
              date build: {property.date_build}
            </li>
            <button onClick={() => openEditModal(property)}>Edit</button>
          </div>
        ))}
      </ul>

      <Modal
        isOpen={selectedProperty !== null}
        onRequestClose={closeEditModal}
        contentLabel="Edit Property"
      >
        {selectedProperty && (
          <div>
            <h2>Edit Property</h2>
            <form>
              <label>
                {addressLabel}
                <input
                  type="text"
                  value={selectedProperty.strees}
                  onChange={(e) => {
                    /* Handle address change */
                  }}
                />
              </label>
              <label>
                {priceLabel}
                <input
                  type="text"
                  value={selectedProperty.price}
                  onChange={(e) => {
                    /* Handle address change */
                  }}
                />
              </label>
              <label>
                {ownerLabel}
                <input
                  type="input"
                  value={selectedProperty.current_owner}
                  onChange={handleCurrentOwnerChange}
                />
              </label>
              <button onClick={closeEditModal}>Cancel</button>
              <button>Save</button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default PropertyList;
