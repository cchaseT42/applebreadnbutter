import {useSelector} from 'react-redux'
import { useState, useEffect} from 'react'
import './SpotReviews.css'

function SpotReview({setShowModal, reviewId}){

  const reviews = useSelector(state => state.reviews)
  let review

  Object.values(reviews).forEach(ele => {
    if (ele.id == reviewId) review = ele
  })

  return (
    <div className="reviewModal">
      <p className="userInfo">By: {review.User.firstName}, {review.User.lastName} <i class="fa-solid fa-star reviewStar"></i>{review.stars}</p>
      <p>{review.review}</p>
    </div>
  )
}

export default SpotReview
