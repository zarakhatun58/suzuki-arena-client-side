import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  Navbar,
  Container,
  Offcanvas,
  Button,
  Nav,
  Form,
  FormControl,
  ButtonToolbar,
  
} from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DashboardHome from "./../DashboardHome/DashboardHome";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AdminRoute from "./../AdminRoute/AdminRoute";
import AddProduct from "./../AddProduct/AddProduct";

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <ButtonToolbar />
      <Container />
      
      <Link to={`${url}`}>
        <Button color="inherit">Dashboard</Button>
      </Link>
     
      {admin && (
        <div>
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link to={`${url}/addProduct`}>
            <Button color="inherit">Add Product</Button>
          </Link>
          <Link to={`${url}/manageAllOrder`}>
            <Button color="inherit">Manage All Order</Button>
          </Link>
          <Link to={`${url}/manageProduct`}>
            <Button color="inherit">Manage Product</Button>
          </Link>
          
        </div>
      )}
      <ul>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <li button key={text}>
            <li>
              {index % 2 === 0 ? (
                <i class="fas fa-inbox"></i>
              ) : (
                <i class="far fa-envelope"></i>
              )}
            </li>
            <h4 style={{ color: "blue" }}> text</h4>
          </li>
        ))}
      </ul>
    </div>
  );

  const div = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            onClick={handleDrawerToggle}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              
                <Nav.Link as={Link} className="text-primary" to="/makeAdmin">
                  Make Admin<span><i class="fas fa-user-plus"></i></span>
                </Nav.Link>
                <Nav.Link as={Link} className="text-primary" to="/AddReview">
                  Add Review
                </Nav.Link>
               
                <Nav.Link as={Link} className="text-primary" to="/myOrder">
                  MyOrder
                </Nav.Link>
                <Nav.Link as={Link} className="text-primary" to="/pay">
                  Pay
                </Nav.Link>
                <Nav.Link as={Link} className="text-primary" to="/manageBookings">
                  manage booking
                </Nav.Link>

               
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div>
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute exact path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
        </Switch>
      </div>
    </>
  );
};

export default Dashboard;
