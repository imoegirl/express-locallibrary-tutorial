var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.redirect('/catalog');
  // res.render('game', {title: 'Game Play'});
});

module.exports = router;
