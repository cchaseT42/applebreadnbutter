import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { destroySpot, getOneSpot } from '../../store/spots';

function SpotDetails() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSpot(spotId));
    console.log('dispatched get one spot')
  }, [dispatch])

  const history = useHistory()
  const { spotId } = useParams()
  const spot = useSelector(state => state.spots[spotId])
  console.log('spots from spotDetail', spot)
  if (!spot?.SpotImages) return null




  return (
    <div className="spotDetails">
      <h2>{spot.name}</h2>
      <img src={spot.SpotImages[0].url} alt='image'/>
      <h3>{spot.address}, {spot.city}, {spot.state}, {spot.avgRating}</h3>
      <h3>{spot.country}</h3>
      <h3>{spot.price}</h3>
      <p>{spot.description}</p>
      <button id='delete' type ='submit'>Delete Spot</button>
    </div>
  )
}

export default SpotDetails
