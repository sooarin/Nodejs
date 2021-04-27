var express = require('express');
var router = express.Router();

/* GET hellowWorld page. */
router.get('/', function(req, res, next) {
    res.render('helloWorld', { title: 'helloWorld!' });
});

module.exports = router;