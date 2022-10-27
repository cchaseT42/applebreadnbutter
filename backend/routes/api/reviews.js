const express = require('express');
const { json } = require('sequelize');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage, Review, User, Booking, ReviewImage } = require('../../db/models');

const router = express.Router();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/current', requireAuth, async (req, res) => {
  const { user } = req;
  const id = user.id
  const reviewUser = await User.findByPk(id, {
    attributes: ['id', 'firstName', 'lastName']
  })

  let allReviews = []

  const reviews = await Review.findAll({
    where: {
      userId: id
    }
  })

  for(let i = 0; i < reviews.length; i++){

    //console.log('made it 1')
    let review = reviews[i].toJSON()

    review.User = reviewUser

    let spot = await Spot.findByPk(review.spotId, {
      attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
    })

    if (!spot){
      const err = new Error('Search failed');
      err.message = "Spot couldn't be found.";
      res.statusCode = '404';
      return res.json({
        message: err.message,
        statusCode: 404
      })
    }

    const previewImage = await SpotImage.findAll({
      raw: true,
      where: { preview: true, spotId: spot.id},
      attributes: ['url']
    })

    const reviewImages = await ReviewImage.findAll({
      where: {
        reviewId: review.id
      },
      attributes: ['id', 'url']
    })

    let reviewImagesArr = []

    for(let i = 0; i < reviewImages.length; i++){
      let reviewImage = reviewImages[i].toJSON()
      reviewImagesArr.push(reviewImage)
    }

    if(previewImage.length){
      spot.previewImage = previewImage[0].url
    }

    review.Spot = spot.toJSON()
    review.ReviewImages = reviewImagesArr
    allReviews.push(review)
  }

  res.json({'Reviews': allReviews})
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
