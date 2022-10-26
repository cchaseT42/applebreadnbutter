const express = require('express');
const { json } = require('sequelize');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage, Review, User, Booking } = require('../../db/models');
const spot = require('../../db/models/spot');

const router = express.Router();


router.get('/current', requireAuth, async (req, res) => {
  const { user } = req;
  const id = user.id

  const bookings = await Booking.findAll({
    where: {
      userId: id
    }
  })

  const bookingSpots = []
  for(let i = 0; i < bookings.length; i ++) {
    let booking = bookings[i].toJSON()
    let spot = await Spot.findByPk(booking.spotId, {
      attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
    })

    let images = await SpotImage.findAll({
      where: {
        spotId: spot.id,
      },
      attributes: ['id', 'spotId', 'url']
    })
    let jsonImages = images[0].toJSON()

    let jsonSpot = spot.toJSON()

    if (jsonImages){
      jsonSpot.previewImage = images[0].url
    }

    //console.log(jsonSpot)
    booking.Spot = jsonSpot
    console.log(booking)
    bookingSpots.push(booking)
  }

  res.json({'Bookings': bookingSpots})
})

module.exports = router;
