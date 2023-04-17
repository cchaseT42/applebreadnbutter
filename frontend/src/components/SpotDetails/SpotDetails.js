import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { destroySpot, getOneSpot } from '../../store/spots';
import SpotReviews from '../SpotReviews/SpotReviews';
import { hasReview } from '../SpotReviews/SpotReviews'
import { getSpotBookings, createBooking, deleteBooking } from '../../store/bookings';
import { DatePicker } from 'react-widgets';
import { format, getDay } from "date-fns";
import BookingsModal from '../BookingsModal/BookingsModal';
import './SpotDetails.css'
import "react-widgets/styles.css";
import UpdateBookingModal from '../UpdateBookingModal';
import basketCover from '../../assets/basket.png'
import { pt } from 'date-fns/locale';


export let isOwner
function SpotDetails() {

  let isOwner
  const sessionUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.bookings)
  const bookingsArr = Object.values(bookings)
  const dispatch = useDispatch();
  const tomorrow = new Date()
  tomorrow.setDate(new Date().getDate() + 1)
  const [startDate, setStartDate] = useState(tomorrow)
  const week = new Date()
  week.setDate(new Date().getDate() + 7)
  const [endDate, setEndDate] = useState(week)
  const [errors, setErrors] = useState([])
  const error = []
  let hasBooking = false
  let ownedBookingId
  const bookedDatesArr = []

  bookingsArr.forEach(ele => {
    let booking = []
    let start = format(new Date(ele.startDate), "MM/dd/yyyy")
    let end = format(new Date(ele.endDate), "MM/dd/yyyy")
    booking.push(start)
    booking.push(end)
    bookedDatesArr.push(booking)
  })


  let daysmili = endDate.getTime() - startDate.getTime()
  let days = Math.ceil(daysmili / (1000 * 3600 * 24))



  useEffect(() => {
    dispatch(getOneSpot(spotId));
    dispatch(getSpotBookings(spotId))
  }, [dispatch])

  if (bookings && sessionUser){
 Object.values(bookings).forEach(ele => {
    let currDate = new Date()
    //checks to see if user has a booking,
    //and the dates of the booking have not passed yet.
    if (ele.userId == sessionUser.id && (currDate < new Date(ele.startDate) || currDate < new Date(ele.endDate))){
      hasBooking = true
      ownedBookingId = ele.id

    }
  })
}


  const history = useHistory()
  const { spotId } = useParams()
  const spot = useSelector(state => state.spots[spotId])
  if (!spot?.SpotImages) return null

  const deleteSpot = async (e) => {
    e.preventDefault();
    await dispatch(destroySpot(spotId))
    await history.push('/')
  }

  const reroute = async (e) => {
    e.preventDefault();
    await history.push(`/spots/${spotId}/create`)
  }

  const updateSpot = async (e) => {
    e.preventDefault();
    await history.push(`/edit/${spotId}`)
  }

  const newBooking = async (e) => {
    e.preventDefault();

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
      spotId: Number(spotId),
      userId: sessionUser.id,
      startDate,
      endDate
    }

    let createdBooking = await dispatch(createBooking(payload, spotId))
    await dispatch(getSpotBookings(spotId))
  }

  const destroyBooking = async (e) => {
    e.preventDefault()
    await dispatch(deleteBooking(ownedBookingId))
    await dispatch(getSpotBookings(spotId))
  }

  if (sessionUser)(
  isOwner = sessionUser.id === spot.ownerId
  )
  const isLoggedIn = sessionUser




  return (
    <div className="spotDetails">
      <h2 className = "SpotName">{spot.name}</h2>
      <div className="topinfo">
        <div className="locationAndReview">
          <div className="reviewavg">
        <i id = "star" className="fa-solid fa-star"></i> {spot.avgStarRating ?
        <h3 className="avgRatingSpot">{Number(spot.avgStarRating).toFixed(1)}</h3>
        :<h3 className="avgRatingSpot">0</h3>}
        <p id="reviewsTop">Reviews</p>
        </div>
        <div className="location">
      <h3>{spot.address}, {spot.city}, {spot.state}, {spot.country}</h3>
      </div>
        </div>
      <div className = "OwnerButtons">
      {isOwner ? <button id = "DeleteSpotButton" onClick={deleteSpot}>Delete listing</button> : <></> }
      {isOwner ? <button id = "UpdateSpotButton" onClick={updateSpot}>Update Information</button> : <></>}
      </div>
      </div>
      <img className= "SpotImage" src={spot.SpotImages[0].url} alt='image'/>
      <div className="lowerHalf">
      <div className="moreInfo">
        <div className="hostedby">
        <h3 className = "ownerName">Home Hosted by {spot.Owner.firstName}</h3>
        </div>
      {/* <h3 className = "SpotPrice">${spot.price} <span id="night">night</span></h3> */}
      <div className='fluff'>
        <div className="fluffDiv">
        <h3>Self check-in</h3>
        <p>Check yourself in with the keypad.</p>
        </div>
        <div className="fluffDiv">
        <h3>{spot.Owner.firstName} is a Superhost</h3>
        <p>Superhosts are experienced, highly rated hosts who are
          committed to providing great stays for guests.</p>
        </div>
        <div className="fluffDiv">
        <h3>Free cancellations</h3>
        </div>
      </div>
      <div className="fluff1">
        <img className="basketCover" src={basketCover}/>
        <p id="flavorText">Every booking includes free &#40;imaginary&#41; protection from Host cancellations,
           listing inaccuracies, and bad apples.</p>
      </div>
      <div className = "description">
        <div className="descContent">
      <p>{spot.description}</p>
        </div>
      </div>
      <div className = "fluff2">

      </div>
      </div>
      {( (!isOwner && sessionUser) && !hasBooking) &&
      <div className="createBookingDiv">
        <div className="bookingContent">
          <div className="totals">
            <p>${spot.price} night</p>
          </div>
        <ul className="errors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
        </ul>
        <label className="dateLabel">Start Date</label>
        <DatePicker
        min={tomorrow}
        defaultValue={startDate}
        value={startDate}
        onChange={startDate => setStartDate(startDate)}
        />
        <label className="dateLabel">End Date</label>
        <DatePicker
        min={tomorrow}
        defaultValue={endDate}
        value={endDate}
        onChange={endDate => setEndDate(endDate)}
        />
        <div className="reserveButtonDiv">
          <BookingsModal bookedDatesArr={bookedDatesArr}/>
          <div className="reserveDiv">
          <button id="reserveButton" onClick={newBooking}>Reserve</button>
          <p className="reserveP">You won't be charged yet</p>
          </div>
        </div>
        <div className="fees">
          <div className="totals">
            <p>${spot.price} X {days} nights</p>
            <p>${spot.price * days}</p>
          </div>
          <div className="totals">
            <p>Cleaning fee</p>
            <p>$100</p>
          </div>
          <div className="totals">
            <p>Service fee</p>
            <p>$100</p>
          </div>
        </div>
        <div className="total">
            <p>Total</p>
            <p>${spot.price * days + 200}</p>
          </div>
        </div>
        </div>
        }
          {(!isOwner && hasBooking) &&
          <div className="createBookingDiv">
            <div className="createdBookingDiv">
          <p id="bookedthis">You have booked this spot</p>
          <button id="cancelButton" onClick={destroyBooking}>Cancel Booking</button>
          <UpdateBookingModal bookingId={ownedBookingId}/>
          </div>
          </div>
          }
      </div>
      <div className="lower_div">
      <SpotReviews/>
      </div>
    </div>
  )
}

export default SpotDetails
