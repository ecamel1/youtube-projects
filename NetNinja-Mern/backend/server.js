require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

 // express app
const app = express();

//middleware
app.use(express.json()); //looks for the body returned and set it to the req var
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose.connect(process.env.MONG_URI) //naturally async
    .then(() => {
        //Listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });


