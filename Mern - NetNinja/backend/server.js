require('dotenv').config();

const express = require("express");
const app = express(); // express app

// Routes
app.get("/", (req, res) => {
    res.json({mssg: "Welcome to the app"});
});

//Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 3000');
});
