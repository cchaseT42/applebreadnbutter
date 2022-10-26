const express = require('express');
const { json } = require('sequelize');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage, Review, User, Booking } = require('../../db/models');
const spot = require('../../db/models/spot');

const router = express.Router();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:bookingId', requireAuth, async (req, res) => {
  const { user } = req;
  const id = user.id

  const booking = await Booking.findByPk(req.params.bookingId)

  if(!booking){
    const err = new Error('Booking not found');
    err.message = "Booking couldn't be found.";
    res.statusCode = '404';
    return res.json({
      message: err.message,
      statusCode: 404
    })
  }

  if (booking.userId !== id) {
    const err = new Error('Forbidden');
    err.message = "Forbidden";
    res.statusCode = '403';
    return res.json({
      message: err.message,
      statusCode: 403
    })
  }

  const currentDate = new Date()

  if (currentDate > booking.startDate) {
    const err = new Error('Forbidden');
    err.message = "Bookings that have been started can't be deleted.";
    res.statusCode = '403';
    return res.json({
      message: err.message,
      statusCode: 403
    })
  }

  booking.destroy()

  res.json({
    message: "Successfully deleted",
    statusCode: 200
  })
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.put('/:bookingId', requireAuth, async (req, res) => {
  const { user } = req;
  const id = user.id

  const {startDate, endDate} = req.body

  const booking = await Booking.findByPk(req.params.bookingId)

  if(!booking){
    const err = new Error('Booking not found');
    err.message = "Booking couldn't be found.";
    res.statusCode = '404';
    return res.json({
      message: err.message,
      statusCode: 404
    })
  }

  const conflictingDate = await Booking.findAll({
    where: {
      spotId: booking.spotId,
      startDate: {
      [op.between]: [startDate, endDate]
      },
      endDate: {
        [op.between]: [startDate, endDate]
      }
    }
  })

  console.log(conflictingDate)

  if (booking.userId !== id) {
    const err = new Error('Forbidden');
    err.message = "Forbidden";
    res.statusCode = '403';
    return res.json({
      message: err.message,
      statusCode: 403
    })
  }

  const currentDate = new Date()

  if (currentDate > booking.endDate) {
    const err = new Error('Forbidden');
    err.message = "Past bookings can't be modified";
    res.statusCode = '403';
    return res.json({
      message: err.message,
      statusCode: 403
    })
  }

  if (startDate > endDate) {
    const err = new Error('Validation Error');
    err.message = "Validation Error";
    res.statusCode = '400';
    return res.json({
      message: err.message,
      statusCode: 400,
      errors: {
        endDate: "endDate cannot come before startDate"
      }
    })
  }

  if(conflictingDate.length){
    const err = new Error('Conflicting dates');
    err.message = "Sorry, this spot is already booked for the specified dates.",
    res.statusCode = '403'
    return res.json({
      message: err.message,
      statusCode: 403
    })

  }

  booking.update({
    startDate,
    endDate
  })

  await booking.validate()

  await booking.save

  return res.json(booking)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
