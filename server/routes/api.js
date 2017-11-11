const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var request = require('request');
var cheerio = require('cheerio');
var Scraper = require ('images-scraper')
  , google = new Scraper.Google();

req = request.defaults({
	jar: true,                 // save cookies to jar
	rejectUnauthorized: false, 
	followAllRedirects: true   // allow redirections
});

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    google.list({
        keyword: 'abstract images',
        num: 15,
        detail: true,
        nightmare: {
            show: true
        }
    })
    .then(function (res) {
        console.log('first 10 results from google', res);
    }).catch(function(err) {
        console.log('err', err);
    });
     
    // you can also watch on events 
    google.on('result', function (item) {
        console.log('out', item);
    });
});

module.exports = router;