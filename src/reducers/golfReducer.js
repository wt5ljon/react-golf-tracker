const initState = [];

const golfReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ROUND':
      return [
        ...state,
        action.round
      ]
    case 'REMOVE_ROUND':
      return state.filter((round) => round.id !== action.id);
    case 'SET_ROUNDS':
      return action.rounds;
    default:
      return state;
  }
};

export default golfReducer;
