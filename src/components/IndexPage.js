import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Navbar from './Navbar';
import RoundList from './RoundList';

const IndexPage = ({ authenticated, golf }) => {
  if (!authenticated) {
    return (
      <Redirect to='/login' />
    );
  }

  authenticated ? console.log('Logged In') : console.log('Not Logged In');
  console.log(golf);
  
  return (
      <div>
        <Navbar />
        <RoundList />
        <div className="container form">
          <Link to='/add' className="btn">Add Round</Link>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: !!state.auth.uid,
    golf: state.golf
  }
};

export default connect(mapStateToProps)(IndexPage);
