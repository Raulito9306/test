var express = require('express');
var router = express.Router();
var marketsController = require("../controllers/markets.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {};
    if (req.body) { data = req.body }
    marketsController.getMarkets(data, function(err, row) {
        if (err) {
            res.status(500).json({
                message: err
            });
        } else {
            res.render('index', {
                title: 'Listado de mercados',
                members: row
            });
        }
    });
});

module.exports = router;