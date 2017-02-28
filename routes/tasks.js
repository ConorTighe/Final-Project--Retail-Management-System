var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Conor:conor@ds157829.mlab.com:57829/compstoredb', ['test']);

router.get('/test', function(req, res, next){
    db.test.find(function(err, test){
        if(err){
            res.send(err);
        }
        res.json(test);
    });
})

module.exports = router;