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
  let booking

  Object.values(bookings).forEach(ele => {
    if (ele.userId == sessionUser.id) booking = ele
  })


  const [startDate, setStartDate] = useState(new Date(booking.startDate))
  const [endDate, setEndDate] = useState(new Date(booking.endDate))

  const editBookingFunc = async (e) => {
    e.preventDefault();

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
      <div className="createBookingDiv">
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
