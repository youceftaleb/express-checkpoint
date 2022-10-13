const express = require('express');
const checkTime = require('../middleware');
const router = express.Router();


module.exports = () => {
    router.get('/', checkTime, (req, res) => {
        res.status(200);
        res.send(true);
    });
    return router;
}