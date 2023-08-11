import "./App.css";
import Home from "./pages/home/Home";
import Access from "./pages/access/Access";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./pages/gallery/Gallery";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/access" element={<Access />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </Router>
  )
};

export default App;
