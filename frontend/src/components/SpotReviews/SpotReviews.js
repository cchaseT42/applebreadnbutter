import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'
import './SpotReviews.css'
import { destroyReview, getReviews } from "../../store/reviews";
function SpotReviews(){
  let hasReview = false
  let reviewId
  let isOwner
  const history = useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const isLoggedIn = sessionUser
  const reviews = useSelector(state => state.reviews)
  const { spotId } = useParams()


  let review = Object.values(reviews).find(review => review.userId === sessionUser.id)
  if (review) {
    reviewId = review.id
    hasReview = true
  }

  const deleteReview = async (e) => {
    e.preventDefault();
    await dispatch(destroyReview(reviewId))
    await dispatch(getReviews(spotId));
  }

  const reroute = async (e) => {
    e.preventDefault();
    await history.push(`/spots/${spotId}/create`)
  }



  useEffect(() => {
    dispatch(getReviews(spotId));
  }, [dispatch])


  return (
    <div className="reviewsBody">
      <div className = "buttons">
      {(isLoggedIn && ((!isOwner) && (!hasReview))) ? <button id="LeaveReviewButton" onClick={reroute}>Leave Review</button> : <></>}
      </div>
      <div className = "reviews">
        {Object.values(reviews).map((review) => {
          if (!review?.User) return null
          if (sessionUser){
            isOwner = sessionUser.id === review.userId
            if(Object.values(reviews).find(review => review.userId === sessionUser.id)) hasReview = true
            }
          return (
          <div key={review.id} className="reviewBody">
            <span className="userReview">{review.User.firstName}, {review.User.lastName} <i class="fa-solid fa-star reviewStar"></i>{review.stars}</span>
            <span className='reviewReview'>{review.review}</span>
            {isOwner ? <button id="DeleteReviewButton" onClick={deleteReview}>Delete Review</button> : <></>}
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpotReviews
