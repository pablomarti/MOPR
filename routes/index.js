var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'IBVN', name: 'Mi Ofrenda para el Rey' });
});

module.exports = router;
