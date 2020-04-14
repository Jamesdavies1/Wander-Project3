const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/walks");
const userRoutes = require("./routes/logIn");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

app.use(routes);
app.use(userRoutes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () =>
  console.log(`API Server now listening on PORT ${PORT}!`)
);
