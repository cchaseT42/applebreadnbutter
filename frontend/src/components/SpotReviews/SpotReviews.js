import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'
import './SpotReviews.css'
import SpotReviewsModal from './index'
import { destroyReview, getReviews } from "../../store/reviews";


function SpotReviews(){

  let isOwner
  let hasReview = false
  let reviewId
  const history = useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const isLoggedIn = sessionUser
  const reviews = useSelector(state => state.reviews)
  const { spotId } = useParams()
  const spot = useSelector(state => state.spots[spotId])
  let tooLong = 500

  if (sessionUser)(
    isOwner = sessionUser.id === spot.ownerId
    )
  if (sessionUser){
  isOwner = sessionUser.id === spot.ownerId
  let review = Object.values(reviews).find(review => review.userId === sessionUser.id)
  if (review) {
    reviewId = review.id
    hasReview = true
  }
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
            <div>
            {review.review.length > tooLong ? <p className='reviewReview'>{review.review}...</p> : <p className='reviewReview'>{review.review}</p>}
            {review.review.length > tooLong ? <SpotReviewsModal reviewId={review.id}/> : <></>}
            </div>
            {isOwner ? <button id="DeleteReviewButton" onClick={deleteReview}>Delete</button> : <></>}
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpotReviews
