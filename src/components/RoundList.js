import React from 'react';
import { connect } from 'react-redux';
import RoundListItem from './RoundListItem';

const RoundList = props => {
  const { rounds } = props;

  return (
    <div className="container">
      <h3>Showing {rounds.length} {rounds.length === 1 ? 'Round' : 'Rounds'}</h3>
      {rounds.length !== 0 && rounds.map(round => (<RoundListItem key={round.id} {...round} />))}
    </div>
  );
};

const mapStateToProps = state => ({
  rounds: state.golf
});

export default connect(mapStateToProps)(RoundList);
