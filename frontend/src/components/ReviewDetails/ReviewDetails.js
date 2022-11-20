import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { destroyReview, getReviews } from "../../store/reviews";

function ReviewDetails(){
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory()
  const dispatch = useDispatch()
  let isOwner
  useEffect(() => {
    dispatch(getReviews(spotId))
  }, [dispatch])
  const reviews = useSelector(state => state.reviews)
  const { spotId, reviewId } = useParams()
  const review = Object.values(reviews).find(review => {
    return review.id == reviewId})
  if (!review?.User) return null

  if (sessionUser) isOwner = sessionUser.id === review.userId

  const deleteReview = async (e) => {
    e.preventDefault();
    await dispatch(destroyReview(reviewId))
    await history.push(`/spots/${spotId}`)
  }

  return (
    <div className="reviewBody">
      <span className="user">{review.User.firstName}, {review.User.lastName}</span>
      <span className='review'>{review.review}</span>
      <span className='stars'>{review.stars}</span>
      {isOwner ? <button onClick={deleteReview}>Delete Review</button> : <></>}
    </div>
  )
}

export default ReviewDetails
