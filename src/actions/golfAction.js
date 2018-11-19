import database from '../firebase/firebase';

export const addRound = round => ({
  type: 'ADD_ROUND',
  round
});

export const startAddRound = (round) => (dispatch, getStore) => {
  const { auth } = getStore();
  database.ref(`users/${auth.uid}/rounds`).push(round)
    .then((ref) => {
      console.log('round added', ref.key);
      dispatch(addRound({
        id: ref.key,
        ...round
      }));
    })
};

export const setRounds = (rounds) => ({
  type: 'SET_ROUNDS',
  rounds
});

export const startSetRounds = () => (dispatch, getState) => {
  const { auth } = getState();
  return database.ref(`users/${auth.uid}/rounds`)
    .once('value')
    .then((snapshot) => {
      const rounds = [];
      snapshot.forEach((childSnapshot) => {
        rounds.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setRounds(rounds));
    });
};

export const removeRound = (id) => ({
  type: 'REMOVE_ROUND',
  id
});

export const startRemoveRound = (id) => (dispatch, getState) => {
  const { auth } = getState();
  return database.ref(`users/${auth.uid}/rounds/${id}`).remove().then(() => {
    dispatch(removeRound(id));
  });
};