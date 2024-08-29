import About from "./About";
import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Product from './Product'
import Footer from './Footer/index';
import './App.css';

  function App() {
    return (
      <div>
        <Navbar />
        <Landing/>
        <Product/>
        <About/>
        <Footer/>
      </div>
    );
  }

export default App;
