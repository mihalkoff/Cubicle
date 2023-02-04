const router = require('express').Router();

const Accessory = require('../models/Accessory');

//url: /accessory/create
router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl } = req.body;

    // const accessory = new Accessory()

    await Accessory.create({ name, description, imageUrl });

    res.redirect('/');
});


module.exports = router;