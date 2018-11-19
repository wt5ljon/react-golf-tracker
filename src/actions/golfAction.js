import database from '../firebase/firebase';

export const addRound = (roundData) => (dispatch, getStore) => {
  const { auth } = getStore();
  database.ref(`users/${auth.uid}/rounds`).push(roundData)
    .then(() => {
      console.log('round added');
    })
};
