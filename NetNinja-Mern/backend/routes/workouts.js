const express = require('express');
const Workout = require("../models/workoutModel");
const {
    createWorkout,
    getWorkouts, 
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController");
const router = express.Router();


//GET all workouts
router.get("/", getWorkouts);

//GET a single workout (:id) represents a route parameter
router.get("/:id", getWorkout);

//POST a new workout (exported from workoutController)
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;