var express = require('express');

var db = require('../models');

var router = express.Router();

router.get('/', function(req, res) {
	db.burger.findAll().then(function(data) {
		var hbsObj = {
			burgers: data
		};
		res.render('index', hbsObj);
	});
});
router.post('/', function(req, res) {
	db.burger.create({
		burger_name: req.body.burger_name
	}).then(function() {
		res.redirect('/');
	});
});

router.put('/:id', function(req, res) {
	db.burger.update({
		devoured: req.body.devoured
	}, {
		where: { id: req.params.id}
	}).then(function() {
		res.redirect('/');
	});
});

module.exports = router;