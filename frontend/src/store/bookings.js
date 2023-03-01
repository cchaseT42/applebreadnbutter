import { csrfFetch } from "./csrf"

const LOAD = "bookings/getBookings"
const CREATE = "bookings/createBooking"
const DELETE = "bookings/deleteBooking"
const UPDATE = "bookings/updateBooking"

const load = (bookings) => {
  return {
    type: LOAD,
    payload: bookings
  }
}

const create = (booking) => {
  return {
    type: CREATE,
    booking
  }
}

const destroy = (booking) => {
  return {
    type: DELETE,
    booking
  }
}

const update = (booking) => {
  return {
    type: UPDATE,
    booking
  }
}

export const getBookings = (spotId) => async dispatch => {
  const response = await fetch(`/api/spots/${spotId}/bookings`)
  if (response.ok){
  const gotBookings = await response.json()
  dispatch(load(gotBookings))
}
}

export const createBooking = (data, spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const createdBooking = await response.json()
  dispatch(create(createdBooking))
}

export const editBooking = (data, bookingId) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${bookingId}`, {
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

export const deleteBooking = (bookingId) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${bookingId}`,{
    method: 'delete'
  })
  if (response.ok){
    dispatch(destroy(bookingId))
  }
}


let initialState = {}

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD: {
    const newState = {}
    action.payload.Bookings.forEach(booking => {
      newState[booking.id] = booking
    });
    return newState
    }
    case CREATE: {
      const newState = {...state, [action.booking.id]: action.booking}
      return newState
    }
    case DELETE: {
      const newState = {...state}
      delete newState[action.bookingId];
      return newState
    }
    case UPDATE: {
      const newState = {...state, [action.booking.id]: action.booking}
      return newState
    }

    default: return state;
  }
};

export default bookingsReducer
