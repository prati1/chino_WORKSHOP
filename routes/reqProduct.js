var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var upload = multer({dest: './uploads/'})

const Product = require('../models/product_req');

router.post('/insert', upload.single('image'), function (req,res){

	var product = new Product(req.body);

	product.save(function(err, doc){
		if (err) throw err;

		res.send(req.files);
		/*res.redirect('/indext');*/
	});
	
})

module.exports = router;