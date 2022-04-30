import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Slider from "./components/Slider/Slider.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Footer></Footer>
    </div>
  );
}

export default App;
