import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { destroySpot, getOneSpot } from '../../store/spots';
import SpotReviews from '../SpotReviews/SpotReviews';

function SpotDetails() {

  let isOwner
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSpot(spotId));
  }, [dispatch])

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

  if (sessionUser)(
  isOwner = sessionUser.id === spot.ownerId
  )
  const isLoggedIn = sessionUser
  console.log(sessionUser)




  return (
    <div className="spotDetails">
      <h2>{spot.name}</h2>
      <img src={spot.SpotImages[0].url} alt='image'/>
      <h3>{spot.address}, {spot.city}, {spot.state}, {spot.avgRating}</h3>
      <h3>{spot.country}</h3>
      <h3>{spot.price}</h3>
      <p>{spot.description}</p>
      <div>
      {isOwner ? <button onClick={deleteSpot}>Delete Spot</button> : <></> }
      {isOwner ? <button onClick={updateSpot}>Edit Spot</button> : <></>}
      {(isLoggedIn && !isOwner) ? <button onClick={reroute}>Leave Review</button> : <></>}
      </div>
      <div>
      <SpotReviews/>
      </div>
    </div>
  )
}

export default SpotDetails
