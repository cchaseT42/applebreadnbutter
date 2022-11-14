import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getSpots } from '../../store/spots';



function PreviewAllSpots(){


  const dispatch = useDispatch();

  const spots = useSelector(state => state.spots)

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch])


  return (
    <div>
      <div className={'spots'}>
        {spots.map((spot) => {
          return (
            <div key={spot.id} className="spot" style={{ backgroundImage: `url('${spot.previewImage})`}}></div>
          )
        })}
      </div>
    </div>
  );


}

export default PreviewAllSpots
