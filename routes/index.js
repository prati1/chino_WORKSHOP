var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/try', function(req, res, next) {
  res.render('try');
});

router.get('/indext', function(req, res, next) {
  res.render('indext');
});

module.exports = router;
