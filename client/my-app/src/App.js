import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PropertyList from "./components/PropertyList";
import Navbar from "./components/navbar";
import Test from "./components/other";
import Page3 from "./components/page3";
function App() {
  // const [searchResult, setSearchResult] = useState("");
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/lists" element={<PropertyList />} />
          <Route path="/display" element={<Test />} />
          <Route path="/page3" element={<Page3 />} />
          {/* more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
