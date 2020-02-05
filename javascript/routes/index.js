var express = require('express');
var router = express.Router();
var us_states = require('../us_state.js');

var request = require('../helpers/apiRequest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find My Election', states: us_states });
});

router.post('/search', request);

module.exports = router;
