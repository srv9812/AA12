var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/aa12', function(req, res, next) {
	res.render('aa12', { title: 'Express App', 
		id: 'AA12', 
		name: 'KimHaein'});
});

module.exports = router;
