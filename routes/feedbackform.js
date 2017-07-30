var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Feedback = require('../models/feedback');

router.post('/insert', function (req,res){

	var feedback = new Feedback(req.body);

	feedback.save(function(err, doc){
		if (err) throw err;

		res.redirect('/contact');
	});
	
})

module.exports = router;