import React from 'react';
import { ButtonGroup, Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import icon1 from '../../image/icons/icon1.png'


const Header = () => {
    const { user, logOut} = useAuth();
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
                        <Nav.Link as={Link} className="text-dark" to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/dashboard">Dashboard</Nav.Link>
                        {/* <Nav.Link as={Link} className="text-dark" to="/AddReview">Add Review</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/myOrder">MyOrder</Nav.Link> */}
                       
                        
                        <Navbar.Text className="text-dark">
                            <span className="text-dark">{user?.displayName}</span>
                        </Navbar.Text> 
                       
                        { 
                         (!user?.email) ?
                         <div>
                         <Nav.Link as={Link} className="text-dark" to="/dashboard">
                       
                      

                   </Nav.Link> 
                   <Nav.Link as={Link} className="text-dark" to="/login">
                             <Button  variant="primary">Login</Button>
                         </Nav.Link> 
                         </div>
                   
                         :
                         <Link class="text-dark">
                         <Button onClick={()=>logOut()} variant="primary">Logout</Button>
                        
                         </Link>
                         
                        
                        
                        }
                        
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;