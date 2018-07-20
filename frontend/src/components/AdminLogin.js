import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AdminLogin extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#d6ffe5',paddingTop: '50px', paddingBottom: '200px'}}>
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html"><b>Vincent</b>BANK</a>
          </div>
          {/* /.login-logo */}
          <div className="login-box-body">
            <p className="login-box-msg">Masuk sebagai admin</p>
            <form action="" method="post">
              <div className="form-group has-feedback">
                <input type="email" className="form-control" placeholder="Email" />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password" />
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
              <Link to="/dashboard" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-user" /> Login
              </Link>
            </div>
            {/* /.social-auth-links */}
          </div>
          {/* /.login-box-body */}
        </div>
      </div>
    )
  }
}
export default AdminLogin;
