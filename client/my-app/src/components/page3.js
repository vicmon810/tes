import React from "react";

function AboutUs() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Us</h1>
      <p>
        Welcome to our property management application. We are dedicated to
        providing the best property solutions for our clients.
      </p>

      <h2>Our Mission</h2>
      <p>
        To simplify property management and rental processes through innovative
        technology, providing value and exceptional service to property owners
        and tenants alike.
      </p>

      <h2>Our Team</h2>
      <ul>
        <li>
          <strong>John Doe:</strong> CEO - Expert in real estate management.
        </li>
        <li>
          <strong>Jane Smith:</strong> CTO - Leading our tech innovations in
          property tech.
        </li>
        <li>
          <strong>Emily Johnson:</strong> Head of Customer Relations - Ensuring
          customer satisfaction and support.
        </li>
        {/* Add more team members as needed */}
      </ul>
    </div>
  );
}

export default AboutUs;
