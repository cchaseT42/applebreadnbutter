import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { editSpot } from '../../store/spots';
import './editSpot.css'

const EditSpot = () => {
const dispatch = useDispatch();
const [address, setAddress] = useState("")
const [city, setCity] = useState("")
const [state, setState] = useState("")
const [country, setCountry] = useState("")
const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState("")
const [image, setImage] = useState("")
const [errors, setErrors] = useState([])
let history = useHistory()
const { spotId } = useParams()

const handleSubmit = async (e) => {
  e.preventDefault();
  let error = []
  if (isNaN(price)) error.push("Price must be a number")

  if (error.length) return setErrors(error)
  const payload = {
    address,
    city,
    state,
    country,
    lat: 77,
    lng: 38,
    name,
    description,
    price
  }

  let updatedSpot = await dispatch(editSpot(payload, spotId))
  await history.push(`/spots/${spotId}`)
}


  return (
  <div className = "editSpot">
    <form className = "editForm" onSubmit = {handleSubmit}>
      <ul>
      {errors.map((error, idx) => <li key={idx}>{error}</li>)}
     </ul>
     <div className = "inputDiv">
      <input id="inputName" placeholder='Name'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className = "inputDiv">
      <input id="inputAddress" placeholder='Address'
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        />
        </div>
        <div className = "inputDiv">
      <input id="inputCity" placeholder='City'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        </div>
        <div className = "inputDiv">
      <input id="inputState" placeholder='State'
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        />
        </div>
        <div className = "inputDiv">
      <input id="inputCountry" placeholder='Country'
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        />
        </div>
        <div className = "inputDiv">
      <input id="inputDescription" placeholder='Description'
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        </div>
        <div className = "inputDiv">
      <input id="inputPrice" placeholder='Price'
        type="integer"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
        </div>
        <div className = "inputDiv">
      <input id="imgInput" placeholder='Image Url'
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
        </div>
    <div>
      <button id="update" type="submit">Update</button>
    </div>
  </form>
</div>)
}

export default EditSpot
