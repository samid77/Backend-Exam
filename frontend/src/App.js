import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import DaftarNasabah from './components/DaftarNasabah';
import FormEdit from './components/FormEdit';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import Transfer from './components/Transfer';
import SetorTunai from './components/SetorTunai';

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
        <Route path="/setortunai" component={SetorTunai} />
        <Route path="/transfer" component={Transfer} />

      </div>
    );
  }
}

export default App;
