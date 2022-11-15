import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { destroySpot } from '../../store/spots';

function SpotDetails() {

  const history = useHistory()
  const dispatch = useDispatch();

  const spots = useSelector(state => state.spots)
  console.log(spots)

  const { spotId } = useParams()
  const spot = spots.find(spot => spot.id === spotId)
  console.log(spot)

  let destroy = () => {
    dispatch(destroySpot(spotId))
    history.push('/')
  }


  return (
    <div className="spotDetails">
      <h1>Made it</h1>
      <h2>{spot.name}</h2>
      <img src={spot.previewImage} alt='image'/>
      <h3>{spot.address}, {spot.city}, {spot.state}</h3>
      <h3>{spot.country}</h3>
      <h3>{spot.price}</h3>
      <p>{spot.description}</p>
      <button id='delete' type ='submit' onClick={destroy()}>Delete Spot</button>
    </div>
  )
}

export default SpotDetails
