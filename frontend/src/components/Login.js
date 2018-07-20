import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    redirect: false,
    status: <br />,
  }
  loginUser = (e) => {
    var self = this;
    axios.post('http://localhost:8002/loginuser', {
      rekening: e.rekening.value,
      kodepin: e.kodepin.value,
    }).then((response) => {
      console.log(response.data);
      var serverResponse = response.data;
      if (serverResponse === 'login berhasil'){
          self.setState({
              redirect: true
          })
      }
      else if (serverResponse === 'login gagal'){
          self.setState({
              status: 'Username/Password yang Anda masukkan salah'
          })
      }
    });
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/daftarnasabah'/>
    }
  }
  render() {
    return (
      <div style={{backgroundColor: '#d6ffe5',paddingTop: '50px', paddingBottom: '250px'}}>
      {this.renderRedirect()}
        <div className="login-box">
          <div className="login-logo">
            <Link to="/daftarnasabah"><b>Vincent</b>BANK</Link>
          </div>
          {/* /.login-logo */}
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="" method="post">
              <div className="form-group has-feedback">
                <input type="text" ref="rekening" className="form-control" placeholder="Masukan nomor rekening anda" />
                <span className="fa fa-credit-card form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input type="password" ref="kodepin" className="form-control" placeholder="Masukan pin anda" />
                <span className="glyphicon glyphicon-lock form-control-feedback" />
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    
                  </div>
                </div>
                {/* /.col */}
                <div className="col-xs-4">
                </div>
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center">
              <button type="button" onClick={() => this.loginUser(this.refs)} className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-user" /> Login
              </button>
              <Link to="/adminlogin" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-key" /> Login untuk Admin</Link>
            </div>
            {/* /.social-auth-links */}
          </div>
          {/* /.login-box-body */}
        </div>
      </div>
    )
  }
}
export default Login;
