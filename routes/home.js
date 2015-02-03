var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render('home/list', { title: 'Express' });
});

module.exports = router;
