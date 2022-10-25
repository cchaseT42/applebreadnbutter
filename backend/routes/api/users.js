const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

router.post(
  '/',
  validateSignup,
  async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;

    const usedEmail = await User.findOne({
      where:{
        email: email
      }
    })

    const usedUsername = await User.findOne({
      where:{
        username: username
      }
    })

    if (usedEmail){
      const err = new Error('Sign up failed');
      err.message = "User already exists";
      res.statusCode = 403
      return res.json({
        message: err.message,
        statusCode: 403,
        errors: {
          email: "User with that email already exists."
        }
      })
    }

    if (usedUsername){
      const err = new Error('Sign up failed');
      err.message = "User already exists";
      res.statusCode = 403
      return res.json({
        message: err.message,
        statusCode: 403,
        errors: {
          email: "User with that username already exists."
        }
      })
    }

    const user = await User.signup({ email, username, password, firstName, lastName });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }
);

module.exports = router;
