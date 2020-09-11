import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Api from './apis';

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={
            (props) => {
                if (Api.isAuthenticated())
                    return <Component {...props}></Component>
                else {
                    return <Redirect to={
                        "/"
                    } />
                }
            }
        }/>
    )
}

export default ProtectedRoute;
