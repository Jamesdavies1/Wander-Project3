const router = require("express").Router();
let Walks = require("../models/walks");

router.route("/").get((req, res) => {
Walks.find()
.then(walks => res.json(walks))
.catch(err => res.status(400).json("error: " + err));
});

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const difficulty = req.body.difficulty;
    const time = Number(req.body.time);
    const location = req.body.location;

    const newWalk = new Walks({
        name,
        difficulty,
        time,
        location,
    });

    newWalk.save()
    .then(() => res.json("New walk added!"))
    .catch(err => res.status(400).json("error: " + err));
});

module.exports = router;