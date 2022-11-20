import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { createSpot } from '../../store/spots'
import { Modal } from '../../context/Modal';
import { addImage } from '../../store/images'
import './createSpot.css'



function CreateSpot({setShowModal}){
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

const handleSubmit = async (e) => {
  e.preventDefault();

  let errs = []
  if (name === '') errs.push('Name is required')
  if (address === '') errs.push('Address is required.')
  if (city === '') errs.push('City is required.')
  if (country === '') errs.push('Country is requied.')
  if (state === '') errs.push ('State is required.')
  if (description === '') errs.push('Description is required.')
  if (price === '') errs.push('Price is required.')
  if (isNaN(price)) errs.push("Price must be a number")

  if (errs.length) return setErrors(errs)

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

  let newSpot = await dispatch(createSpot(payload))
  const spotId = await newSpot.id

  const imagePayload = {
    spotId: spotId,
    url: image,
    preview: true
  }

  let spotImage = await dispatch (addImage(imagePayload, spotId))
  await history.push(`/spots/${spotId}`)
};

// useEffect(() => {
//   let errs = []
//   if (name === '') errs.push('Name is required')
//   if (address === '') errs.push('Address is required.')
//   if (city === '') errs.push('City is required.')
//   if (country === '') errs.push('Country is requied.')
//   if (state === '') errs.push ('State is required.')
//   if (description === '') errs.push('Description is required.')
//   if (price === '') errs.push('Price is required.')
// })


  return (
    <div className = "createSpot">
      <form className = "createForm" onSubmit = {handleSubmit}>
        <ul className = "errors">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className = "inputDiv">
          <input id="inputName" placeholder='Name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            </div>
        <div className = "inputDiv">
          <input id="inputAddress" placeholder='Address'
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            />
            </div>
          <div className = "inputDiv">
          <input id="inputCity" placeholder='City'
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            />
            </div>
            <div className = "inputDiv">
          <input id="inputState" placeholder='State'
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            />
            </div>
            <div className = "inputDiv">
          <input id="inputCountry" placeholder='Country'
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            />
            </div>
            <div className = "inputDiv">
          <input id="inputDescription" placeholder='Description'
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            />
            </div>
            <div className = "inputDiv">
          <input id="inputPrice" placeholder='Price'
            type="integer"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            />
            </div>
            <div className = "inputDiv">
          <input id="imgInput" placeholder='Image Url'
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            />
            </div>
        <div>
          <button id="create" type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateSpot
