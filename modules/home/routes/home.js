const controller = require('./../controllers/home');
const express = require('express');
const router = express.Router();

exports.routes = function(database) {
    router
        .get('/', (req, res) => {
            controller.get(req, res, database);
        })
        .post('/', (req, res) => {
            controller.post(req, res, database);
        });
    return router;
};
