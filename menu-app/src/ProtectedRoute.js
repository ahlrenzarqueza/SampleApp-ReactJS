import React, {useState, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Api from './apis';

const ProtectedRoute = ({component: Component, ...rest}) => {
    const [ userauth, setUserAuth ] = useState('ongoing');

    useEffect(() => {
        const u = Api.isAuthenticated();
        u.then(function (userresp) {
            if(userresp) setUserAuth({user: userresp});
            else setUserAuth('noauth');
        }).catch((e) => {
            setUserAuth('noauth');
        });
    }, []);

    const logOut = async (history) => {
        await Api.logout();
        rest.onLogout();
        history.push('/');
    }

    return (
        <Route {...rest} render={
            (props) => {
                if (userauth && userauth.user)
                    return <Component user={userauth.user} logOut={() => logOut(props.history)} 
                            {...props}></Component>
                else if(userauth === 'noauth') {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
                return;
            }
        }/>
    )
}

export default ProtectedRoute;
