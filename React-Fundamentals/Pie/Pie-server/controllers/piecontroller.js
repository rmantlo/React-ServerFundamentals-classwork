const router = require('express').Router();
const Pie = require('../db').import('../models/pie');

//router.get('/', (req,res) => res.send('I love more pies'));

//get All - returns all of a certain tables rows
router.get('/', (req, res) => {
    Pie.findAll()
        .then(pies => res.status(200).json(pies))
        .catch(err => res.status(500).json({ error: err }))
});

router.post('/', (req, res) => {
    const newPie = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        ratings: req.body.ratings
    }
    Pie.create(newPie)
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({ error: err }))
});

//CHALLENGE: DEBUG THIS AND MAKE IT WORK
router.get('/:nameOfPie', (req, res) => {
  Pie.findOne({where: { nameOfPie: req.params.nameOfPie }})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err}))
})

router.put('/:id', (req, res) => {
  Pie.update(req.body, { where: { id: req.params.id }})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json(err))
})



module.exports = router;