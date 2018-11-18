import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';

const IndexPage = (props) => {
  if (!props.authenticated) {
    return (
      <Redirect to='/login' />
    );
  }

  return (
      <div>
        <Navbar />
        <div className="container">
          <button className="btn">Add Round</button>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: !!state.uid
  }
};

export default connect(mapStateToProps)(IndexPage);
