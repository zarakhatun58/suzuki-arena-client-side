import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/LogIn/LogIn';
import AddReview from './Pages/AddReview/AddReview';
import Booking from './Pages/Booking/Booking';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import PrivateRoute from './routes/PrivateRoute';
import UpdateStatus from './Pages/UpdateStatus/UpdateStatus';
import Register from './Pages/Register/Register';
import MyOrder from './Pages/MyOrder/MyOrder';
import Explore from './Pages/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Pay from './Pages/Dashboard/Pay/Pay';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Payment from './Pages/Payment/Payment';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/myOrder">
            <MyOrder/>
            </Route>
            <Route exact path="/explore">
            <Explore/>
            </Route>
            <Route exact path="/dashboard">
            <Dashboard/>
            </Route>
            <Route exact path="/pay">
            <Pay/>
            </Route>
            <Route exact path="/payment">
            <Payment/>
            </Route>
            <Route exact path="/AddReview">
              <AddReview />
            </Route>
            
            <PrivateRoute exact path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            
            
            <PrivateRoute exact path="/Booking/:id">
              <Booking />
            </PrivateRoute>
            
            <PrivateRoute exact path="/manageAllOrder">
              <ManageAllOrder />
            </PrivateRoute>
            
            <PrivateRoute exact path="/manageProduct">
              <ManageProduct />
            </PrivateRoute>
            <PrivateRoute exact path="/addProduct">
              <AddProduct />
            </PrivateRoute>
            
            <Route exact path="/update/:id">
              <UpdateStatus />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
         
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
