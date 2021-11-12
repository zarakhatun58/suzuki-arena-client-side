import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://arcane-river-42711.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const slice= services.slice(0,6)


    return (
        <div className="add-Booking py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h4 className="text-danger"> Most Popular Suzuki Arena</h4>
                            <h3>MARUTI SUZUKI ARENA RECENT LAUNCH MODEL</h3>
                        </div>
                    </div>
                </div>
                {
                    services.length === 0 ?
                        <Spinner animation="Booking" />
                        :
                        <div className="row">
                            {
                                slice.map(service => <SingleProduct
                                    key={service._id}
                                    service={service}
                                ></SingleProduct>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Products;