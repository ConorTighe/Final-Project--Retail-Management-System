var express = require('express');
var router = express.Router();
var Message = require('../models/message');
var Stores = require('../models/stores');
var Products = require('../models/products');
const fs = require('fs');

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

router.get('/stores', function(req, res, next) {
    Stores.find(function(err, store) {
        console.log(store);
        console.log("got here 2!");
        if (err) {
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json({
            data: store
        });
    });
});

router.get('/products', function(req, res, next) {
    Products.find(function(err, prod) {
        console.log(prod);
        console.log("got here 2!");
        if (err) {
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json({
            data: prod
        });
    });
});

router.patch('/product/:qty', function (req, res) {
  console.log('PATCH request to homepage');
    var qty = req.params.qty;
    console.log(qty);
  Products.update({qty: qty}, function(err, values) {
        if (!err) {
            res.json("okay");
        } else {
            res.write("fail");
        }
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

router.put('/messageupdate/:empId', function (req, res) {
    var values = req.body;
    console.log(values);
    var empId = req.params.empId;
    console.log(empId);
    Message.update({empId: empId}, values, function(err, values) {
        if (!err) {
            res.json("okay");
        } else {
            res.write("fail");
        }
    });
})

router.delete('/messagedelete/:empId', function (req, res) {
    
  Message.remove({empId: req.params.empId}, function(err, message) {
      console.log(message.empId);
      console.log("got inside");
    if(err) { 
       return res.send({status: "200", response: "fail"});
    }else{
        console.log("it worked?");
    }
      
 }); 
});




module.exports = router;