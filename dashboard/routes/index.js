var express = require('express');
var router = express.Router();
var apiCall = ('../public/javascripts/apiCall.js');
var ApiCall = new apiCall();

/* GET home page. */
router.get('/', function(req, res) {
  ApiCall.getRequest(function () {
    res.render('index', { title: 'Express'});
  })
});

module.exports = router;
