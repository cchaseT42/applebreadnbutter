const express = require('express');
const { json } = require('sequelize');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage, Review, User } = require('../../db/models');
const spot = require('../../db/models/spot');

const router = express.Router();

router.delete('/:imageId', requireAuth, async (req, res) => {
  const { user } = req;
  const id = user.id

  const img = await SpotImage.findByPk(req.params.imageId)

  if (!img) {
    const err = new Error('Image not found');
    err.message = "Spot Image couldn't be found.";
    res.statusCode = '404';
    return res.json({
      message: err.message,
      statusCode: 404
    })
  }
  const spot = await Spot.findByPk(img.spotId)

  if (spot.ownerId !== id){
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
