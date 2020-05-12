const express = require('express');

const server = express();
server.use(express.json())

server.get('/',(req, res) => {
    res.status(200).json({Message: "Welcome to my cars API!"})
})

server.listen(5000, _ => {
    console.log("Listening on 5000")
})