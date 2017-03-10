var express = require('express');
var router = express.Router();
var mongo = require("mongodb");
var assert = require("assert");
var Message = require('../models/message');

var url = 'mongodb://localhost:27017/test';

router.get('/', function(req, res, next){
    res.render('index.html');
});

router.get('/messages', function(req, res, next) {
    Message.find(function(err, messages) {
        if (err) {
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json({
            data: messages
        });
    });
});

router.post('/message', function(req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

module.exports = router;