var express = require('express');
var router = express.Router();

var multer = require('multer');
const e = require("express");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    var random = Math.random();
    cb(null,random + Date.now() + file.originalname);
  },
});

var upload = multer({ storage: storage, limits: {fileSize: 5*1024 }}).single('avatar');

var upload1 = multer({ storage: storage, limits: {fileSize: 2*1000000 }}).array('avatar', 5);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/profile', function(req, res ) {
  upload(reg,res, function (err){
    if (err){
      res.render('index', {
        title: err.message
      });
    }else {
      res.render('index',
          { title: 'Uploads thành công' +'Ktra thư mục uploads' });
    }
  })
});

router.post('/profilearray', function (req, res, next) {
  upload1(req,res,function (err) {
    if (err){
      res.render('index', {
        title: err.message
      });
    }else {
      res.render('index', {
        title: 'Upload thành công!!!!,' +
            ' kiểm tra thư mục uploads'
      });
    }
  })

});
module.exports = router;
