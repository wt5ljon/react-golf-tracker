import database, { firebase} from '../firebase/firebase';

export const login = uid => ({
  type: 'LOGIN',
  uid
});

export const startLogin = ({email, password}) => (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' });
  }).catch(error => {
    dispatch({ type: 'LOGIN_ERROR', error});
  });
};

export const signUp = (user) => {
  return {
    type: 'SIGNUP',
    payload: user
  };
};

export const startSignUp = ({email, password, firstName, lastName}) => () => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((auth) => {
    console.log('Sign Up Successful');
    console.log(auth.user.uid);
    return database.ref(`users/${auth.user.uid}`).set({
      email,
      userFirstName: firstName,
      userLastName: lastName
    })
  }).catch((error) => {
    console.log(error.code, error.message);
  });
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => (dispatch) => {
  firebase.auth().signOut()
  .then(() => {
    dispatch({ type: 'LOGOUT_SUCCESS'});
  });
}
