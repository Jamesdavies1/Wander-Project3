const router = require("express").Router();
let logIn = require("../models/logIn");

//POST REQUEST MATCHING USER INPUT DATA WITH DATABASE DATA
router.route("/api/Usercheck").post((req, res) => {
  const suppliedPassword = req.body.password;
  const email = req.body.email;

  const foundUser = logIn.findOne({ email });

  if (foundUser) {
    const actualPassword = foundUser.password;
    if (suppliedPassword === actualPassword) {
      return res.status(200).send();
    } else {
      return res.status(401).send();
    }
  }
});

//GET REQUEST
router.route("/api/User").get((req, res) => {
  logIn
    .find()
    .then(login => res.json(login))
    .catch(err => res.status(400).json("error: " + err));
});

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
