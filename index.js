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


//update a car


//delete a car


//middleware


server.listen(5000, _ => {
    console.log("Listening on 5000")
})