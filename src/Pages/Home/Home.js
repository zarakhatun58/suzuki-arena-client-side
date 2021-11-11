import React from 'react';
import Banner from '../Banner/Banner';
import CarDisplayImage from '../CarDisplay/CarDisplayImage';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div id="#home">
             <Banner />
             <Products />
             <CarDisplayImage></CarDisplayImage>
             <Contact></Contact>
        </div>
    );
};

export default Home;