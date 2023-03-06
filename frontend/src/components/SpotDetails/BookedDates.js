import './BookedDates.css'

function BookedDates({bookedDatesArr}){
  let booked = bookedDatesArr
  return (
    <div className="booked">
      {booked.length &&
      <div>
      <p>Currently Booked For:</p>
    {booked.map((booking) => {
      {console.log(booking)}
      return (
      <li>
        <p>{booking[0]} - {booking[1]}</p>
      </li>
      )
    })}
    </div>}
    {!booked.length && <div>
      <p>No Current Bookings.</p>
      </div>}
    </div>
  )
}

export default BookedDates
