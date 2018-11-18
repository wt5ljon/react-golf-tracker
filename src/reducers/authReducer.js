const initState = {
  uid: null,
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        uid: action.uid
      }
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: action.error.message
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'LOGOUT':
      return {
        ...state,
        uid: null
      }
    case 'LOGOUT_SUCCESS':
      console.log('logout success');
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.error.message
      }
    default:
      return state;
  }
};

export default authReducer;
