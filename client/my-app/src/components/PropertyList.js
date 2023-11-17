import React, { useEffect, useState } from "react";
import Modal from "react-modal";

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [error, setError] = useState(null);

  // State for editing fields
  const [editAddress, setEditAddress] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editOwner, setEditOwner] = useState("");

  useEffect(() => {
    // Replace with your actual API call
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
    setEditAddress(property.streets);
    setEditPrice(property.price);
    setEditOwner(property.current_owner);
  };

  const closeEditModal = () => {
    setSelectedProperty(null);
  };

  const handleSaveChanges = (event) => {
    event.preventDefault();
    // Update the property in your state
    const updatedProperties = properties.map((p) =>
      p.property_ID === selectedProperty.property_ID
        ? {
            ...p,
            streets: editAddress,
            price: editPrice,
            current_owner: editOwner,
          }
        : p
    );
    setProperties(updatedProperties);

    // Optionally, send updated data to your server here

    closeEditModal();
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(properties);
  return (
    <div>
      <h1>Property List</h1>
      <ul>
        {properties.map((property) => (
          <div key={property.property_ID}>
            <li>
              <strong>Property ID : {property.property_ID}</strong>
              <br />
              Address: {property.strees}
              <br />
              Price: {property.price}
              <br />
              Owner: {property.current_owner}
              <br />
              Date built: {property.date_build}
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
            <form onSubmit={handleSaveChanges}>
              <label>
                Address:
                <input
                  type="text"
                  value={editAddress}
                  onChange={(e) => setEditAddress(e.target.value)}
                />
              </label>
              <br />
              <label>
                Price:
                <input
                  type="text"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
              </label>
              <br />
              <label>
                Owner:
                <input
                  type="text"
                  value={editOwner}
                  onChange={(e) => setEditOwner(e.target.value)}
                />
              </label>
              <br />
              <button type="button" onClick={closeEditModal}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default PropertyList;
