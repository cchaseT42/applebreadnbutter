import { csrfFetch } from "./csrf"

const LOAD = 'spots/getSpots'
const CREATE = 'spots/createSpot'
const DELETE = 'spots/deleteSpot'
const GET_ONE = 'spots/getOne'
////////////////////////////////////////////////////
const load = (spots) => {
  return {
    type: LOAD,
    payload: spots
  }
}
///////////////////////////////////////////////////////
const create = (spot) => {
  return {
    type: CREATE,
    spot
  }
}
///////////////////////////////////////////////////////
const destroy = (spot) => {
  return {
    type: DELETE,
    spot
  }
}
///////////////////////////////////////////////////////
const getOne = (spot) => {
  return {
    type: GET_ONE,
    spot
  }
}

///////////////////////////////////////////////////////
export const getSpots = () => async dispatch => {
  const response = await fetch(`/api/spots`)

  if (response.ok) {
    const spots = await response.json()
    dispatch(load(spots));
  }
}
////////////////////////////////////////////////////////
export const createSpot = (data) => async dispatch => {
    const response = await csrfFetch(`/api/spots`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  const spot = await response.json()
  dispatch(create(spot))
  return spot
}

////////////////////////////////////////////////////

export const getOneSpot = (spotId) => async dispatch => {
  const response = await fetch(`/api/spots/${spotId}`)

  if (response.ok) {
    const spot = await response.json()
    dispatch(getOne(spot))
    return
  }
}

////////////////////////////////////////////////////

export const destroySpot = (spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'delete'
  })

  if (response.ok) {
    const spots = await fetch(`/api/spots`)
    const updatedSpots = await spots.json()
    dispatch(load(updatedSpots))
  }
}

////////////////////////////////////////////////////

let initialState = {}

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD:
    const newState = {}
    action.payload.Spots.forEach(spot => {
      newState[spot.id] = spot
    });
    return {
      ...newState,
      ...state
    }
    case CREATE:
      return {
        ...state,
        entries: {...state, [action.spot.id]: action.spot}
      }
    case GET_ONE:
      newState[action.spot.id] = action.spot
    return {
      ...newState,
      ...state
    }

    default: return state;
  }
};

export default spotsReducer
