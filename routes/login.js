var express = require('express');
var router = express.Router();
// var modelLogin = require("../model/login")
var mysql = require('mysql');
router.get('/', function (req, res, next) {
  
  res.render('form')
});

router.get('/getLogin', function (req, res, next) {
  getLoginPost(req, res, next)    
});
router.post('/post', function (req, res, next) {
  res.send("data submitted successfully")           
  });

router.all('/getPost', function (req, res, next) {
  console.log(req.body)
  if (req.body) {
    //do something
  } else {
    //do something else
  }
  
  console.log(req.body.pass)
  res.json({ "Name": req.body })
});

module.exports = router;