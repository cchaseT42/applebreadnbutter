import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const LOAD = 'spots/getSpots'

const load = (spots) => {
  return {
    type: LOAD,
    payload: spots
  }
}

export const getSpots = () => async dispatch => {
  const response = await fetch(`/api/spots`)

  if (response.ok) {
    const spots = await response.json()
    dispatch(load(spots));
  }
}


let initialState = []

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD:
    const newState = {}
    action.payload.forEach(spot => {
      newState[spot.id] = spot
    });
    return {
      ...newState,
      ...state
    }
    default: return state;
  }
};

export default spotsReducer
