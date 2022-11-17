import { csrfFetch } from "./csrf"

const LOAD = "reviews/getReviews"
const CREATE = "reviews/create"
const DELETE = "reviews/delete"

////////////////////////////////////////////

const load = (reviews) => {
  return {
    type: LOAD,
    reviews
  }
}

////////////////////////////////////////////

const create = (review) => {
  return {
    type: CREATE,
    review
  }
}

////////////////////////////////////////////

const destroy = (review) => {
  return {
    type: DELETE,
    review
  }
}

////////////////////////////////////////////

export const getReviews = (spotId) => async dispatch => {
  const response = await fetch(`/api/spots/${spotId}/reviews`)

  if (response.ok) {
    const reviews = await response.json()
    dispatch(load(reviews))
  }
}

/////////////////////////////////////////////

export const createReview = (payload, spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  const review = await response.json()
  dispatch(create(review))
  return review
}

////////////////////////////////////////////

export const destroyReview = (reviewId) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'delete'
  })
    if (response.ok){
      dispatch(destroy(reviewId))
    }
}

/////////////////////////////////////////////

let initialState = {}

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
   case LOAD: {
      const newState = {}
      action.reviews.Reviews.forEach(review => {
        newState[review.id] = review
      });
      return newState
    }
    case CREATE: {
      const newState = {...state, [action.review.id]: action.review}
      return newState
    }
    case DELETE: {
      const newState = {...state}
      delete newState[action.reviewId];
      return newState
    }
    default: return state;
  }
}

export default reviewsReducer
