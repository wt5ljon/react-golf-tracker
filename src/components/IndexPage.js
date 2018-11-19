import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Navbar from './Navbar';

const IndexPage = (props) => {
  // if (!props.authenticated) {
  //   return (
  //     <Redirect to='/login' />
  //   );
  // }

  return (
      <div>
        <Navbar />
        <div className="container form">
          <Link to='/add' className="btn">Add Round</Link>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: !!state.auth.uid
  }
};

export default connect(mapStateToProps)(IndexPage);
