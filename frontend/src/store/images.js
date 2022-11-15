import { csrfFetch } from "./csrf"

const CREATE = '/spots/createImage'


const create = (image) => {
  return {
    type: CREATE,
    image
  }
}

export const addImage = (imagePayload, spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/images`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(imagePayload)
  })
  const resImage = await response.json()
  dispatch(create(resImage))
  return resImage
}

let initialState = {}

const imageReducer = (state = initialState, action) => {
switch (action.type) {
  case CREATE:
    return {
      ...state,
      entries: {...state, [action.image.id]: action.image}
    }
    default: return state;
}
}
