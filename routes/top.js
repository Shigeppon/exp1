var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('top/index', { title: 'Express3' });
});

router.get('/list', function(req, res, next) {
  res.render('top/list', { title: 'Express' });
});

module.exports = router;
