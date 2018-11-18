import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { startLogin } from '../actions/authAction';
import Navbar from './Navbar';

class LoginPage extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { authenticated, authError } = this.props;
    if (authenticated) {
      return (
        <Redirect to='/' />
      );
    }
    
    return (
      <div>
        <Navbar />
        <div className="container form">
          <div className="card z-depth-2">
            <div className="card-content">
              <form onSubmit={this.handleSubmit} className="white">
                <span className="card-title grey-text text-darken-4">Log In</span>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button type="submit" className="btn pink lighten-1 z-depth-0">Submit</button>
                  <div className="red-text center">
                    { authError ? <p>{authError}</p> : null }
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: !!state.uid,
    authError: state.authError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (newUser) => dispatch(startLogin(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
