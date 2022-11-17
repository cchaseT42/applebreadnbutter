import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams, useHistory } from 'react-router-dom'
import './SpotReviews.css'
import { getReviews } from "../../store/reviews";

function SpotReviews(){

  const dispatch = useDispatch()
  const reviews = useSelector(state => state.reviews)
  console.log("reviews GOT:", reviews)
  const { spotId } = useParams()

  const redirect = async (e) => {

  }

  useEffect(() => {
    dispatch(getReviews(spotId));
  }, [dispatch])

  return (
    <div className="reviewsBody">
      <div className = "reviews">
        {Object.values(reviews).map((review) => {
          if (!review?.User) return null
          return (
          <Link to={`/spots/${spotId}/review/${review.id}`}>
          <div key={review.id} className="reviewBody" onClick={redirect(review.id)}>
            <span className="user">{review.User.firstName}, {review.User.lastName}</span>
            <span className='review'>{review.review}</span>
            <span className='stars'>{review.stars}</span>
          </div>
          </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SpotReviews
