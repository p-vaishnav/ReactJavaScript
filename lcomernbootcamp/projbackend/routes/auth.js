const express = require('express');
const router = express.Router();
const {signout,signup} = require('../controllers/auth');

//console.log(typeof signout);
console.log('Hey');
router.post('/signup',signup);
router.get('/signout',signout);

module.exports = router;