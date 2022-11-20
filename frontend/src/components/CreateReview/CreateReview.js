import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";
import './CreateReview.css'


function CreateReview (){
  const dispatch = useDispatch()
  const { spotId } = useParams()
  const [review, setReview] = useState("")
  const [stars, setStars] = useState("")
  const [errors, setErrors] = useState([])
  let history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let errs = []
    if(review === '') errs.push('Review is required')
    if(review.length < 20) errs.push('Review must be at least 20 characters in length')
    if(stars === '') errs.push('Stars are required')
    if(isNaN(stars) || (stars > 5 || stars < 1)) errs.push('Stars must be a number between 1 and 5')
    if (errs.length) return setErrors(errs)

    const payload = {
      review,
      stars
    }

    let newReview = await dispatch(createReview(payload, spotId))
    await history.push(`/spots/${spotId}`)
  }

  useEffect(() => {
    let errs = []
    if(review === '') errs.push('Review is required')
    if(stars === '') errs.push('Stars are required.')
  })


  return (
    <div className = "createReview">
      <form className = "createReviewForm" onSubmit = {handleSubmit}>
        <ul className = "errors">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className = "inputDiv">
        <input id="inputReview" placeholder = "review"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
        />
        </div>
        <div className = "inputDiv">
        <input id="inputStars" placeholder = "stars"
            type="text"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
        />
        </div>
        <div>
          <button id="create" type="submit">Create Review</button>
        </div>
      </form>
    </div>
  )
}

export default CreateReview
