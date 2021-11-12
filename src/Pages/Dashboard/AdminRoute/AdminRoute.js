import React from 'react';
import { Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Redirect } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {

    const { user, admin, isLoading } = useAuth();
    
    if (isLoading) { return <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>} 
  
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;