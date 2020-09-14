import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import {LoginPage} from './login';
import AdminPage from './private/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact={true} path="/" component={LoginPage} />
        <ProtectedRoute exact={true} path="/admin" component={AdminPage} />
      </BrowserRouter>
    </div>
  );
}

export default App; 
