import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { destroySpot, getOneSpot } from '../../store/spots';
import SpotReviews from '../SpotReviews/SpotReviews';
import { hasReview } from '../SpotReviews/SpotReviews'
import { getSpotBookings, createBooking, getBookings } from '../../store/bookings';
import { Calendar, DatePicker } from 'react-widgets';
import './SpotDetails.css'
import "react-widgets/styles.css";


export let isOwner
function SpotDetails() {

  let isOwner
  const sessionUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.bookings)
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date())
  const week = new Date()
  week.setDate(new Date().getDate() + 7)
  const [endDate, setEndDate] = useState(week)

  let daysmili = endDate.getTime() - startDate.getTime()
  let days = Math.ceil(daysmili / (1000 * 3600 * 24))



  useEffect(() => {
    dispatch(getOneSpot(spotId));
    dispatch(getSpotBookings(spotId))
  }, [dispatch])

  console.log(bookings)
  console.log(startDate)

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

    const payload = {
      spotId: Number(spotId),
      userId: sessionUser.id,
      startDate,
      endDate
    }

    let createdBooking = await dispatch(createBooking(payload, spotId))
    await dispatch(getBookings)
  }

  if (sessionUser)(
  isOwner = sessionUser.id === spot.ownerId
  )
  const isLoggedIn = sessionUser




  return (
    <div className="spotDetails">
      <h2 className = "SpotName">{spot.name}
       <i className="fa-solid fa-star"></i> {spot.avgStarRating ?
        <span className="avgRatingSpot">{Number(spot.avgStarRating).toFixed(1)}</span>
        :<span className="avgRatingSpot">0</span>}</h2>
      <div className="topinfo">
      <h3 className ="location">{spot.address}, {spot.city}, {spot.state}, {spot.country}</h3>
      <div className = "OwnerButtons">
      {isOwner ? <button id = "DeleteSpotButton" onClick={deleteSpot}>Delete listing</button> : <></> }
      {isOwner ? <button id = "UpdateSpotButton" onClick={updateSpot}>Update Information</button> : <></>}
      </div>
      </div>
      <img className= "SpotImage" src={spot.SpotImages[0].url} alt='image'/>
      <h3 className = "ownerName">Hosted by {spot.Owner.firstName}</h3>
      <h3 className = "SpotPrice">${spot.price} <span id="night">night</span></h3>
      <div className = "description">
      <p>{spot.description}</p>
      </div>
      <div className="lower_div">
      <SpotReviews/>
      <div className="createBookingDiv">
        <DatePicker
        defaultValue={startDate}
        value={startDate}
        onChange={startDate => setStartDate(startDate)}
        />
        <DatePicker
        defaultValue={endDate}
        value={endDate}
        onChange={endDate => setEndDate(endDate)}
        />
        <div className="reserveButtonDiv">
          <button id="reserveButton" onClick={newBooking}>Reserve</button>
          <p className="reserveP">You won't be charged yet</p>
        </div>
        <div className="totals">
        <p>${spot.price} X {days} nights</p>
        <p>${spot.price * days}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SpotDetails
