import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { startAddRound } from '../actions/golfAction';
import Navbar from './Navbar';

class AddRoundPage extends Component {
  state = {
    course: '',
    tee: '',
    score: 0,
    rating: 0,
    slope: 0
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('add round');
    this.props.addRound(this.state);
  };

  render() {
    const { uid } = this.props;
    // if (!uid) return <Redirect to='/' />

    return (
      <div>
        <Navbar />
        <div className="container form">
          <div className="card">
            <div className="card-content">
              <form onSubmit={this.handleSubmit} className="white">
                <span className="card-title grey-text text-darken-4">Add Round</span>
                <div className="input-field">
                  <label htmlFor="course">Course</label>
                  <input type="text" id="course" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="tee">Tee Color</label>
                  <input type="text" id="tee" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="score">Score</label>
                  <input type="text" id="score" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="rating">Course Rating</label>
                  <input type="text" id="rating" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="slope">Course Slope</label>
                  <input type="text" id="slope" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button type="submit" className="btn pink lighten-1 z-depth-0">Add Round</button>
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
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRound: (round) => dispatch(startAddRound(round))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRoundPage);
