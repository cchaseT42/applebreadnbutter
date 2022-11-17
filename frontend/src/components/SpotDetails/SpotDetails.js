import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { destroySpot, getOneSpot } from '../../store/spots';

function SpotDetails() {

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




  return (
    <div className="spotDetails">
      <h2>{spot.name}</h2>
      <img src={spot.SpotImages[0].url} alt='image'/>
      <h3>{spot.address}, {spot.city}, {spot.state}, {spot.avgRating}</h3>
      <h3>{spot.country}</h3>
      <h3>{spot.price}</h3>
      <p>{spot.description}</p>
      <button onClick={deleteSpot}>Delete Spot</button>
    </div>
  )
}

export default SpotDetails
