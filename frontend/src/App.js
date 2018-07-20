import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import DaftarNasabah from './components/DaftarNasabah';
import FormEdit from './components/FormEdit';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/adminlogin" component={AdminLogin}/>
        <Route path="/daftarnasabah" component={DaftarNasabah}/>
        <Route path="/editdata" component={FormEdit} />

      </div>
    );
  }
}

export default App;
