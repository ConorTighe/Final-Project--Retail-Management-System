var express = require('express');
var router = express.Router();
var Message = require('../models/employee');
var Stores = require('../models/stores');
var Products = require('../models/products');
const fs = require('fs');

router.get('/', function (req, res, next) {
    res.render('index.html');
});

router.get('/RMS/employees', function(req, res, next) {
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

router.get('/RMS/employees/:storeName', function(req, res, next) {
    var storeName = req.params.storeName;
    console.log(storeName);
    Message.find({storeName: storeName}, function (err, messages) {
        console.log(messages);
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json({
            data: messages
        });    
    });
});

router.get('/RMS/stores', function(req, res, next) {
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

router.get('/RMS/products', function(req, res, next) {
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

router.patch('/RMS/product/:qty', function (req, res) {
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

router.post('/RMS/employee', function(req, res, next) {
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.empId);
    console.log(req.body.num);
    console.log(req.body.job);
    console.log(req.body.storeName);
    console.log(req.body.email);
    
    var message = new Message({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        empId: req.body.empId,
        num: req.body.num,
        job: req.body.job,
        storeName: req.body.storeName,
        email: req.body.email
    });
    console.log(message);
    message.save(function(err, result) {
        if (err) {
            console.log(err);
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

router.post('/RMS/addproduct', function(req, res, next) {
    console.log(req.body.productName);
    console.log(req.body.qty);
    console.log(req.body.price);
    
    var product = new Products({
        productName: req.body.productName,
        qty: req.body.qty,
        price: req.body.price
    });
    
    product.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                product: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            product: 'Saved data successfully'
        });
    });
});

router.post('/RMS/store', function(req, res, next) {
   
    var store = new Stores({
        storeName: req.body.storeName,
        lat: req.body.lat,
        long: req.body.long
    });
    console.log(store);
    store.save(function(err, result) {
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

router.put('/RMS/employeeupdate/:empId', function (req, res) {
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

router.delete('/RMS/employeedelete/:empId', function (req, res) {
    
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