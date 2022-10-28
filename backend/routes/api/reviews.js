const express = require('express');
const { json } = require('sequelize');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const { restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { Spot, SpotImage, Review, User, Booking, ReviewImage } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// const validateReview = [
//   check('review')
//   .exists({ checkFalsy: true})
//   .isString()
//   .withMessage("Review text is required"),
//   check('stars')
//   .exists({ checkFalsy: true})
//   .isInt()
//   .withMessage("Stars must be an integer from 1 to 5"),
//   handleValidationErrors
// ]

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
router.post('/:reviewId/images', requireAuth, async (req, res) => {
  const { user } = req;
  const id = user.id
  const { url } = req.body

  let review = await Review.findByPk(req.params.reviewId)

  if (!review){
    const err = new Error('Image adding failed.');
      err.message = "Review couldn't be found.";
      res.statusCode = '404';
      return res.json({
        message: err.message,
        statusCode: 404
      })
  }

  if (review.userId !== id){
    const err = new Error('Image adding failed.');
      err.message = "Forbidden";
      res.statusCode = '403';
      return res.json({
        message: err.message,
        statusCode: 403
      })
  }

  const imageCount = ReviewImage.findAll({
    where: {
      reviewId: review.id
    }
  })

  if (imageCount.length >= 10) {
    const err = new Error('Image adding failed.');
      err.message = "Maximum number of images for this resource was reached";
      res.statusCode = '403';
      return res.json({
        message: err.message,
        statusCode: 403
      })
  }

  const reviewImage = await ReviewImage.create({
    reviewId: review.id,
    url: url
  })

  const reviewImageToReturn = await ReviewImage.findByPk(reviewImage.id, {
    attributes: ['id', 'url']
  })

  res.json(reviewImageToReturn)
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:reviewId', requireAuth, async (req, res) => {
  const { user } = req;
  const id = user.id

  let review = await Review.findByPk(req.params.reviewId)

  if (!review){
    const err = new Error('Deletion failed.');
      err.message = "Review couldn't be found.";
      res.statusCode = '404';
      return res.json({
        message: err.message,
        statusCode: 404
      })
  }

  if (review.userId !== id){
    const err = new Error('Deletion failed.');
      err.message = "Forbidden";
      res.statusCode = '403';
      return res.json({
        message: err.message,
        statusCode: 403
      })
  }

  review.destroy();

  return res.json({
    message: "Successfully deleted",
    statusCode: 200
  })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.put('/:reviewId', requireAuth, async (req, res) => {
  const { user } = req;
  const id = user.id

  const { review, stars } = req.body

  let errors = {}

  if (!review || !(typeof review === 'string')) errors.review = "Review text is required"
  if (!stars || (Number.isNaN(stars)) ||(stars > 5 || stars < 1)) errors.stars = "Stars must be an integer from 1 to 5"

  const errSize = Object.keys(errors).length

    if (errSize){
      const err = new Error('Post Failed');
      err.status = 400;
      err.message = 'Validation error';
      return res.json({
        message: err.message,
        statusCode: 400,
        errors
      })
    }

  const reviewToEdit = await Review.findByPk(req.params.reviewId)

  if (!reviewToEdit){
    const err = new Error('Deletion failed.');
      err.message = "Review couldn't be found.";
      res.statusCode = '404';
      return res.json({
        message: err.message,
        statusCode: 404
      })
  }

  if (reviewToEdit.userId !== id){
    const err = new Error('Edit failed.');
      err.message = "Forbidden";
      res.statusCode = '403';
      return res.json({
        message: err.message,
        statusCode: 403
      })
  }

  reviewToEdit.update({
    review,
    stars
  })

  res.json(reviewToEdit)
})

module.exports = router;
