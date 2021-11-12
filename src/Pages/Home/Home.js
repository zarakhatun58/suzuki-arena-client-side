import React from 'react';
import Banner from '../Banner/Banner';
import CarDisplayImage from '../CarDisplay/CarDisplayImage';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Review from '../Review/Review';



const Home = () => {
    return (
        <div id="#home">
             <Banner />
             <Products />
             <Review/>
             <CarDisplayImage/>
             <Contact/>
             <Footer/>
        </div>
    );
};

export default Home;