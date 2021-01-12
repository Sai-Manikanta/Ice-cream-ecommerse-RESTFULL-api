const router = require('express').Router();
const IceCreame = require('../models/iceCreams');

router.get('/', async (req, res) => {
    const iceCreames = await IceCreame.find();
    res.send(iceCreames);
})

router.get('/:id', async (req, res) => {
    const iceCreames = await IceCreame.findById(req.params.id);
    res.send(iceCreames);
})

router.post('/', async (req, res) => {
    let iceCreame = new IceCreame(req.body);
    iceCreame = await iceCreame.save();
    res.send(iceCreame);
})

router.delete('/:id', async (req, res) => {
    const iceCreame = await IceCreame.findByIdAndDelete(req.params.id);
    res.send(iceCreame);
})

router.put('/:id', async (req, res) => {
    const iceCreame = await IceCreame.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
    res.send(iceCreame);
})

module.exports = router;

// {
//     name: req.body.name,
//     flavor: req.body.flavor,
//     color: req.body.color,
//     ingredients: req.body.ingredients,
//     images: req.body.images,
//     price: req.body.price,
//     rating: req.body.rating, 
// }