import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authAction';

const Navbar = ({authenticated, logout}) => (
  <div>
    <header>
      <nav className="nav-wrapper teal darken-4">
        <div className="container">
          <Link to="/" className="brand-logo">Golf Score Tracking</Link>
          <ul className="right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/" onClick={logout}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

const mapStateToProps = (state) => ({
  authenticated: !!state.auth.uid
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
