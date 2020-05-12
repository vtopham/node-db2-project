const express = require('express');

const knex = require('knex')
const knexfile = require("./knexfile.js")
const dbConfig = knexfile.development;
const db = knex(dbConfig);

const server = express();
server.use(express.json())

//is the server working
server.get('/',(req, res) => {
    res.status(200).json({Message: "Welcome to my cars API!"})
})

//get a list of all cars
server.get('/cars', (req, res) => {
    db.select('*')
        .from('cars')
        .then(cars => {
            res.status(200).json({data: cars})
        }).catch(err => {
            res.status(500).json({message: "Error fetching cars", error: err})
        })

})


//add to the list of cars
server.post('/cars', validateCar, (req, res) => {
    db('cars')
        .insert(req.body, "id")
        .then(id => {
            res.status(201).json({message: `car ${id} successfully created!`})
        })
        .catch(err => {
            res.status(500).json({message: 'Error creating account'})
        })

})

//get a specific car
server.get('/cars/:id', (req, res) => {
    db.select('*')
        .from('cars')
        .where({id: req.params.id})
        .then(car => {
            if(car[0]) {
                res.status(200).json({data: car})
            } else {
                res.status(404).json({message: "car not found"})
            }
            
        })
        .catch(err => {
            res.status(500).json({message: "Error fetching car", error: err})
        })
})

//update a car


//delete a car


//middleware

function validateCar(req, res, next) {
    if(req.body.VIN && req.body.Make && req.body.Model && req.body.Mileage) {
        next();
    } else {
        res.status(404).json({message: "Please include the VIN, make, model, and mileage of the vehicle."})
    }
}

function validateCarId(req, res, next) {
    
}
server.listen(5000, _ => {
    console.log("Listening on 5000")
})