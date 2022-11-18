const express = require('express');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];

// router.post(
//   '/',
//   async (req, res, next) => {
//     const { credential, password } = req.body;

//     const user = await User.login({ credential, password });

//     if (!user) {
//       const err = new Error('Login failed');
//       err.status = 401;
//       err.title = 'Login failed';
//       err.errors = ['The provided credentials were invalid.'];
//       return next(err);
//     }

//     await setTokenCookie(res, user);

//     return res.json({
//       user
//     });
//   }
// );

router.delete(
  '/',
  (req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);

router.get('/', restoreUser,  async (req, res) => {

  if (!req.user){
    return res.json({"user": null})
  }
    const { user } = req;
    if (user) {
      const currentUser = await User.findByPk(user.id, {
        attributes: ['id', 'firstName', 'lastName', 'email', 'username']
      })

      //console.log(user.id, currentUser)
      return res.json({"user": currentUser})
    } else return res.json({});
  }
);

router.post(
  '/',
  //validateLogin,
  async (req, res, next) => {
    const { credential, password } = req.body;

    let errors = {}

    if (!credential){
      errors.credential = "Email or username is required"
    }

    if (!password){
      errors.password = "Password is required"
    }

    const errSize = Object.keys(errors).length

    if (errSize){
      const err = new Error('Login failed');
      err.status = 400;
      err.title = 'Login failed';
      err.message = 'Validation error';
      return res.json({
        message: err.message,
        statusCode: 400,
        errors
      })
    }

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.message = 'Invalid credentials';
      return res.json({
        message: err.message,
        statusCode: 401
      })
    }

    const newUser = await User.findByPk(user.id, {
      attributes: ['id', 'firstName', 'lastName', 'email', 'username']
    })

    await setTokenCookie(res, user);

    return res.json({
      "user": newUser
    });
  }
);


module.exports = router;
