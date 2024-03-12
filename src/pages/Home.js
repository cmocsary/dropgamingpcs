import Slider from "../components/Slider/Slider.js"
import React from "react";
import Products from '../components/Products/Products.js'
import Categories from '../components/Categories/Categories.js'

const Home = () => {
    return ( 
        <>
        <Slider></Slider>
        <Products></Products>
        <Categories></Categories>
        <Contacto></Contacto>
        </>
        
     );
}
 
export default Home;