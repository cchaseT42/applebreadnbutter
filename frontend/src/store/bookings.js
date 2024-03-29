import { csrfFetch } from "./csrf"

const LOAD = 'bookings/getBookings'
const SPOTLOAD = 'bookings/getSpotBookings'
const CREATE = 'bookings/createBooking'
const DELETE = 'bookings/deleteBooking'
const UPDATE = 'bookings/update'

///////////////////////////////////////////////
const load = (bookings) => {
  return {
    type: LOAD,
    bookings
  }
}

////////////////////////////////////////////////
const spotLoad = (bookings) => {
  return {
    type: SPOTLOAD,
    bookings
  }
}
////////////////////////////////////////////////
const create = (booking) => {
  return {
    type: CREATE,
    booking
  }
}
/////////////////////////////////////////////////
const destroy = (booking) => {
  return {
    type: DELETE,
    booking
  }
}
////////////////////////////////////////////////
const update = (booking) => {
  return {
    type: UPDATE,
    booking
  }
}

////////////////////////////////////////////////

export const getBookings = () => async dispatch => {
  const response = await csrfFetch(`/api/bookings/current`)

  if (response.ok) {
    const bookings = await response.json()
    dispatch(load(bookings));
  }
}

//////////////////////////////////////////////////

export const getSpotBookings = (spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/bookings`)

  if (response.ok) {
    const bookings = await response.json()
    dispatch(spotLoad(bookings));
  }
}

//////////////////////////////////////////////////

export const deleteBooking = (bookingId) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${bookingId}`, {
    method: 'delete'
  })
    if (response.ok){
      dispatch(destroy(bookingId))
    }
}

//////////////////////////////////////////////////

export const createBooking = (data, spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const newBooking = await response.json()
  dispatch(create(newBooking))
  return newBooking
}

/////////////////////////////////////////////////

export const editBooking = (data, bookingId) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${Number(bookingId)}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const updatedBooking = await response.json()
  dispatch(update(updatedBooking))
  return updatedBooking
}

////////////////////////////////////////////////

let initialState = {}

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const newState = {}
      action.bookings.forEach(booking => {
        newState[booking.id] = booking
      });
      return newState
    }
    case SPOTLOAD: {
      let newState = {}
      let bookings = Object.values(action.bookings)
      bookings[0].forEach(booking => {
        newState[booking.id] = booking
      })
      return newState
    }
    case CREATE: {
      const newState = {...state, [action.booking.id]: action.booking}
      return newState
    }
    case DELETE: {
      const newState = {...state}
      delete newState[action.booking.id];
      return newState
    }
    case UPDATE: {
      const newState = {...state, [action.booking.id]: action.booking}
      return newState
    }

    default: return state;
  }
}

export default bookingsReducer
