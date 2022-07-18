/**
 * Create a controller class to help build the funtions while keeping the workout.js cleaner
 * Each controller will be linked to its unique route (in workout.js)
 */
const Workout = require("../models/workoutModel");

//get all workouts
const getWorkouts = async (req, res) => {
    //find({}}) => returns all elements in the Workout clustor
    //sort({createdAt: -1}); => sorts by date created, newest first
    const workouts = await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts);
}


//get a single workout
const getWorkout = async (req, res) => {
    const { id }  = req.params;

    const workout = await Workout.findById(id);

    //added return to end function (if id not found)
    if(!Workout){
        return res.status(404).json({error: "no such workout"});
    }

    res.status(200).json(workout);
}


//create a new workout
// https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client
const createWorkout = async (req, res) => {
        const {title, load, reps} = req.body;

    //Adds a doc to the database
    try {
        const workout = await Workout.create({title, load, reps}); //is an async function
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//delete a workout


//update a workout

//This is needed to export the function (as an object)
module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
}