const express = require('express');

const passport = require('passport');

const authController = require('./auth.controller');

const router = express.Router();

// routes
router.post('/login', authController.login);
router.get('/profile', passport.authenticate('jwt', { session: false }), authController.profile);

module.exports = router;
