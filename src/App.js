import React from "react";
import './App.css';
//Components
import Home from "./components/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Pictures from "./components/Pictures";


function App() {
  return (
    <div className="App" >
      <Header />
      <Hero />
      <Banner />
      <Home />
      <Pictures />
      <Banner />
      <Pictures />
      <Footer />
    </div>
  );

}

export default App;
