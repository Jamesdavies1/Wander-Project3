const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const routes = require("./routes");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use(routes);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
  })


app.listen(PORT, () =>
  console.log(`API Server now listening on PORT ${PORT}!`)
);
