const express = require('express');
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
router.post("/", (req, res) => {
    res.json({mssg: "POST a new workout"});
});

//DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a workout"});
});

// UPDATE a workout
router.patch("/", (req, res) => {
    res.json({mssg: "UPDATE a workout"});
});

module.exports = router;