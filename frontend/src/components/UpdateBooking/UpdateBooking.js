import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { DatePicker } from 'react-widgets';
import { editBooking } from '../../store/bookings'
import './UpdateBookings.css'

function UpdateBooking({setShowModal, bookingId}) {

  const dispatch = useDispatch()
  const spot = useSelector(state => state.spots)
  const sessionUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.bookings)
  const tomorrow = new Date()
  tomorrow.setDate(new Date().getDate() + 1)
  const [errors, setErrors] = useState([])
  const error = []
  let booking

  Object.values(bookings).forEach(ele => {
    if (ele.userId == sessionUser.id) booking = ele
  })


  const [startDate, setStartDate] = useState(new Date(booking.startDate))
  const [endDate, setEndDate] = useState(new Date(booking.endDate))

  const editBookingFunc = async (e) => {
    e.preventDefault();

    if (startDate < tomorrow) error.push("Cannot book before tomorrow.")
    if (endDate < startDate) error.push("Cannot book end date before start date.")

    Object.values(bookings).forEach(ele => {
      if ((startDate > new Date(ele.startDate) && startDate < new Date(ele.endDate))
        || endDate > new Date(ele.startDate) && endDate < new Date(ele.endDate)
        )
        return error.push("This spot is already booked for the selected dates.")
    })

    if (error.length) return setErrors(error)
    if (!error.length) setErrors([])

    const payload = {
      startDate,
      endDate
    }

    let updatedBooking = await dispatch(editBooking(payload, booking.id))
    await setShowModal(false)
  }


  return (
    <div className="UpdateBooking">
      <div className="editText">
        <p id="updateText">Select new starting and end dates</p>
      </div>
      <ul className="errors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
        </ul>
      <div className="updateBookingDates">
        <label className="dateLabel">Start Date</label>
      <DatePicker
        min={new Date()}
        defaultValue={startDate}
        value={startDate}
        onChange={startDate => setStartDate(startDate)}
        />
        <label className="dateLabel">End Date</label>
        <DatePicker
        min={new Date()}
        defaultValue={endDate}
        value={endDate}
        onChange={endDate => setEndDate(endDate)}
        />
      </div>
      <div className="updateBookingDiv">
        <button id="updateBooking" onClick={editBookingFunc}>Update</button>
      </div>
    </div>
  )
}

export default UpdateBooking
