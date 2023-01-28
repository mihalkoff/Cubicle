// const express = require('express');
// const Router = express.Router;

//modular router
const cubeController = require('./controllers/cubeController');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/create', (req, res) => {
//     res.render('create');
// });

router.get('/create', (req, res) => cubeController.getCreateCube);

module.exports = router;