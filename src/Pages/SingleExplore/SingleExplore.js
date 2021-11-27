import React from 'react';
import { Link } from 'react-router-dom';

const SingleExplore = ({service}) => {
    const {_id,name,price,description,img} = service;
    
    return (
        <div className="col-lg-4">
            <div className="card mb-3 single-service p-3">
                <img src={img} alt="" />
                <div className="d-flex justify-content-between my-3">
                     <h4 className="my-3 text-danger text-center">{name}</h4>
                </div>
                
                <h5 className=" text-success">Price: {price}</h5>
                <p className="text-justify">{description.slice(0,100)}</p>
                <div className="text-center">
                    <Link to={`/Booking/${_id}`}>
                        <button className="btn btn-primary text-center text-white mx-2">Buy Now</button>
                    </Link> 
                    <Link to={`/Booking/${_id}`}>
                        <button className="btn btn-success text-center text-white">Pay</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default SingleExplore;