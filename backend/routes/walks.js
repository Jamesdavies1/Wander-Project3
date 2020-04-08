const router = require("express").Router();
let Walks = require("../models/walks");

//GET REQUEST
router.route("/").get((req, res) => {
Walks.find()
.then(walks => res.json(walks))
.catch(err => res.status(400).json("error: " + err));
});

//POST REQUEST
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

//GET REQUEST
router.route("/:id").get((req, res) => {
    Walks.findById(req.params.id)
    .then(walks => res.json(walks))
    .catch(err => res.status(400).json("error: " + err));
});

//DELETE REQUEST
router.route("/:id").delete((req, res) => {
    Walks.findByIdAndDelete(req.params.id)
    .then(() => res.json("Walk deleted."))
    .catch(err => res.status(400).json("error: " + err));
});

//UPDATE REQUEST
router.route("/update/:id").post((req, res) => {
    Walks.findById(req.params.id)
    .then(walks => {
        walks.name = req.body.name;
        walks.difficulty = req.body.difficulty;
        walks.time = Number(req.body.time);
        walks.location = req.body.location;

        walks.save()
        .then(() => res.json("Walk updated!."))
        .catch(err => escape.status(400).json("error: " + err));
        });
    });

module.exports = router;