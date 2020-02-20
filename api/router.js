const express = require('express');

const Cars = require('../data/dbConfig');

const router = express.Router()

router.get('/', (req, res) => { 
    Cars.select('*').from('cars')
        .then(cars => {res.status(200).json(cars)})
        .catch(() => {res.status(500).json({Message: "error requesting."})})
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Cars('cars').where({id}).first()
        .then(cars => {res.status(200).json(cars)})
        .catch(() => {res.status(500).json({Message: "doesn't exist."})})
});

router.post('/', (req, res) => {
    const changes = req.body;
    Cars('cars').insert(changes)
      .then(cars => {res.status(201).json(cars)})
      .catch(() => {res.status(500).json({ Message: 'Failed to create account.' })});
});
  


module.exports = router;