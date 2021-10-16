const router = require("express").Router();

const { Workout } = require("../../models");

router.get("/", (req, res) => {
    Workout.aggregate([{ 
        $addFields:{
            totalDuration: { $sum: "$exercises.duration" }
        }
    }])
    .then( workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    })
});

router.post("/", (req, res) => {

})

module.exports = router;