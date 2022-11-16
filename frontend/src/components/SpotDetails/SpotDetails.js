import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { destroySpot, getSpots, getOneSpot } from '../../store/spots';

function SpotDetails() {

  const history = useHistory()
  const dispatch = useDispatch();
  const { spotId } = useParams()
  const spots = useSelector(state => state.spots)
  const spot = Object.values(spots).find(spot => spot.id == spotId)
  let image = spot.SpotImages.find(spot => spot.id == spotId)

  console.log(spot)
  console.log(image)

  // console.log('spot', spots)



  useEffect(() => {
    dispatch(getOneSpot(spotId));
  }, [dispatch])

  // let destroy = () => {
  //   dispatch(destroySpot(spotId))
  //   history.push('/')
  // }

  // onClick={destroy()}

  return (
    <div className="spotDetails">
      <h2>{spot.name}</h2>
      <img src={''} alt='image'/>
      <h3>{spot.address}, {spot.city}, {spot.state}, {spot.avgRating}</h3>
      <h3>{spot.country}</h3>
      <h3>{spot.price}</h3>
      <p>{spot.description}</p>
      <button id='delete' type ='submit'>Delete Spot</button>
    </div>
  )
}

export default SpotDetails
