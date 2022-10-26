const express = require('express');
const { json } = require('sequelize');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage, Review, Sequelize, User } = require('../../db/models');

const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/', async (req, res, next) => {
  const spots = await Spot.findAll()
  let updatedSpots = []
  for (let i = 0; i < spots.length; i++){
    let spot = spots[i].toJSON();
    //console.log(spot)
    const avgRating = await Review.findAll({
      raw: true,
      where: {spotId: spot.id},
      attributes: [[Sequelize.fn('AVG', Sequelize.col('stars')), 'avgRating']]
    })

    const previewImage = await SpotImage.findAll({
      raw: true,
      where: { preview: true, spotId: spot.id},
      attributes: ['url']
    })
    if (avgRating){
      spot.avgRating = avgRating[0].avgRating
    }
    // console.log(previewImage[0].url)
    if(previewImage.length){
      spot.previewImage = previewImage[0].url
    }

    updatedSpots.push(spot)

  }
  res.json({'Spots': updatedSpots})
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/current', restoreUser, async (req, res) => {
  const { user } = req;
  const id = user.id

  const userSpots = await Spot.findAll({
    where: {
      ownerId: id
    }
  })

  let updatedSpots = []
  for (let i = 0; i < userSpots.length; i++){
    let spot = userSpots[i].toJSON();
    //console.log(spot)
    const avgRating = await Review.findAll({
      raw: true,
      where: {spotId: spot.id},
      attributes: [[Sequelize.fn('AVG', Sequelize.col('stars')), 'avgRating']]
    })

    const previewImage = await SpotImage.findAll({
      raw: true,
      where: { preview: true, spotId: spot.id},
      attributes: ['url']
    })
    if (avgRating){
      spot.avgRating = avgRating[0].avgRating
    }
    // console.log(previewImage[0].url)
    if(previewImage.length){
      spot.previewImage = previewImage[0].url
    }

    updatedSpots.push(spot)

  }
  res.json({'Spots': updatedSpots})
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.put('/:spotId', requireAuth, async (req, res) =>{
  const { user } = req;
  const id = user.id
  const { address, city, state, country, lat, lng, name, description, price} = req.body

  let spot = await Spot.findByPk(req.params.spotId)
  if (!spot){
    const err = new Error('Search failed');
    err.message = "Spot couldn't be found.";
    res.statusCode = '404';
    return res.json({
      message: err.message,
      statusCode: 404
    })
}
  if (spot.ownerId !== id){
    const err = new Error('Search failed');
    err.message = "You are not authorized to do that.";
    res.statusCode = '403';
    return res.json({
      message: err.message,
      statusCode: 403
    })
  }
  console.log(spot)
  spot.set({
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price
  })

  await spot.save
  res.json(spot)

})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/:spotId', async (req, res) => { // <<<<<<< me while writing this route https://www.youtube.com/watch?v=wkR6zN1h2TI

let id = req.params.spotId
let spot = await Spot.findByPk(id)
console.log('get')
if (!spot){
  const err = new Error('Search failed');
  err.message = "Spot couldn't be found.";
  res.statusCode = '404';
  return res.json({
    message: err.message,
    statusCode: 404
  })
}

let ownerId = await Spot.findByPk(id, {
  attributes: ['ownerId']
})


let images = await SpotImage.findAll({
  where: {
    spotId: id,
  },
  attributes: ['id', 'spotId', 'url']
})


let jsonSpot = spot.toJSON()
let jsonImages = images[0].toJSON()
//console.log(jsonImages)


const owner = await User.findAll({
  raw: true,
  where: {id: ownerId.ownerId},
  attributes: ['id', 'firstName', 'lastName']
})

// const owner1 = owner[0]
// console.log(owner1.toJSON())

const numReviews = await Review.findAll({
  raw: true,
  where: {spotId: req.params.spotId},
  attributes: [[Sequelize.fn('COUNT', Sequelize.col('stars')), 'numReviews']]
})
const avgStarRating = await Review.findAll({
  raw: true,
  where: {spotId: req.params.spotId},
  attributes: [[Sequelize.fn('AVG', Sequelize.col('stars')), 'avgRating']]
})

if (numReviews){
  jsonSpot.numReviews = numReviews[0].numReviews
}
if (avgStarRating){
  jsonSpot.avgStarRating = avgStarRating[0].avgRating
}
if (jsonImages){
  jsonSpot.SpotImages = images
}
if(owner){
  jsonSpot.Owner = owner[0]
}


res.json(jsonSpot)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.delete('/:spotId', requireAuth, async (req, res) =>{
  const { user } = req;
  const id = user.id
  console.log(id)

  const spotDelete = await Spot.findByPk(req.params.spotId)

  if (!spotDelete) {
    res.statusCode = 404
    res.json({
      message: "Spot couldn't be found",
      statusCode: res.statusCode
    })
  }

  if (spotDelete.ownerId !== id){
    const err = new Error('Search failed');
    err.message = "You are not authorized to do that.";
    res.statusCode = '403';
    return res.json({
      message: err.message,
      statusCode: 403
    })
  }

  spotDelete.destroy()
    res.statusCode = 200
    res.json({
      message: "Successfully deleted",
      statusCode: res.statusCode
    })
})

module.exports = router;