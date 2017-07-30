var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/indext', function(req, res, next) {
  res.render('indext');
});


router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/login', function(req,res){

	res.render('login');
});
router.get('/home', function(req,res){

	res.render('home');
});
router.get('/product', function(req,res){

	res.render('product');
});
router.get('/about', function(req,res){

	res.render('about');
});

module.exports = router;
