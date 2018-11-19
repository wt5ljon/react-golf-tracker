import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { startSignUp }  from '../actions/authAction';
import Navbar from './Navbar';

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('signup');
    this.props.signUp(this.state);
  };

  render() {
    const { uid, authError } = this.props;
    // if (uid) return <Redirect to='/' />
    
    return (
      <div>
        <Navbar />
        <div className="container form">
          <div className="card">
            <div className="card-content">
              <form onSubmit={this.handleSubmit} className="white">
                <span className="card-title grey-text text-darken-4">Sign Up</span>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" id="confirmPassword" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button type="submit" className="btn pink lighten-1 z-depth-0">Create Account</button>
                  <div className="red-text center">
                    { authError ? <p>{authError}</p> : null}
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
    uid: state.auth.uid,
    authError: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(startSignUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
