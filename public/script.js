document.getElementById("loadData").addEventListener("click", function () {
  fetch("http://localhost:3000/data") // Replace with your API endpoint
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("dataDisplay").innerText = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => console.error("Error:", error));
});
