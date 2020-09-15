import React, {useState, useEffect} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import {LoginPage} from './login';
import Api from './apis'
import AdminPage from './private/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [ loggedInStatus, setLoggedInStatus ] = useState(false);
  const [ userLoggedIn, setUserLoggedIn ] = useState('noauth');
  const [ documentTitle, setDocumentTitle ] = useState('Login to App');

  useEffect(() => {
    if(loggedInStatus === true) {
      setDocumentTitle('Admin Page - myWallet');
      return;
    }
    else {
      setDocumentTitle('Login to App');
    }
    const u = Api.isAuthenticated();
    u.then(function (userresp) {
        if(userresp) {
          setDocumentTitle('Admin Page - myWallet');
          setLoggedInStatus(true);
          return setUserLoggedIn({user: userresp});
        }
        throw new Error('noauth');
    }).catch((e) => {
      setLoggedInStatus(false);
      setUserLoggedIn('noauth');
    });
  }, [loggedInStatus]);

  const onLogin = (data) => {
    setUserLoggedIn({user: data});
    return setLoggedInStatus(true);
  }

  const onLogout = (data) => {
    setUserLoggedIn('noauth');
    return setLoggedInStatus(false);
  }


  return (
      <div className="App">
          <Helmet>
              <title>{ documentTitle }</title>
          </Helmet>
          <Switch>
            <Route exact={true} path="/" render={(props) => {
              if(userLoggedIn && userLoggedIn.user) {
                return (<Redirect to={"/admin"}></Redirect>)
              }
              else 
                return (<LoginPage {...props} userLoggedIn={userLoggedIn} onLogin={onLogin} />)
            }}></Route> 
            <ProtectedRoute exact={true} path="/admin" component={AdminPage} onLogout={onLogout} />
          </Switch>
    </div>
  );
}

export default App; 
