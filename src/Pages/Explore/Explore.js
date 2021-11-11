import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleExplore from '../SingleExplore/SingleExplore';

const Explore = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
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
                            services.map(service => <SingleExplore
                                key={service._id}
                                service={service}
                            ></SingleExplore>)
                        }
                    </div>
            }
        </div>
    </div>
    );
};

export default Explore;