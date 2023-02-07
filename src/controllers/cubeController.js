const Cube = require('../models/Cube');
// const db = require('../db.json');

const Accessory = require('../models/Accessory');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    //save cube
    const { name, description, imageUrl, difficultyLevel } = req.body;
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });
    // Cube.save(cube);
    await cube.save();

    //redirect
    res.redirect('/');
};

exports.getDetails = async (req, res) => {
    // let cubeId = Number(req.params.cubeId);

    // if(!cubeId) {
    //     return res.redirect('/404');
    // }

    // let cube = db.cubes.find(x => x.id === cubeId);

    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    if(!cube) {
        return res.redirect('/404');
    }

    res.render('cube/details', { cube });
};

exports.getAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find().lean();

    res.render('cube/attach', { cube, accessories });
};

exports.postAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
};