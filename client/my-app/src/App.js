import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PropertyList from "./components/PropertyList";
import Navbar from "./components/navbar";
import Page3 from "./components/page3";
import Search from "./components/search";
function App() {
  const [searchResult, setSearchResult] = useState("");
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/lists" element={<PropertyList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/page3" element={<Page3 />} />
          {/* more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
