document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/properties")
    .then((response) => response.json())
    .then((data) => {
      createTable(data);
    })
    .catch((error) => console.error("Error:", error));
});

function createTable(data) {
  const container = document.getElementById("table-container");
  const table = document.createElement("table");
  table.setAttribute("border", "1");

  // Create table header
  const thead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  [
    "Property ID",
    "Street",
    "City",
    "Country",
    "Date Built",
    "Current Owner",
    "Price",
  ].forEach((headerText) => {
    let header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");
  data.forEach((item) => {
    let row = document.createElement("tr");
    Object.values(item).forEach((text) => {
      let cell = document.createElement("td");
      cell.textContent = text;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Append table to container
  container.innerHTML = ""; // Clear existing content
  container.appendChild(table);
}
