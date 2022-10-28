const express = require('express');
const { json } = require('sequelize');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage, Review, User, ReviewImage } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.delete('/:imageId', requireAuth, async (req, res) => {
  const { user } = req;
  const id = user.id

  const img = await ReviewImage.findByPk(req.params.imageId)

  if (!img) {
    const err = new Error('Image not found');
    err.message = "Review Image couldn't be found.";
    res.statusCode = '404';
    return res.json({
      message: err.message,
      statusCode: 404
    })
  }

  const review = await Review.findByPk(img.reviewId)

  if (review.userId !== id){
    const err = new Error('Forbidden');
    err.message = "Forbidden";
    res.statusCode = '403';
    return res.json({
      message: err.message,
      statusCode: 403
    })
  }

  img.destroy()

  res.json({
    message: "Successfully deleted",
    statusCode: 200
  })
})

module.exports = router;
