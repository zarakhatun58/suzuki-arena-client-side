import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import icon1 from '../../image/icons/icon1.png'


const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="white" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={icon1} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle className="bg-dark"/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-dark" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/AddReview">Add Review</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/myOrder">MyOrder</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/manageBookings">AllBooking</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/dashboard">Dashboard</Nav.Link>
                        <Navbar.Text className="text-dark">
                            <a href="#login" className="text-dark">{user?.displayName}</a>
                        </Navbar.Text> 
                        {
                            (!user?.email) ?
                            <Nav.Link as={Link} className="text-dark" to="/login">
                                Login
                            </Nav.Link> 
                            :
                            <button onClick={logout} variant="light">Logout</button>
                        }
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;