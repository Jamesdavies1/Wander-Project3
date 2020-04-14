const router = require("express").Router();
let logIn = require("../models/logIn");

//GET REQUEST
router.route("/api/User").get((req, res) => {
  logIn
    .find()
    .then(login => res.json(login))
    .catch(err => res.status(400).json("error: " + err));
});

//NEW GET REQUEST
// router.route("/api/walks").get((req, res) => {
//     console.log("I have been triggered by the forntend")
//   if (req.query.difficulty && req.query.time && req.query.location) {
//     return Walks.find({difficulty: req.query.difficulty, time: req.query.time, location: req.query.location } )
//     .then(walks => res.json(walks))
//     .catch(err => res.status(400).json("error: " + err));
// } else {
//     return Walks.find()
//       .then(walks => res.json(walks))
//       .catch(err => res.status(400).json("error: " + err));
// }

// });

//POST REQUEST
router.route("/api/addUser").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new logIn({
    email,
    password
  });

  newUser
    .save()
    .then(() => res.json("New user now added!"))
    .catch(err => res.status(400).json("error: " + err));
});

//GET REQUEST
router.route("/api/User/:id").get((req, res) => {
  logIn
    .findById(req.params.id)
    .then(logIn => res.json(login))
    .catch(err => res.status(400).json("error: " + err));
});

//DELETE REQUEST
router.route("/api/delete/User/:id").delete((req, res) => {
  logIn
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch(err => res.status(400).json("error: " + err));
});

//UPDATE REQUEST
router.route("/api/update/User/:id").post((req, res) => {
  logIn.findById(req.params.id).then(login => {
    login.email = req.body.email;
    login.password = req.body.password;

    login
      .save()
      .then(() => res.json("User updated!."))
      .catch(err => escape.status(400).json("error: " + err));
  });
});

module.exports = router;
