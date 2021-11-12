import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../image/banner/banner1.jpg';
import banner2 from '../../image/banner/banner2.jpg';
import banner3 from '../../image/banner/banner3.jpg';
import banner5 from '../../image/banner/banner5.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>MARUTI SUZUKI ARENA SHOWROOM</h3>
                    <p className="w-50 mx-auto" >Welcome to our Showroom , here available all company's cars, alto, marcedes, </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>The Best Engine for maruti suzuki</h3>
                    <p>There are So Many Engines  imported from japan, south america, uk, france, russia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3>The Biggest Show room in your nearest Place</h3>
                <p className="w-50 mx-auto" >Select your favorite Cars from maruti suzuki showroom from kolkata west Bengal, New Market Nice Place</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner"
                    src={banner5}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3>The Biggest Show room in your nearest Place</h3>
                <p className="w-50 mx-auto" >Select your favorite Cars from maruti suzuki showroom from kolkata west Bengal, New Market Nice Place</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;