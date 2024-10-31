var express = require('express');
var router = express.Router();
var concerts = require('./database.js')

/* GET users listing. */
router.get('/concerts', function(req, res, next) {
  res.status(200).json(concerts);
});

module.exports = router;