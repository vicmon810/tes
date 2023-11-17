document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data))
    .catch((error) => console.error("Error:", error));

  fetch("/api/properties")
    .then((response) => response.json())
    .then((data) => displayProperties(data))
    .catch((error) => console.error("Error:", error));
});

function displayUsers(users) {
  const usersDiv = document.getElementById("users");
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.textContent = `User ID: ${user.user_id}, Name: ${user.user_name}`;
    usersDiv.appendChild(userDiv);
  });
}

function displayProperties(properties) {
  const propertiesDiv = document.getElementById("properties");
  properties.forEach((property) => {
    const propertyDiv = document.createElement("div");
    propertyDiv.textContent = `Property ID: ${property.property_id}, Street: ${property.strees}, City: ${property.city}`;
    propertiesDiv.appendChild(propertyDiv);
  });
}
