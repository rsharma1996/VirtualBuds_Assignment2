const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
 res.send('Register');
});

// Profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

// Authenticate
router.get('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

module.exports = router;
