import React from 'react';
import { FaPhoneSquare,FaMapMarkerAlt,FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div class="container py4">
            <hr/>
            <h5 className="text-danger">BOOK SHOWROOM VISIT</h5>
            <h1 className="text-success">Please confirm your details</h1>
            <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-4 pt-3">
               
                <div class="col">
                    <h5 className="d-flex">
                        <span className="fs-2 me-3 text-success">
                            <FaMapMarkerAlt/>
                        </span>
                        <span>India, Kolkata, New Market</span>
                    </h5>
                    <h5 className="d-flex">
                        <span className="fs-2 me-3 text-success">
                            <FaPhoneSquare/>
                        </span>
                        <span>
                            <p>(+91) 800125035012</p>
                            <p>(+91) 18001021800</p>
                        </span>
                    </h5>
                    <h5 className="d-flex">
                        <span className="fs-2 me-3 text-warning">
                            <FaEnvelope/>
                        </span>
                        <span>
                            <p>contact@maruti.con.in</p>
                            <p>suzukiarena@maruti.co.in</p>
                        </span>
                    </h5>
              
                </div>
                <div class="col">
                    <form className="mb-3">
                        <input className="w-50 py-2 mt-1 " type="text" placeholder="Customer Name"/>
                        <input className="w-50 py-2 mt-1 " type="email" placeholder="Email"/>
                        <input className="w-50 py-2 mt-1 " type="text" placeholder="City"/>
                        <input className="w-50 py-2 mt-1" type="text" placeholder="Dealer Name"/>
                        
                        <textarea className="w-100 py-2 mt-1" type="text" placeholder="Models Details"/>
                        <button className=" btn btn-primary w-100 py-2 mt-1" type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;