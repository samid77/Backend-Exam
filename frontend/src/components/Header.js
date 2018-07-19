import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div>
            <header className="main-header">
                <a href="index.html" className="logo">
                    <span className="logo-mini">
                        <b id="brand">W</b>M
                    </span>
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg">
                        <b id="brand">Wise</b>Monkey
                    </span>
                </a>
                <nav className="navbar navbar-static-top" id="navBar">
                    {/* Sidebar toggle button*/}
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </a>
                    <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        {/* Notifications Menu */}
                        <li className="dropdown notifications-menu">
                            {/* Menu toggle button */}
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-bell-o" />
                                <span className="label label-warning">10</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 10 notifications</li>
                                    <li>
                                    {/* Inner Menu: contains the notifications */}
                                    <ul className="menu">
                                        <li>
                                            {/* start notification */}
                                            <a href="#">
                                                <i className="fa fa-users text-aqua" /> 5 new members joined today
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the page and may cause design problems
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-red" /> 5 new members joined
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-shopping-cart text-green" /> 25 sales made
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user text-red" /> You changed your username
                                            </a>
                                        </li>
                                        {/* end notification */}
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">View all</a>
                                </li>
                            </ul>
                        </li>
                        {/* User Account Menu */}
                        <li className="dropdown user user-menu">
                            {/* Menu Toggle Button */}
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                {/* The user image in the navbar*/}
                                <img src="dist/img/samid.png" className="user-image" alt="User Image" />
                                {/* hidden-xs hides the username on small devices so only the image appears. */}
                                <span className="hidden-xs">Dimas Septyanto</span>
                            </a>
                            <ul className="dropdown-menu">
                                {/* The user image in the menu */}
                                <li className="user-header">
                                    <img src="dist/img/samid.png" className="img-circle" alt="User Image" />
                                    <p>
                                        Dimas Septyanto
                                        <small>Member since Nov. 2012</small>
                                    </p>
                                </li>
                                {/* Menu Body */}
                                {/* Menu Footer*/}
                                <li className="user-footer">
                                    <div className="text-center">
                                        <a href="profile.html" className="btn btn-primary btn-flat" style={{marginTop: 10}}>
                                        <i className="fa fa-black-tie" /> Profile</a>&nbsp;
                                        <a href="login.html" className="btn btn-danger btn-flat" style={{marginTop: 10}}>
                                        <i className="fa fa-sign-out" /> Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>
            <aside className="main-sidebar">
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/samid.png" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Dimas Septyanto</p>
                            <a href="#">
                            <i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>
                    {/* search form */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input name="q" className="form-control" placeholder="Search..." type="text" />
                            <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                <i className="fa fa-search" />
                            </button>
                            </span>
                        </div>
                    </form>
                    {/* /.search form */}
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                            <Link to="/">
                                <i className="fa fa-dashboard" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-cubes" />
                                <span>Products</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li>
                                    <Link to="/productlist">
                                    <i className="fa fa-circle-o text-success" />Products List</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                            <i className="fa fa-tags" />
                            <span>Category</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right" />
                            </span>
                            </a>
                            <ul className="treeview-menu">
                                <li>
                                    <a href="listProduct.html">
                                    <i className="fa fa-circle-o text-success" />Category List</a>
                                </li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                            <i className="fa fa-user" />
                            <span>User Management</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right" />
                            </span>
                            </a>
                            <ul className="treeview-menu">
                            <li>
                                <a href="formProduct.html">
                                <i className="fa fa-circle-o text-success" />User List</a>
                            </li>
                            <li>
                                <a href="formProduct.html">
                                <i className="fa fa-circle-o text-success" />Invoice History</a>
                            </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        </div>
    )
  }
}
export default Header;
