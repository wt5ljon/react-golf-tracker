const initState = {
  course : '',
  tee: '',
  score: 0,
  rating: 0,
  slope: 0
};

const golfReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...state,
        uid: action.uid
      }
    default:
      return state;
  }
};

export default golfReducer;
