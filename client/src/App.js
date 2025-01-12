import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageCompressor from './pages/ImageCompression';
import TextConverter from './pages/TextConverter';
import QRCodeGenerator from './pages/QrGenratorPage';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/qr-code-generator' element={<QRCodeGenerator />}></Route>
        <Route path="/image-compressor" element={<ImageCompressor />}></Route>
        <Route path="/text-convertor" element={<TextConverter />}></Route>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
