import icon1 from '../../image/icons/icon1.png';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import carlogo from '../../image/icons/icon2.jpg';

import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="text-white pt-5 footer-section">
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 py-3 text-start">
                        
                        <div className="col">
                        <img style={{height:"150px"}} src={carlogo} alt="" />
                            {/* <h5>Quick Links</h5>
                            <p>Home</p>
                            <p>Term</p>
                            <p>Prvacy & Policy</p>
                            <p>Blog</p>
                            <p>Contact Us</p> */}
                        </div>
                        <div className="col">
                            <h5>CORPORATE</h5>
                            <p>About Us</p>
                            <p>Investors</p>
                            <p>Careers</p>
                            <p>Media</p>
                            <p>Reach Us</p>
                        </div>
                        <div className="col">
                            <h5>MORE FROM US</h5>
                            <p>Maruti Suzuki Driving School</p>
                            <p>Maruti Suzuki Smart Finance</p>
                            <p> Accessories</p>
                            <p>Terms & Condition</p>
                            <p>Institutional Customer</p>
                            <p>Tour Guid</p>
                        </div>
                        
                        <div className="col">
                            <img className="mb-3" width="100" height="50px" src={icon1} alt="" />
                            <div className="fs-1">
                            <h6>18001021800</h6>
                            <h6>contact@maruti.co.in</h6>
                                <FaFacebookSquare />
                                <span className="mx-4"><FaInstagramSquare /></span>
                                <FaWhatsappSquare />
                            </div>
                            <p className="mt-3">
                                Copyright &copy; 2021 | All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;