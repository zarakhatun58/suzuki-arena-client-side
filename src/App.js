import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/LogIn/LogIn';
import AddReview from './Pages/AddReview/AddReview';
import Booking from './Pages/Booking/Booking';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import PrivateRoute from './routes/PrivateRoute';
import UpdateStatus from './Pages/UpdateStatus/UpdateStatus';
import Register from './Pages/Register/Register';
import MyOrder from './Pages/MyOrder/MyOrder';
import Explore from './Pages/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


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
            
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/myOrder">
            <MyOrder/>
            </Route>
            <Route path="/explore">
            <Explore/>
            </Route>
            <Route path="/dashboard">
            <Dashboard/>
            </Route>
            
            
            <PrivateRoute exact path="/AddReview">
              <AddReview />
            </PrivateRoute>
            <PrivateRoute exact path="/Booking/:id">
              <Booking />
            </PrivateRoute>
            
            <PrivateRoute exact path="/manageBookings">
              <ManageBookings />
            </PrivateRoute>
            <Route exact path="/update/:id">
              <UpdateStatus />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
