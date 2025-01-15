import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
 
function App() {
  return (
    <Router>
    <div className="App">
      {/* Add the Header outside Routes so it's displayed on all pages */}
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
         
        <Route path="/about" element={<About />} />
        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
