import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PropertyList from "./components/PropertyList";
import Navbar from "./components/navbar";
import Display from "./components/other"; // Correct the import and component name to "Display"

function App() {
  const [searchResult, setSearchResult] = useState("");
  return (
    <div className="App">
      <Router>
        <Navbar setSearchResult={setSearchResult} />
        <Switch>
          <Route path="/display" component={Display} />{" "}
          {/* Correct the path and component */}
          <Route path="/" component={PropertyList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
