
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleManageProduct from './SingleManageProduct';


const ManageProduct = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://arcane-river-42711.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [services])

  
    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h4 className="text-danger">Manage Products By  Maruti suzuki arena </h4>
                        </div>
                    </div>
                </div>
                {
                    services.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div className="row">
                    {
                        services.map(service => <SingleManageProduct
                        key={service._id}
                        service={service}
                        ></SingleManageProduct>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default ManageProduct;