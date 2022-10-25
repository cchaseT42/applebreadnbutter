const express = require('express');
const { Spot, SpotImage, Review, Sequelize } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const spots = await Spot.findAll()
  let updatedSpots = []
  for (let i = 0; i < spots.length; i++){
    let spot = spots[i].toJSON();
    console.log(spot)
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

module.exports = router;
