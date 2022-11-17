import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";


function CreateReview (){
  const dispatch = useDispatch()
  const { spotId } = useParams()
  const [review, setReview] = useState("")
  const [stars, setStars] = useState("")
  let history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
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
      <form onSubmit = {handleSubmit}>
        <ul>
          {}
        </ul>
        <label>
        <input id="inputReview" placeholder = "review"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
        />
        </label>
        <label>
        <input id="inputStars" placeholder = "stars"
            type="text"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
        />
        </label>
        <div>
          <button id="create" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateReview
