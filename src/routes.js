// const express = require('express');
// const Router = express.Router;

//modular router

const router = require('express').Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

// router.get('/', (req, res) => {
//     res.render('index');
// });

// router.get('/about', (req, res) => {
//     res.render('about');
// });

// app.get('/create', (req, res) => {
//     res.render('create');
// });

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);

module.exports = router;