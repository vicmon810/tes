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
  const [cityValue, setCity] = useState("");
  const [countryValue, setCountry] = useState("");
  const [p_ID, setID] = useState("");
  const [p_date, setDate] = useState("");
  useEffect(() => {
    // Replace with your actual API call
    fetch("http://localhost:8080/api/property")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setError(error);
      });
  }, []);

  const openEditModal = (property) => {
    setSelectedProperty(property);
    setEditAddress(property.strees);
    setCity(property.city);
    setCountry(property.country);
    setEditPrice(property.price);
    setEditOwner(property.current_owner);
    setID(property.property_ID);
    setDate(property.date_build);
  };

  const closeEditModal = () => {
    setSelectedProperty(null);
  };

  const handleSaveChanges = (event) => {
    event.preventDefault();

    // Define the API endpoint
    const updateUrl = `http://localhost:8080/api/property`;

    // Prepare the data to be sent
    const updated_data = {
      property_ID: p_ID, // Assuming this is the ID of the property to update
      strees: editAddress,
      city: cityValue,
      country: countryValue,
      date_build: p_date,
      current_owner: editOwner,
      price: editPrice,
    };
    fetch(updateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updated_data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    // Update the properties state
    setProperties((prevProperties) => {
      return prevProperties.map((property) => {
        if (property.property_ID === p_ID) {
          property.strees = editAddress;
          property.price = editPrice;
          property.current_owner = editOwner;
          return { ...property, ...updated_data };
        }
        return property; // Leave other properties unchanged
      });
    });

    closeEditModal();
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // console.log(properties);
  return (
    <div>
      <h1>Property List</h1>
      <ul>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {properties.map((property) => (
            <div
              key={property.property_ID}
              style={{ border: "1px solid #ccc", padding: "10px" }}
            >
              <div>
                <strong>Property ID:</strong> {property.property_ID}
              </div>
              <div>
                <strong>Address:</strong> {property.strees}
              </div>
              <div>
                <strong>City:</strong> {property.city}
              </div>
              <div>
                <strong>Country:</strong> {property.country}
              </div>
              <div>
                <strong>Price:</strong> {property.price}
              </div>
              <div>
                <strong>Owner:</strong> {property.current_owner}
              </div>
              <div>
                <strong>Date Built:</strong> {property.date_build}
              </div>
              <button>Connect Owner</button>
              <button>Mortgage Calculating</button>
              <button onClick={() => openEditModal(property)}>Edit</button>
            </div>
          ))}
        </div>
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
                City:
                <input type="readonly" value={cityValue} />
              </label>
              <br />
              <label>
                Country:
                <input type="readonly" value={countryValue} />
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
