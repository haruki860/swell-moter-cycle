import { ReactDOM } from 'react';
import './App.css';
import Access from './components/access/Access';
import Blog from './components/blog/Blog';
import Gallery from './components/gallery/Gallery';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as  Router, Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/access" element={<Access />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
