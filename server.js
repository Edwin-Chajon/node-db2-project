const express = require('express');

const carRouter = require('./api/router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {res.send('waddup')});

server.use('/api/cars', carRouter);

module.exports = server;
/*
{
	"vin": 0767756,
    "make": "Land Rover",
    "model": "Range Rover",
    "mileage": 37000
}
*/