import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveRound } from '../actions/golfAction';

const RoundListItem = (props) => {
  const { id, course, removeRound } = props;
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <span className="card-title">{course}</span>
          <div>
          <button 
              className="btn btn-small" 
              onClick={() => {
                removeRound(id);
              }}
              >Edit Round
            </button>
            <button 
              className="btn btn-small" 
              onClick={() => {
                removeRound(id);
              }}
              >Remove Round
            </button>
          </div>
        </div> 
      </div>
    </div>     
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeRound: (id) => dispatch(startRemoveRound(id))
  };
};

export default connect(null, mapDispatchToProps)(RoundListItem);
