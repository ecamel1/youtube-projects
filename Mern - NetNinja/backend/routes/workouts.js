const express = require('express');
const Workout = require("../models/workoutModel");
const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
    res.json({mssg: "Get all workoouts"});
});

//GET a signle workout (:id) represents a route parameter
router.get("/:id", (req, res) => {
    res.json({mssg: "Get a single workoouts"});
});

//POST a new workout
router.post("/", async (req, res) => {
    const {title, load, reps} = req.body;
    try {
        const workout = await Workout.create({title, load, reps}); //is an async function
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
    res.json({mssg: "POST a new workout"});
});

//DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a workout"});
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "UPDATE a workout"});
});

module.exports = router;