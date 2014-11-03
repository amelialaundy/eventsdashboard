var express = require('express');
var router = express.Router();
var ApiCall = require('../public/javascripts/apiCall');
var apiCall = new ApiCall();
var apiResults;

/* GET home page. */
router.get('/', function(req, res) {
  apiCall.getRequest(function (results) {
    console.log(results)
    // var currentdate = new Date();
    res.render('index', { title: 'Dashboard', numEventsTriggered: results['numEventsTriggered'], numModulesExecuted: results['numModulesExecuted']);
  })
});


module.exports = router; 
  