const router = require("express").Router();
const { Workout } = require("../../models");

router.get("/", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  Workout.create(req.body)
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
    Workout.updateOne({ 
        _id: req.params.id 
    }, {
        $push: { exercises: req.body }
    })
    .then((workoutData) => {
            res.json(workoutData);
    })
    .catch((err) => {
            res.json(err);
    });
});

router.get("/range", (req, res) => {

})

module.exports = router;
