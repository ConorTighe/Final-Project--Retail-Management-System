var express = require('express');
var router = express.Router();
var Message = require('../models/message');

router.get('/', function (req, res, next) {
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
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.empId);
    console.log(req.body.num);
    console.log(req.body.job);
    
    var message = new Message({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        empId: req.body.empId,
        num: req.body.num,
        job: req.body.job
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