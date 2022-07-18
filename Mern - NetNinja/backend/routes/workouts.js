const express = require('express');
const Workout = require("../models/workoutModel");
const {
    createWorkout,
    getWorkouts, 
    getWorkout
} = require("../controllers/workoutController");
const router = express.Router();


//GET all workouts
router.get("/", getWorkouts);

//GET a signle workout (:id) represents a route parameter
router.get("/:id", getWorkout);

//POST a new workout (exported from workoutController)
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a workout"});
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "UPDATE a workout"});
});

module.exports = router;