import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;