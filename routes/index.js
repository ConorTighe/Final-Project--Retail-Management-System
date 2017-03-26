var express = require('express');
var router = express.Router();
var Message = require('../models/message');
var Store = require('../models/stores');

router.get('/', function (req, res, next) {
    res.render('index.html');
});

router.get('/messages', function(req, res, next) {
    Message.find(function(err, messages) {
        console.log(messages);
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

router.get('/store', function(req, res, next) {
    Store.find(function(err, stores) {
        console.log(stores);
        console.log("got here 2!");
        if (err) {
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json({
            data: stores
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
    console.log(message);
    message.save(function(err, result) {
        if (err) {
            console.log("ERROR");
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

//DELETE a Blob by ID
router.delete('/messagedelete', function (req, res){
    console.log("DELETE REACHED");
    Message.findById(req.id, function (err, target) {
        if (err) {
            return console.error(err);
        } else {
            //remove it from Mongo
            target.remove(function (err, target) {
                if (err) {
                    return console.error(err);
                } else {
                    //Returning success messages saying it was deleted
                    console.log('DELETE removing ID: ' + target._id);
                    res.format({
                        //HTML returns us back to the main page, or you can create a success page
                          html: function(){
                               res.redirect("/employees");
                         },
                         //JSON returns the item with the message that is has been deleted
                        json: function(){
                               res.json({message : 'deleted',
                                   item : target
                               });
                         }
                      });
                }
            });
        }
    });
});

module.exports = router;